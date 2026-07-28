/* Removes the background from artwork and writes a PNG with real
   transparency. Two modes, because the client's files come in two shapes:

   --modo=croma  (default)  Keys on colourfulness. Anything close to neutral
     (white, grey, black outlines) becomes transparent; saturated pixels stay.
     This is the right tool for the flag artwork, which is a sticker: coloured
     brush strokes printed on a WHITE HEART-SHAPED PLATE with a grey outline,
     the whole thing on a light square. Only the strokes should survive, and
     the plate is enclosed by the outline so a border flood fill cannot reach
     it. Measured on corazon.jpg: the strokes sit at chroma 147-241 while the
     plate, outline and square are all under 10 — a wide, safe gap.

   --modo=borde  Flood-fills inward from the border, clearing only near-white
     reachable from outside. Use for artwork whose own interior is legitimately
     white and must be kept.

   Usage: node quitar-fondo.js <entrada> <salida.png> [--modo=croma|borde] [--lado=700] */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const args = process.argv.slice(2);
const flags = Object.fromEntries(
  args.filter(a => a.startsWith('--')).map(a => a.replace(/^--/, '').split('='))
);
const [inFile, outFile] = args.filter(a => !a.startsWith('--'));

if (!inFile || !outFile) {
  console.error('uso: node quitar-fondo.js <entrada> <salida.png> [--modo=croma|borde] [--lado=700]');
  process.exit(1);
}
const MODO = flags.modo || 'croma';
if (MODO !== 'croma' && MODO !== 'borde') {
  console.error(`modo desconocido: ${MODO} (usa croma o borde)`);
  process.exit(1);
}
// The heart renders at ~340px CSS, so ~700px covers 2x displays with room
// to spare; anything larger is pure weight on a phone connection.
const MAX = parseInt(flags.lado, 10) || 700;

(async () => {
  const b = await chromium.launch({ executablePath: EXE });
  const p = await b.newPage();
  await p.goto('file://' + path.resolve(inFile));

  const result = await p.evaluate(async ({ MAX, MODO }) => {
    const img = document.querySelector('img');
    await img.decode();
    // Scale down first, so the keying and blur run on the final pixels and
    // the edge feathering matches what is actually displayed.
    const scale = Math.min(1, MAX / Math.max(img.naturalWidth, img.naturalHeight));
    const W = Math.round(img.naturalWidth * scale);
    const H = Math.round(img.naturalHeight * scale);
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.imageSmoothingQuality = 'high';
    g.drawImage(img, 0, 0, W, H);
    const imageData = g.getImageData(0, 0, W, H);
    const d = imageData.data;

    const alpha = new Float32Array(W * H);

    if (MODO === 'croma') {
      /* Alpha from chroma, as a ramp rather than a hard cut: the strokes are
         anti-aliased against the plate, so a step function would leave a
         jagged staircase. LO/HI sit in the empty part of the histogram, well
         below the least saturated real colour (the blue, at 147). */
      const LO = 30, HI = 80;
      for (let n = 0; n < W * H; n++) {
        const i = n * 4;
        const mn = Math.min(d[i], d[i + 1], d[i + 2]);
        const mx = Math.max(d[i], d[i + 1], d[i + 2]);
        alpha[n] = 255 * Math.max(0, Math.min(1, (mx - mn - LO) / (HI - LO)));
      }
    } else {
      // "Background-ish": bright and close to neutral grey.
      const isBg = (i) => {
        const r = d[i], gr = d[i + 1], bl = d[i + 2];
        const mn = Math.min(r, gr, bl), mx = Math.max(r, gr, bl);
        return mn >= 218 && (mx - mn) <= 18;
      };
      const mask = new Uint8Array(W * H);
      const stack = [];
      const push = (x, y) => {
        if (x < 0 || y < 0 || x >= W || y >= H) return;
        const n = y * W + x;
        if (mask[n]) return;
        if (!isBg(n * 4)) return;
        mask[n] = 1;
        stack.push(n);
      };
      for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
      for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
      while (stack.length) {
        const n = stack.pop();
        const x = n % W, y = (n - x) / W;
        push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
      }
      for (let n = 0; n < W * H; n++) alpha[n] = mask[n] ? 0 : 255;
    }

    // Feather, so the cut edge is not a hard staircase against the page.
    const blurred = new Float32Array(W * H);
    const R = 1; // 3x3 box blur — enough to soften, not enough to smear
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        let sum = 0, count = 0;
        for (let dy = -R; dy <= R; dy++) {
          for (let dx = -R; dx <= R; dx++) {
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
            sum += alpha[ny * W + nx]; count++;
          }
        }
        blurred[y * W + x] = sum / count;
      }
    }

    let cleared = 0;
    for (let n = 0; n < W * H; n++) {
      const a = Math.round(blurred[n]);
      /* Un-premultiply toward the pixel's own hue. A stroke edge that was
         blended with the white plate reads as a pale wash; left as-is it
         would show a white fringe over a dark background. Pushing
         partly-transparent pixels back toward full saturation keeps the edge
         coloured instead. */
      if (MODO === 'croma' && a > 0 && a < 255) {
        const i = n * 4;
        const mx = Math.max(d[i], d[i + 1], d[i + 2]);
        if (mx > 0) {
          const k = Math.min(1.6, 255 / mx);
          d[i] = Math.min(255, d[i] * k);
          d[i + 1] = Math.min(255, d[i + 1] * k);
          d[i + 2] = Math.min(255, d[i + 2] * k);
        }
      }
      d[n * 4 + 3] = a;
      if (a < 128) cleared++;
    }

    g.putImageData(imageData, 0, 0);
    return {
      dataUrl: c.toDataURL('image/png'),
      W, H,
      porcentaje: ((cleared / (W * H)) * 100).toFixed(1),
    };
  }, { MAX, MODO });

  const b64 = result.dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(outFile, Buffer.from(b64, 'base64'));
  console.log(`${path.basename(inFile)} -> ${path.basename(outFile)}  (modo: ${MODO})`);
  console.log(`  ${result.W}x${result.H}, fondo eliminado: ${result.porcentaje}% de la imagen`);
  console.log(`  peso: ${(fs.statSync(outFile).size / 1024).toFixed(0)} KB`);
  await b.close();
})();
