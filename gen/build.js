/* Writes the seven static pages and rewrites the I18N block inside main.js
   so the English dictionary can never drift from the Spanish in the HTML. */
const fs = require('fs');
const path = require('path');
const ROOT = '/home/user/colombianculturalassociation';

const { DICT } = require('./content');
const P = require('./pages');

const PAGES = {
  'index.html': P.home,
  'quienes-somos.html': P.quienes,
  'asistencia.html': P.asistencia,
  'cultura.html': P.cultura,
  'eventos.html': P.eventos,
  'consulado.html': P.consulado,
  'contacto.html': P.contacto,
};

for (const [file, fn] of Object.entries(PAGES)) {
  fs.writeFileSync(path.join(ROOT, file), fn());
  console.log('wrote', file);
}

/* ---- rebuild the dictionary inside assets/js/main.js -------------------- */
const jsPath = path.join(ROOT, 'assets/js/main.js');
let js = fs.readFileSync(jsPath, 'utf8');

const keys = Object.keys(DICT).sort();
const esc = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const block = lang =>
  keys.map(k => `      '${k}': '${esc(DICT[k][lang])}'`).join(',\n');

const dict = `  var I18N = {
    es: {
${block('es')}
    },

    en: {
${block('en')}
    }
  };`;

const start = js.indexOf('  var I18N = {');
const endMarker = '\n  };\n';
const end = js.indexOf(endMarker, start);
if (start < 0 || end < 0) throw new Error('could not locate the I18N block in main.js');

js = js.slice(0, start) + dict + js.slice(end + endMarker.length - 1);
fs.writeFileSync(jsPath, js);
console.log(`rewrote I18N in main.js — ${keys.length} keys per language`);
