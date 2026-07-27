/* ==========================================================================
   Colombian Cultural Association — behaviour
   No dependencies. Progressive enhancement: the page is fully readable
   (in Spanish) with JavaScript disabled.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     Translations
     Spanish is the source of truth in index.html; English is applied here.
     To add a string: give the element data-i18n="section.key" and add the key
     to BOTH dictionaries below.
     ------------------------------------------------------------------------ */
  var I18N = {
    es: {
      'a11y.skip': 'Saltar al contenido principal',
      'a11y.theme': 'Cambiar tema',
      'a11y.menu': 'Abrir menú',

      'nav.about': 'Nosotros',
      'nav.programs': 'Programas',
      'nav.festival': 'Festival',
      'nav.events': 'Eventos',
      'nav.involved': 'Participa',
      'nav.contact': 'Contacto',
      'nav.donate': 'Donar',

      'hero.eyebrow': 'Kansas City · Fundada en 2018 · 501(c)(3)',
      'hero.title': 'Celebramos la cultura colombiana en el corazón de <em>Kansas City</em>',
      'hero.lead': 'Somos una organización sin ánimo de lucro dedicada a promover y preservar los valores, las tradiciones y la riqueza cultural de Colombia entre colombianos y amigos de Colombia en el área metropolitana de Kansas City.',
      'hero.ctaPrimary': 'Conoce el Festival',
      'hero.ctaSecondary': 'Cómo participar',
      'hero.stat1Label': 'Fundada',
      'hero.stat2Label': 'Estatus',
      'hero.stat2Value': '501(c)(3)',
      'hero.stat3Label': 'Festival',
      'hero.stat3Value': 'Anual',
      'hero.stat4Label': 'Comunidad',
      'hero.stat4Value': 'KC Metro',

      'about.eyebrow': 'Nuestra misión',
      'about.title': 'Una comunidad que mantiene viva a Colombia',
      'about.lead': 'La Colombian Cultural Association nació del deseo de un grupo de familias colombianas en Kansas City de compartir su herencia con la ciudad que hoy llaman casa. Lo que empezó con reuniones pequeñas es hoy una organización que produce eventos culturales, programas educativos y espacios de encuentro para toda la comunidad.',
      'about.v1Title': 'Cultura',
      'about.v1Text': 'Música, danza, gastronomía y arte colombiano presentados con orgullo y autenticidad.',
      'about.v2Title': 'Comunidad',
      'about.v2Text': 'Un punto de encuentro para colombianos, familias mixtas y amigos de Colombia en KC.',
      'about.v3Title': 'Educación',
      'about.v3Text': 'Charlas y presentaciones en escuelas y universidades para acercar Colombia a más personas.',
      'about.v4Title': 'Legado',
      'about.v4Text': 'Que las nuevas generaciones crezcan conociendo y celebrando sus raíces.',
      'about.quote': 'Nuestra meta es expandir nuestra cultura, lograr que la gente quiera aprender más sobre Colombia y sobre lo que realmente somos.',
      'about.quoteRole': 'Presidente, Colombian Cultural Association',

      'programs.eyebrow': 'Lo que hacemos',
      'programs.title': 'Programas e iniciativas',
      'programs.lead': 'Trabajamos durante todo el año para llevar Colombia a los escenarios, las aulas y las mesas de Kansas City.',
      'programs.p1Title': 'Festival de la Independencia',
      'programs.p1Text': 'Nuestro evento insignia. Cada julio celebramos la independencia de Colombia con música en vivo, baile, gastronomía típica y artesanías, abierto a toda la ciudad.',
      'programs.p1Link': 'Ver el festival',
      'programs.p2Title': 'Programas educativos',
      'programs.p2Text': 'Presentaciones sobre historia, geografía y tradiciones colombianas en instituciones locales, incluida Rockhurst University, para estudiantes y público general.',
      'programs.p3Title': 'Festival multicultural',
      'programs.p3Text': 'Participamos en celebraciones multiculturales de Kansas City, llevando la representación colombiana a espacios compartidos con otras comunidades.',
      'programs.p4Title': 'Música y danza',
      'programs.p4Text': 'Colaboraciones con agrupaciones locales —como la KC Latin Jazz Orchestra— para presentar vallenato, cumbia y fusiones colombianas en vivo.',
      'programs.p5Title': 'Apoyo comunitario',
      'programs.p5Text': 'Acompañamos a familias recién llegadas con orientación, red de contactos y un espacio donde encontrar gente que habla su mismo idioma.',
      'programs.p6Title': 'Encuentros durante el año',
      'programs.p6Text': 'Novenas navideñas, celebraciones de fechas patrias y reuniones sociales que mantienen a la comunidad conectada más allá del festival.',

      'festival.eyebrow': 'Evento insignia',
      'festival.title': 'Festival de la Independencia de Colombia',
      'festival.lead': 'Cada mes de julio, Kansas City se llena de amarillo, azul y rojo. El festival reúne a miles de personas alrededor de la música en vivo, los bailes tradicionales, la comida colombiana y el trabajo de artesanos y emprendedores locales.',
      'festival.f1': 'Música y baile en vivo: vallenato, cumbia y fusiones',
      'festival.f2': 'Gastronomía típica preparada por cocineros de la comunidad',
      'festival.f3': 'Artesanías, emprendedores locales y actividades para niños',
      'festival.f4': 'Entrada abierta a toda la familia y a toda la ciudad',
      'festival.ctaPrimary': 'Quiero ser parte',
      'festival.ctaSecondary': 'Patrocinar el festival',
      'festival.ticketKicker': 'Última edición',
      'festival.ticketMonth': 'Julio',
      'festival.ticketPlaceLabel': 'Lugar',
      'festival.ticketAdmLabel': 'Entrada',
      'festival.ticketAdmValue': 'Abierta al público',
      'festival.ticketNote': 'El festival regresó en 2026 después de una pausa, gracias al respaldo de la comunidad colombiana de Kansas City.',

      'events.eyebrow': 'Calendario',
      'events.title': 'Eventos',
      'events.lead': 'Estas son nuestras fechas más recientes y lo que viene. Síguenos en redes para confirmaciones y detalles de última hora.',
      'events.tbd': 'Por confirmar',
      'events.e1Mon': 'Jul',
      'events.e1Tag': 'Festival',
      'events.e1Title': 'Festival de la Independencia de Colombia 2026',
      'events.e1Text': 'La celebración regresó a North Kansas City con música en vivo, comida típica, baile y artesanías para toda la familia.',
      'events.e2Day': '—',
      'events.e2Mon': 'Dic',
      'events.e2Tag': 'Comunidad',
      'events.e2Title': 'Novena navideña de la comunidad',
      'events.e2Text': 'Nuestro encuentro de fin de año con villancicos, natilla y buñuelos. Fecha y lugar por confirmar.',
      'events.e3Day': '—',
      'events.e3Mon': 'Jul',
      'events.e3Tag': 'Festival',
      'events.e3Title': 'Festival de la Independencia 2027',
      'events.e3Text': 'Ya estamos preparando la próxima edición. Si quieres participar como voluntario, patrocinador o vendedor, escríbenos con tiempo.',

      'involved.eyebrow': 'Participa',
      'involved.title': 'Hay un lugar para ti',
      'involved.lead': 'La asociación se mueve gracias a personas y negocios que aportan tiempo, talento y recursos. Estas son las formas de sumarte.',
      'involved.i1Title': 'Voluntariado',
      'involved.i1Text': 'Ayuda en la logística del festival, la producción de eventos, redes sociales o traducción. Cualquier cantidad de tiempo cuenta.',
      'involved.i1Link': 'Quiero ser voluntario',
      'involved.i2Title': 'Membresía',
      'involved.i2Text': 'Hazte miembro y recibe invitaciones a nuestras actividades, además de sostener los programas culturales del año.',
      'involved.i2Link': 'Información de membresía',
      'involved.i3Title': 'Patrocinio',
      'involved.i3Text': 'Conecta tu marca con una audiencia local comprometida. Tenemos paquetes para negocios de todos los tamaños.',
      'involved.i3Link': 'Solicitar paquetes',

      'support.eyebrow': 'Apóyanos',
      'support.title': 'Tu aporte mantiene la cultura en el escenario',
      'support.text': 'Somos una organización sin ánimo de lucro 501(c)(3). Cada donación ayuda a financiar artistas, permisos, sonido y espacios para que los eventos sigan siendo gratuitos y abiertos para la comunidad. Tus donaciones pueden ser deducibles de impuestos.',
      'support.einLabel': 'EIN',
      'support.ctaPrimary': 'Donar ahora',
      'support.ctaSecondary': 'Donación corporativa',

      'contact.eyebrow': 'Contacto',
      'contact.title': 'Hablemos',
      'contact.lead': '¿Quieres ser voluntario, patrocinar un evento, presentarte como artista o simplemente conocer la comunidad? Escríbenos y te respondemos.',
      'contact.emailLabel': 'Correo',
      'contact.placeLabel': 'Ubicación',
      'contact.placeValue': 'Área metropolitana de Kansas City',
      'contact.socialLabel': 'Redes sociales',

      'form.name': 'Nombre',
      'form.namePh': 'María Rodríguez',
      'form.email': 'Correo electrónico',
      'form.emailPh': 'tu@correo.com',
      'form.topic': 'Motivo',
      'form.topic1': 'Voluntariado',
      'form.topic2': 'Patrocinio',
      'form.topic3': 'Membresía',
      'form.topic4': 'Presentarme como artista o vendedor',
      'form.topic5': 'Prensa',
      'form.topic6': 'Otro',
      'form.message': 'Mensaje',
      'form.messagePh': 'Cuéntanos en qué te gustaría participar…',
      'form.submit': 'Enviar mensaje',
      'form.note': 'Se abrirá tu aplicación de correo con el mensaje listo para enviar.',
      'form.incomplete': 'Por favor completa los campos requeridos.',
      'form.opened': '¡Gracias! Abrimos tu aplicación de correo para enviar el mensaje.',

      'footer.tagline': 'Promoviendo y preservando la cultura colombiana en Kansas City desde 2018.',
      'footer.legal': 'Organización sin ánimo de lucro 501(c)(3)',
      'footer.col1': 'Organización',
      'footer.col2': 'Participa',
      'footer.col3': 'Síguenos',
      'footer.volunteer': 'Voluntariado',
      'footer.sponsor': 'Patrocinio',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.made': 'Hecho con orgullo colombiano en Kansas City 🇨🇴'
    },

    en: {
      'a11y.skip': 'Skip to main content',
      'a11y.theme': 'Toggle theme',
      'a11y.menu': 'Open menu',

      'nav.about': 'About',
      'nav.programs': 'Programs',
      'nav.festival': 'Festival',
      'nav.events': 'Events',
      'nav.involved': 'Get involved',
      'nav.contact': 'Contact',
      'nav.donate': 'Donate',

      'hero.eyebrow': 'Kansas City · Founded 2018 · 501(c)(3)',
      'hero.title': 'Celebrating Colombian culture in the heart of <em>Kansas City</em>',
      'hero.lead': 'We are a nonprofit organization dedicated to promoting and preserving the values, traditions and cultural richness of Colombia among Colombians and friends of Colombia across the Kansas City metropolitan area.',
      'hero.ctaPrimary': 'Explore the Festival',
      'hero.ctaSecondary': 'How to get involved',
      'hero.stat1Label': 'Founded',
      'hero.stat2Label': 'Status',
      'hero.stat2Value': '501(c)(3)',
      'hero.stat3Label': 'Festival',
      'hero.stat3Value': 'Annual',
      'hero.stat4Label': 'Community',
      'hero.stat4Value': 'KC Metro',

      'about.eyebrow': 'Our mission',
      'about.title': 'A community keeping Colombia alive',
      'about.lead': 'The Colombian Cultural Association grew out of a handful of Colombian families in Kansas City who wanted to share their heritage with the city they now call home. What started as small gatherings is today an organization producing cultural events, educational programs and places for the whole community to come together.',
      'about.v1Title': 'Culture',
      'about.v1Text': 'Colombian music, dance, food and art presented with pride and authenticity.',
      'about.v2Title': 'Community',
      'about.v2Text': 'A gathering place for Colombians, mixed families and friends of Colombia in KC.',
      'about.v3Title': 'Education',
      'about.v3Text': 'Talks and presentations at schools and universities that bring Colombia closer to more people.',
      'about.v4Title': 'Legacy',
      'about.v4Text': 'So the next generations grow up knowing and celebrating their roots.',
      'about.quote': 'Our goal is to expand our culture — to get people to want to learn more about Colombia and what it’s really about.',
      'about.quoteRole': 'President, Colombian Cultural Association',

      'programs.eyebrow': 'What we do',
      'programs.title': 'Programs and initiatives',
      'programs.lead': 'We work year-round to bring Colombia to the stages, classrooms and tables of Kansas City.',
      'programs.p1Title': 'Independence Day Festival',
      'programs.p1Text': 'Our flagship event. Every July we celebrate Colombia’s independence with live music, dancing, traditional food and crafts — open to the whole city.',
      'programs.p1Link': 'See the festival',
      'programs.p2Title': 'Educational programs',
      'programs.p2Text': 'Presentations on Colombian history, geography and traditions at local institutions, including Rockhurst University, for students and the general public.',
      'programs.p3Title': 'Multicultural festival',
      'programs.p3Text': 'We take part in Kansas City multicultural celebrations, bringing Colombian representation into spaces shared with other communities.',
      'programs.p4Title': 'Music and dance',
      'programs.p4Text': 'Collaborations with local groups — such as the KC Latin Jazz Orchestra — to present live vallenato, cumbia and Colombian fusions.',
      'programs.p5Title': 'Community support',
      'programs.p5Text': 'We help newly arrived families with guidance, connections and a place to find people who speak their language.',
      'programs.p6Title': 'Year-round gatherings',
      'programs.p6Text': 'Christmas novenas, national holiday celebrations and social gatherings that keep the community connected beyond the festival.',

      'festival.eyebrow': 'Flagship event',
      'festival.title': 'Colombian Independence Day Festival',
      'festival.lead': 'Every July, Kansas City fills with yellow, blue and red. The festival brings thousands of people together around live music, traditional dance, Colombian food and the work of local artisans and entrepreneurs.',
      'festival.f1': 'Live music and dance: vallenato, cumbia and fusions',
      'festival.f2': 'Traditional food cooked by members of the community',
      'festival.f3': 'Crafts, local entrepreneurs and activities for kids',
      'festival.f4': 'Open to the whole family and the whole city',
      'festival.ctaPrimary': 'I want to take part',
      'festival.ctaSecondary': 'Sponsor the festival',
      'festival.ticketKicker': 'Latest edition',
      'festival.ticketMonth': 'July',
      'festival.ticketPlaceLabel': 'Location',
      'festival.ticketAdmLabel': 'Admission',
      'festival.ticketAdmValue': 'Open to the public',
      'festival.ticketNote': 'The festival returned in 2026 after a pause, thanks to the support of Kansas City’s Colombian community.',

      'events.eyebrow': 'Calendar',
      'events.title': 'Events',
      'events.lead': 'Here are our most recent dates and what’s coming next. Follow us on social media for confirmations and last-minute details.',
      'events.tbd': 'To be confirmed',
      'events.e1Mon': 'Jul',
      'events.e1Tag': 'Festival',
      'events.e1Title': 'Colombian Independence Day Festival 2026',
      'events.e1Text': 'The celebration returned to North Kansas City with live music, traditional food, dancing and crafts for the whole family.',
      'events.e2Day': '—',
      'events.e2Mon': 'Dec',
      'events.e2Tag': 'Community',
      'events.e2Title': 'Community Christmas novena',
      'events.e2Text': 'Our end-of-year gathering with carols, natilla and buñuelos. Date and location to be confirmed.',
      'events.e3Day': '—',
      'events.e3Mon': 'Jul',
      'events.e3Tag': 'Festival',
      'events.e3Title': 'Independence Day Festival 2027',
      'events.e3Text': 'We are already planning the next edition. If you would like to join as a volunteer, sponsor or vendor, reach out early.',

      'involved.eyebrow': 'Get involved',
      'involved.title': 'There is a place for you',
      'involved.lead': 'The association runs on people and businesses who give time, talent and resources. Here is how to join in.',
      'involved.i1Title': 'Volunteer',
      'involved.i1Text': 'Help with festival logistics, event production, social media or translation. Any amount of time counts.',
      'involved.i1Link': 'I want to volunteer',
      'involved.i2Title': 'Membership',
      'involved.i2Text': 'Become a member to get invitations to our activities and help sustain the year’s cultural programs.',
      'involved.i2Link': 'Membership information',
      'involved.i3Title': 'Sponsorship',
      'involved.i3Text': 'Connect your brand with an engaged local audience. We have packages for businesses of every size.',
      'involved.i3Link': 'Request packages',

      'support.eyebrow': 'Support us',
      'support.title': 'Your gift keeps the culture on stage',
      'support.text': 'We are a 501(c)(3) nonprofit organization. Every donation helps fund artists, permits, sound and venues so our events can stay free and open to the community. Your donations may be tax-deductible.',
      'support.einLabel': 'EIN',
      'support.ctaPrimary': 'Donate now',
      'support.ctaSecondary': 'Corporate giving',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Let’s talk',
      'contact.lead': 'Want to volunteer, sponsor an event, perform as an artist, or simply get to know the community? Send us a message and we will get back to you.',
      'contact.emailLabel': 'Email',
      'contact.placeLabel': 'Location',
      'contact.placeValue': 'Kansas City metropolitan area',
      'contact.socialLabel': 'Social media',

      'form.name': 'Name',
      'form.namePh': 'Maria Rodriguez',
      'form.email': 'Email address',
      'form.emailPh': 'you@email.com',
      'form.topic': 'Reason',
      'form.topic1': 'Volunteering',
      'form.topic2': 'Sponsorship',
      'form.topic3': 'Membership',
      'form.topic4': 'Perform as an artist or vendor',
      'form.topic5': 'Press',
      'form.topic6': 'Other',
      'form.message': 'Message',
      'form.messagePh': 'Tell us how you would like to take part…',
      'form.submit': 'Send message',
      'form.note': 'Your email app will open with the message ready to send.',
      'form.incomplete': 'Please fill in the required fields.',
      'form.opened': 'Thank you! We opened your email app to send the message.',

      'footer.tagline': 'Promoting and preserving Colombian culture in Kansas City since 2018.',
      'footer.legal': '501(c)(3) nonprofit organization',
      'footer.col1': 'Organization',
      'footer.col2': 'Get involved',
      'footer.col3': 'Follow us',
      'footer.volunteer': 'Volunteer',
      'footer.sponsor': 'Sponsorship',
      'footer.rights': 'All rights reserved.',
      'footer.made': 'Made with Colombian pride in Kansas City 🇨🇴'
    }
  };

  var root = document.documentElement;
  var STORE_LANG = 'cca-lang';
  var STORE_THEME = 'cca-theme';

  /* Safe localStorage — private browsing can throw on access. */
  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { /* storage unavailable; fall back to defaults */ }
    return null;
  }

  /* ------------------------------------------------------------------------
     Language
     ------------------------------------------------------------------------ */
  var langButtons = document.querySelectorAll('.lang-switch button');

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.textContent = value;
    });

    // Keys whose value contains markup (e.g. the highlighted hero word).
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n-html')];
      if (value !== undefined) el.innerHTML = value;
    });

    // Attribute translations: data-i18n-attr="placeholder:form.namePh,aria-label:a11y.menu"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var parts = pair.split(':');
        var attr = (parts[0] || '').trim();
        var value = dict[(parts[1] || '').trim()];
        if (attr && value !== undefined) el.setAttribute(attr, value);
      });
    });

    root.setAttribute('lang', lang);

    langButtons.forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    store(STORE_LANG, lang);
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  // Stored choice wins; otherwise use the browser language, defaulting to Spanish.
  var savedLang = store(STORE_LANG);
  if (savedLang !== 'es' && savedLang !== 'en') {
    savedLang = (navigator.language || 'es').toLowerCase().indexOf('en') === 0 ? 'en' : 'es';
  }
  if (savedLang !== 'es') applyLang(savedLang);

  /* ------------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------------ */
  var themeToggle = document.getElementById('themeToggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    store(STORE_THEME, theme);
  }

  var savedTheme = store(STORE_THEME);
  applyTheme(savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : (media.matches ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  // Follow the OS while the visitor has not made an explicit choice.
  media.addEventListener('change', function (e) {
    if (!store(STORE_THEME)) applyTheme(e.matches ? 'dark' : 'light');
  });

  /* ------------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------------ */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');

  function closeNav() {
    if (!nav) return;
    nav.classList.remove('is-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) closeNav();
    });
  }

  /* ------------------------------------------------------------------------
     Sticky header shadow
     ------------------------------------------------------------------------ */
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     Reveal on scroll + active nav link
     ------------------------------------------------------------------------ */
  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { revealObserver.observe(el); });

    // Highlight the nav link for the section currently in view.
    var navLinks = document.querySelectorAll('.nav a[href^="#"]');
    var sections = [];
    navLinks.forEach(function (link) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target) sections.push({ link: link, el: target });
    });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (l) { l.classList.remove('is-current'); });
        var match = sections.find(function (s) { return s.el === entry.target; });
        if (match) match.link.classList.add('is-current');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { sectionObserver.observe(s.el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ------------------------------------------------------------------------
     Contact form
     Uses a mailto: handoff so the site works with no backend.
     Swap this block for a Formspree / Netlify Forms endpoint to collect
     submissions in a dashboard instead.
     ------------------------------------------------------------------------ */
  var CONTACT_EMAIL = 'info@colombianculturalassociation.org';
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var lang = root.getAttribute('lang') === 'en' ? 'en' : 'es';
      var dict = I18N[lang];

      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) {
          status.textContent = dict['form.incomplete'];
          status.className = 'form-status is-error';
        }
        return;
      }

      var data = new FormData(form);
      var subject = '[' + data.get('topic') + '] ' + data.get('name');
      var body = data.get('message')
        + '\n\n—\n' + data.get('name')
        + '\n' + data.get('email');

      window.location.href = 'mailto:' + CONTACT_EMAIL
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      if (status) {
        status.textContent = dict['form.opened'];
        status.className = 'form-status is-ok';
      }
      form.reset();
    });
  }

  /* ------------------------------------------------------------------------
     Footer year
     ------------------------------------------------------------------------ */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ========================================================================
     Ambient interaction — "luz y vidrio"
     Three effects, all optional: the lights drift with pointer and scroll,
     glass panels catch a reflection under the cursor, and cards tilt a
     little. Everything below is skipped for reduced-motion visitors and for
     coarse pointers (phones), where it would cost battery and do nothing.
     ======================================================================== */
  var motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  /* --- Lights: pointer parallax + scroll drift ---------------------------- */
  var luces = document.querySelectorAll('.luz');

  if (luces.length && motionOK) {
    var pointerX = 0, pointerY = 0;   // -0.5 .. 0.5, eased toward the target
    var targetX = 0, targetY = 0;
    var scrollY = 0;
    var frame = null;

    var render = function () {
      frame = null;
      // Ease toward the pointer so the lights feel heavy, not twitchy.
      pointerX += (targetX - pointerX) * 0.06;
      pointerY += (targetY - pointerY) * 0.06;

      luces.forEach(function (luz) {
        var depth = parseFloat(luz.getAttribute('data-depth')) || 20;
        luz.style.setProperty('--px', (pointerX * depth).toFixed(2));
        luz.style.setProperty('--py', (pointerY * depth).toFixed(2));
        // Lights drift slowly as the page scrolls. The factor is tiny and the
        // result clamped: the backdrop is fixed, so anything larger walks the
        // lights straight out of the viewport and the page goes flat.
        var drift = scrollY * depth * -0.0006;
        luz.style.setProperty('--sy', Math.max(-90, Math.min(90, drift)).toFixed(2));
      });

      // Keep animating only while the easing is still visibly moving.
      if (Math.abs(targetX - pointerX) > 0.001 || Math.abs(targetY - pointerY) > 0.001) request();
    };

    var request = function () { if (frame === null) frame = requestAnimationFrame(render); };

    if (finePointer) {
      window.addEventListener('pointermove', function (e) {
        targetX = e.clientX / window.innerWidth - 0.5;
        targetY = e.clientY / window.innerHeight - 0.5;
        request();
      }, { passive: true });
    }

    window.addEventListener('scroll', function () {
      scrollY = window.scrollY;
      request();
    }, { passive: true });

    request();
  }

  /* --- Glass: reflection follows the cursor, card tilts slightly ---------- */
  if (finePointer && motionOK) {
    var TILT = 3.2; // degrees at the far corner — any more reads as a gimmick
    var panels = document.querySelectorAll('.card, .ticket, .support-inner');

    panels.forEach(function (panel) {
      var ticking = false;
      var rect = null;

      var onMove = function (e) {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          if (!rect) return;
          var x = (e.clientX - rect.left) / rect.width;
          var y = (e.clientY - rect.top) / rect.height;
          panel.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
          panel.style.setProperty('--my', (y * 100).toFixed(1) + '%');
          panel.style.transform =
            'perspective(900px) rotateX(' + ((0.5 - y) * TILT).toFixed(2) + 'deg) ' +
            'rotateY(' + ((x - 0.5) * TILT).toFixed(2) + 'deg) translateY(-4px)';
        });
      };

      panel.addEventListener('pointerenter', function () {
        // Measure once per hover: reading layout on every move would thrash.
        rect = panel.getBoundingClientRect();
      });

      panel.addEventListener('pointermove', onMove, { passive: true });

      panel.addEventListener('pointerleave', function () {
        rect = null;
        panel.style.removeProperty('--mx');
        panel.style.removeProperty('--my');
        panel.style.transform = '';
      });
    });
  }

})();
