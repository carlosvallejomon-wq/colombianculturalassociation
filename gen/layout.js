const { t, key, ns } = require('./content');

/* The five photographs supplied by the client, in gallery order. */
const FOTOS = [
  { file: 'galeria-1.jpg', es: 'Santuario de Las Lajas, Nariño', en: 'Las Lajas Sanctuary, Nariño' },
  { file: 'galeria-2.jpg', es: 'Bogotá al atardecer', en: 'Bogotá at sunset' },
  { file: 'galeria-3.jpg', es: 'Torre del Reloj, Cartagena', en: 'Clock Tower, Cartagena' },
  { file: 'galeria-4.jpg', es: 'Cristo Rey, Cali', en: 'Cristo Rey, Cali' },
  { file: 'galeria-5.jpg', es: 'Cerro de Monserrate, Bogotá', en: 'Monserrate, Bogotá' },
];

const NAV = [
  { href: 'index.html',         id: 'inicio',    es: 'Inicio',           en: 'Home' },
  { href: 'quienes-somos.html', id: 'quienes',   es: 'Quiénes somos',    en: 'About us' },
  { href: 'asistencia.html',    id: 'asistencia',es: 'Asistencia social',en: 'Social assistance' },
  { href: 'cultura.html',       id: 'cultura',   es: 'Cultura',          en: 'Culture' },
  { href: 'eventos.html',       id: 'eventos',   es: 'Eventos',          en: 'Events' },
  { href: 'consulado.html',     id: 'consulado', es: 'Consulado',        en: 'Consulate' },
  { href: 'contacto.html',      id: 'contacto',  es: 'Contacto',         en: 'Contact' },
];

/* Flag-coloured geometry, echoing the panels in the client's own hero. */
const CUADROS = `
<div class="cuadros" aria-hidden="true">
  <svg viewBox="0 0 600 420" preserveAspectRatio="xMaxYMin slice">
    <polygon points="300,0 600,0 600,150"   fill="var(--amarillo)" opacity=".95"/>
    <polygon points="600,150 600,330 430,240" fill="var(--rojo)"     opacity=".92"/>
    <polygon points="300,0 430,240 190,150"  fill="var(--azul)"     opacity=".90"/>
    <polygon points="430,240 600,330 470,420" fill="var(--azul-deep)" opacity=".85"/>
    <polygon points="600,0 600,150 470,60"   fill="var(--rojo)"     opacity=".55"/>
    <polygon points="190,150 430,240 250,300" fill="var(--amarillo)" opacity=".45"/>
  </svg>
</div>`;

const MARK = `<svg viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="11" fill="#0A1B3D"/>
  <rect x="8" y="9" width="24" height="11" rx="2.5" fill="#FFCE00"/>
  <rect x="8" y="21.5" width="24" height="4.5" rx="1.5" fill="#14336F"/>
  <rect x="8" y="27.5" width="24" height="4.5" rx="2.5" fill="#CE2027"/>
</svg>`;

const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230A1B3D'/%3E%3Crect x='6' y='7' width='20' height='9' rx='2' fill='%23FFCE00'/%3E%3Crect x='6' y='17' width='20' height='4' rx='1.5' fill='%2314336F'/%3E%3Crect x='6' y='22' width='20' height='4' rx='2' fill='%23CE2027'/%3E%3C/svg%3E";

function header(currentId) {
  ns('nav');
  const links = NAV.map(n =>
    `      <a href="${n.href}"${n.id === currentId ? ' class="is-current" aria-current="page"' : ''} data-i18n="nav.${n.id}">${t(n.id, n.es, n.en)}</a>`
  ).join('\n');

  ns('a11y');
  const skip = t('skip', 'Saltar al contenido principal', 'Skip to main content');
  t('theme', 'Cambiar tema', 'Toggle theme');
  t('menu', 'Abrir menú', 'Open menu');

  return `<a class="skip-link" href="#main" data-i18n="a11y.skip">${skip}</a>

<!-- Fixed field of light behind everything: the flag as illumination. -->
<div class="luminaria" aria-hidden="true">
  <span class="luz luz-amarilla" data-depth="26"></span>
  <span class="luz luz-azul" data-depth="-18"></span>
  <span class="luz luz-roja" data-depth="34"></span>
</div>

<header class="site-header" id="siteHeader">
  <div class="shell header-inner">
    <a class="brand" href="index.html" aria-label="Asociación Cultural Colombiana — inicio">
      <span class="brand-mark" aria-hidden="true">${MARK}</span>
      <span class="brand-text">
        <strong>Asociación Cultural</strong>
        <span>Colombiana · Dallas, TX</span>
      </span>
    </a>

    <nav class="nav" id="primaryNav" aria-label="Navegación principal">
${links}
    </nav>

    <div class="header-actions">
      <div class="lang-switch" role="group" aria-label="Idioma / Language">
        <button type="button" data-lang="es" class="is-active" aria-pressed="true">ES</button>
        <button type="button" data-lang="en" aria-pressed="false">EN</button>
      </div>

      <button type="button" class="icon-btn" id="themeToggle" aria-label="Cambiar tema" data-i18n-attr="aria-label:a11y.theme">
        <svg class="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.4M12 19v2.4M2.6 12H5m14 0h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7"/></svg>
        <svg class="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 1 1 9.4 3.5a7 7 0 0 0 11.1 11.1Z"/></svg>
      </button>

      <button type="button" class="icon-btn nav-toggle" id="navToggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Abrir menú" data-i18n-attr="aria-label:a11y.menu">
        <span class="burger" aria-hidden="true"><i></i><i></i><i></i></span>
      </button>
    </div>
  </div>
  <span class="header-ribbon" aria-hidden="true"></span>
</header>`;
}

function footer() {
  ns('footer');
  const cols = `
      <div>
        <h3 data-i18n="footer.col1">${t('col1', 'La asociación', 'The association')}</h3>
        <a href="quienes-somos.html" data-i18n="nav.quienes">Quiénes somos</a>
        <a href="cultura.html" data-i18n="nav.cultura">Cultura</a>
        <a href="eventos.html" data-i18n="nav.eventos">Eventos</a>
      </div>
      <div>
        <h3 data-i18n="footer.col2">${t('col2', 'Ayuda', 'Help')}</h3>
        <a href="asistencia.html" data-i18n="nav.asistencia">Asistencia social</a>
        <a href="consulado.html" data-i18n="nav.consulado">Consulado</a>
        <a href="contacto.html" data-i18n="nav.contacto">Contacto</a>
      </div>
      <div>
        <h3 data-i18n="footer.col3">${t('col3', 'Enlaces de interés', 'Useful links')}</h3>
        <a href="https://www.cancilleria.gov.co/" target="_blank" rel="noopener">Cancillería de Colombia</a>
        <a href="https://bogota.gov.co/" target="_blank" rel="noopener">Alcaldía de Bogotá</a>
        <a href="https://www.hhs.texas.gov/" target="_blank" rel="noopener">Texas HHS</a>
      </div>`;

  return `<footer class="site-footer">
  <span class="footer-ribbon" aria-hidden="true"></span>
  <div class="shell footer-inner">
    <div class="footer-brand">
      <span class="brand-mark" aria-hidden="true">${MARK}</span>
      <p class="footer-name">Asociación Cultural Colombiana</p>
      <p class="footer-tag" data-i18n="footer.tagline">${t('tagline',
        'Empoderando y conectando comunidades a través del arte y la cultura, en Dallas, Texas.',
        'Empowering and connecting communities through art and culture, in Dallas, Texas.')}</p>
      <p class="footer-legal" data-i18n="footer.legal">${t('legal',
        'Organización sin ánimo de lucro al servicio de la comunidad colombiana en Texas.',
        'Nonprofit organization serving the Colombian community in Texas.')}</p>
    </div>
    <nav class="footer-nav" aria-label="Enlaces del sitio">${cols}
    </nav>
  </div>
  <div class="shell footer-bottom">
    <p>&copy; <span id="year">2026</span> Asociación Cultural Colombiana. <span data-i18n="footer.rights">${t('rights', 'Todos los derechos reservados.', 'All rights reserved.')}</span></p>
    <p class="footer-made" data-i18n="footer.made">${t('made', 'Hecho con orgullo colombiano en Dallas 🇨🇴', 'Made with Colombian pride in Dallas 🇨🇴')}</p>
  </div>
</footer>`;
}

/** Full document. `hero` is the markup for the top of <main>. */
function page({ id, title, description, hero, body }) {
  return `<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#E9EDF9" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#050914" media="(prefers-color-scheme: dark)">

<meta property="og:type" content="website">
<meta property="og:site_name" content="Asociación Cultural Colombiana">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:locale" content="es_US">
<meta property="og:locale:alternate" content="en_US">

<link rel="icon" href="${FAVICON}">
<link rel="stylesheet" href="assets/css/styles.css">
<noscript><style>.reveal{opacity:1 !important;transform:none !important}</style></noscript>
</head>
<body>

${header(id)}

<main id="main">
${hero}
${body}
</main>

${footer()}

<script src="assets/js/main.js"></script>
</body>
</html>
`;
}

/** Standard inner-page hero band with the flag geometry. */
function pageHero(eyebrowKey, titleKey, leadKey, eyebrow, title, lead) {
  return `<section class="hero hero-inner-page">
  ${CUADROS}
  <div class="shell hero-inner">
    <p class="eyebrow reveal" data-i18n="${eyebrowKey}">${eyebrow}</p>
    <h1 class="hero-title hero-title-sm reveal" data-i18n="${titleKey}">${title}</h1>
    <p class="hero-lead reveal" data-i18n="${leadKey}">${lead}</p>
  </div>
</section>`;
}

module.exports = { page, pageHero, CUADROS, FOTOS, NAV, MARK };
