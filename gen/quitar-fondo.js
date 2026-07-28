/* Removes a flat white/near-white background from an image and writes a PNG
   with real transparency.

   Uses a flood fill inward from the border rather than "delete every white
   pixel": this artwork is a brush/grunge texture whose interior contains
   white speckles that are part of the drawing. Only white REACHABLE from
   the outside edge is background; white enclosed by the heart stays.

   Usage: node quitar-fondo.js <entrada> <salida.png> */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const [, , inFile, outFile, maxSizeArg] = process.argv;
if (!inFile || !outFile) {
  console.error('uso: node quitar-fondo.js <entrada> <salida.png> [ladoMax]');
  process.exit(1);
}
// The heart renders at ~340px CSS, so ~700px covers 2x displays with room
// to spare; anything larger is pure weight on a phone connection.
const MAX = parseInt(maxSizeArg, 10) || 700;

(async () => {
  const b = await chromium.launch({ executablePath: EXE });
  const p = await b.newPage();
  await p.goto('file://' + path.resolve(inFile));

  const result = await p.evaluate(async (MAX) => {
    const img = document.querySelector('img');
    await img.decode();
    // Scale down first, so the flood fill and blur run on the final pixels
    // and the edge feathering matches what is actually displayed.
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

    // "Background-ish": bright and close to neutral grey. The threshold is
    // loose enough to swallow the soft drop shadow around the artwork, but
    // tight enough that the yellow (233,202,24) is nowhere near it.
    const isBg = (i) => {
      const r = d[i], gr = d[i + 1], bl = d[i + 2];
      const mn = Math.min(r, gr, bl), mx = Math.max(r, gr, bl);
      return mn >= 218 && (mx - mn) <= 18;
    };

    // Flood fill from every border pixel.
    const mask = new Uint8Array(W * H);      // 1 = outside background
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

    // Build the alpha channel from the mask, then feather it so the cut edge
    // is not a hard jagged staircase against the page background.
    const alpha = new Float32Array(W * H);
    for (let n = 0; n < W * H; n++) alpha[n] = mask[n] ? 0 : 255;

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
      d[n * 4 + 3] = a;
      if (a < 128) cleared++;
    }

    g.putImageData(imageData, 0, 0);
    return {
      dataUrl: c.toDataURL('image/png'),
      W, H,
      quitados: cleared,
      porcentaje: ((cleared / (W * H)) * 100).toFixed(1),
    };
  }, MAX);

  const b64 = result.dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(outFile, Buffer.from(b64, 'base64'));
  console.log(`${path.basename(inFile)} -> ${path.basename(outFile)}`);
  console.log(`  ${result.W}x${result.H}, fondo eliminado: ${result.porcentaje}% de la imagen`);
  console.log(`  peso: ${(fs.statSync(outFile).size / 1024).toFixed(0)} KB`);
  await b.close();
})();
