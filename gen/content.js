/* Single source of truth for the site's copy.
   Every string is a {es, en} pair. The generator writes the Spanish into the
   HTML (so the site reads fine with no JavaScript) and collects the English
   into the I18N dictionary in main.js. */

const DICT = {};           // key -> {es, en}
let currentPrefix = '';

function ns(prefix) { currentPrefix = prefix; }

/** Register a string and return its Spanish text. */
function t(key, es, en) {
  const full = currentPrefix ? `${currentPrefix}.${key}` : key;
  if (DICT[full] && (DICT[full].es !== es || DICT[full].en !== en)) {
    throw new Error('duplicate i18n key with different text: ' + full);
  }
  DICT[full] = { es, en };
  return es;
}

/** Register and return the attribute + text, e.g. `<h2 ${a('title')}>` */
function key(k) {
  return `data-i18n="${currentPrefix ? currentPrefix + '.' : ''}${k}"`;
}

module.exports = { DICT, ns, t, key };
