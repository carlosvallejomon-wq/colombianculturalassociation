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
      'a11y.menu': 'Abrir menú',
      'a11y.skip': 'Saltar al contenido principal',
      'a11y.theme': 'Cambiar tema',
      'as.aviso': 'La Asociación Cultural Colombiana no es una agencia del gobierno. Ofrecemos orientación gratuita y te acompañamos en el proceso; la decisión final sobre cada solicitud la toma la agencia correspondiente del estado de Texas.',
      'as.eyebrow': 'Programas de ayuda social',
      'as.i1': 'Comida',
      'as.i10': 'Otras necesidades básicas',
      'as.i2': 'Ropa',
      'as.i3': 'Vivienda',
      'as.i4': 'Servicios públicos',
      'as.i5': 'Muebles',
      'as.i6': 'Transporte',
      'as.i7': 'Artículos para el hogar',
      'as.i8': 'Artículos para bebés',
      'as.i9': 'Útiles escolares',
      'as.lead': 'Te orientamos, sin costo, para que sepas a qué programas puede acceder tu familia y cómo solicitarlos paso a paso.',
      'as.p1c': 'Solicitar orientación',
      'as.p1p': 'TANF (Temporary Assistance for Needy Families) es una ayuda económica temporal para familias con hijos menores a cargo. Te explicamos si tu familia califica y te acompañamos en la solicitud.',
      'as.p1t': 'Programa TANF',
      'as.p2p': 'Es un pago único de emergencia que puede usarse para cubrir necesidades básicas del hogar. Entre otras cosas, puede destinarse a:',
      'as.p2t': 'Pago único TANF',
      'as.p3c': 'Pedir ayuda con mi factura',
      'as.p3n': 'Generalmente necesitarás: identificación, comprobante de domicilio, la factura pendiente y un comprobante de ingresos del hogar.',
      'as.p3p': 'Si estás atrasado con la luz, el gas o el agua, existen programas de ayuda del gobierno y de las propias empresas de servicios. Te ayudamos a identificar cuál te corresponde y a reunir los documentos.',
      'as.p3t': 'Pago de Servicios Públicos',
      'as.p4c': 'Consultar por mis hijos',
      'as.p4p': 'Los niños de familias con ingresos limitados pueden tener cobertura médica sin costo o de bajo costo a través de CHIP o de Medicaid: consultas, vacunas, dentista, urgencias y medicinas.',
      'as.p4t': 'CHIP y Medicaid para Niños',
      'as.title': 'Ayudas',
      'co.aviso': 'La Asociación Cultural Colombiana es independiente del Consulado. Publicamos esta información para facilitarte el contacto; los trámites se realizan directamente ante el Consulado.',
      'co.datos': 'Datos del consulado',
      'co.dir': 'Dirección',
      'co.dirv': '2911 Turtle Creek Blvd, Suite 300<br>Dallas, Texas 75219',
      'co.eyebrow': 'Trámites y documentos',
      'co.foto': 'Consulado de Colombia en Dallas, Texas',
      'co.fotoAlt': 'Edificio del Consulado de Colombia en Dallas',
      'co.hor': 'Horario de atención',
      'co.horv': 'Por confirmar — consulta el sitio oficial',
      'co.lead': 'El Consulado de Colombia en Dallas atiende pasaportes, registro civil, cédulas, poderes y autenticaciones. Aquí tienes sus datos de contacto.',
      'co.tel': 'Teléfono',
      'co.telv': 'Por confirmar',
      'co.title': 'Visita nuestro consulado',
      'co.web': 'Sitio web oficial',
      'co.wha': 'WhatsApp',
      'co.whav': 'Por confirmar',
      'ct.eyebrow': 'Contacto',
      'ct.lead': '¿Necesitas orientación con una ayuda, quieres ser voluntario o proponer una actividad cultural? Escríbenos y te respondemos.',
      'ct.title': 'Hablemos',
      'cta.eyebrow': 'Te esperamos',
      'cta.primary': 'Escríbenos',
      'cta.secondary': 'Ver programas de ayuda',
      'cta.text': 'Si acabas de llegar a Texas, si necesitas orientación con un trámite o si simplemente quieres reencontrarte con lo colombiano, aquí tienes una puerta abierta.',
      'cta.title': 'Únete a nuestra comunidad',
      'cu.c1p': 'Vallenato, cumbia y porro en vivo, con agrupaciones locales y artistas invitados.',
      'cu.c1t': 'Música',
      'cu.c2p': 'Grupos de baile folclórico que representan las regiones de Colombia en festivales de la ciudad.',
      'cu.c2t': 'Danza',
      'cu.c3p': 'Arepas, empanadas, sancocho y bandeja paisa en nuestras jornadas comunitarias.',
      'cu.c3t': 'Gastronomía',
      'cu.c4p': 'Mochilas wayuu, sombreros vueltiaos y el trabajo de artesanos colombianos.',
      'cu.c4t': 'Artesanía',
      'cu.c5p': 'Espacios para que niños y jóvenes aprendan sobre la historia y las regiones del país.',
      'cu.c5t': 'Talleres',
      'cu.c6p': 'Participamos en ferias multiculturales llevando la representación de Colombia.',
      'cu.c6t': 'Muestras',
      'cu.eyebrow': 'Arte y tradición',
      'cu.lead': 'La cultura es lo que nos mantiene unidos lejos de casa. Llevamos la música, la danza y la cocina colombiana a los escenarios de Dallas.',
      'cu.title': 'Cultura',
      'ev.anual': 'Anual',
      'ev.anual2': 'Anual',
      'ev.e1m': 'Jul',
      'ev.e1p': 'Nuestra celebración más grande del año: música en vivo, bailes tradicionales, comida colombiana y actividades para los niños.',
      'ev.e1t': 'Día de la Independencia de Colombia',
      'ev.e1tag': 'Fiesta patria',
      'ev.e2m': 'May',
      'ev.e2p': 'Nos sumamos a la conmemoración estadounidense con un encuentro familiar de la comunidad colombiana en Dallas.',
      'ev.e2t': 'Memorial Day',
      'ev.e2tag': 'Comunidad',
      'ev.eyebrow': 'Para no perderte',
      'ev.lead': 'Estas son las fechas que celebramos con la comunidad. Escríbenos para confirmar lugar y hora de la próxima edición.',
      'ev.tbd': 'Lugar por confirmar · Dallas, TX',
      'ev.tbd2': 'Fecha y lugar por confirmar',
      'ev.title': 'Eventos destacados',
      'footer.col1': 'La asociación',
      'footer.col2': 'Ayuda',
      'footer.col3': 'Enlaces de interés',
      'footer.legal': 'Organización sin ánimo de lucro al servicio de la comunidad colombiana en Texas.',
      'footer.made': 'Hecho con orgullo colombiano en Dallas 🇨🇴',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.tagline': 'Empoderando y conectando comunidades a través del arte y la cultura, en Dallas, Texas.',
      'form.email': 'Correo electrónico',
      'form.emailL': 'Correo',
      'form.emailPh': 'tu@correo.com',
      'form.incomplete': 'Por favor completa los campos requeridos.',
      'form.message': 'Mensaje',
      'form.messagePh': 'Cuéntanos en qué podemos ayudarte…',
      'form.name': 'Nombre',
      'form.namePh': 'María Rodríguez',
      'form.note': 'Se abrirá tu aplicación de correo con el mensaje listo para enviar.',
      'form.opened': '¡Gracias! Abrimos tu aplicación de correo para enviar el mensaje.',
      'form.placeL': 'Dónde estamos',
      'form.placeV': 'Dallas, Texas · Área metropolitana de Dallas–Fort Worth',
      'form.submit': 'Enviar mensaje',
      'form.t1': 'Asistencia social (TANF, servicios, CHIP)',
      'form.t2': 'Trámites y consulado',
      'form.t3': 'Voluntariado',
      'form.t4': 'Actividades culturales',
      'form.t5': 'Otro',
      'form.topic': 'Motivo',
      'galeria.alt1': 'Santuario de Las Lajas, Nariño',
      'galeria.alt2': 'Bogotá al atardecer',
      'galeria.alt3': 'Torre del Reloj, Cartagena',
      'galeria.alt4': 'Cristo Rey, Cali',
      'galeria.alt5': 'Cerro de Monserrate, Bogotá',
      'galeria.cap1': 'Santuario de Las Lajas, Nariño',
      'galeria.cap2': 'Bogotá al atardecer',
      'galeria.cap3': 'Torre del Reloj, Cartagena',
      'galeria.cap4': 'Cristo Rey, Cali',
      'galeria.cap5': 'Cerro de Monserrate, Bogotá',
      'galeria.eyebrow': 'Nuestra tierra',
      'galeria.title': 'Colombia, siempre presente',
      'home.cta1': 'Programas de ayuda',
      'home.cta2': 'Conócenos',
      'home.eyebrow': 'Dallas, Texas · Más de 10 años',
      'home.lead': 'Empoderando y conectando comunidades a través del arte y la cultura. Acompañamos a las familias colombianas en Dallas con programas de asistencia social, actividades culturales y orientación para sus trámites.',
      'home.s1': 'Experiencia',
      'home.s1v': '+10 años',
      'home.s2': 'Sede',
      'home.s3': 'Servicios',
      'home.s3v': 'Gratuitos',
      'home.s4': 'Atención',
      'home.s4v': 'En español',
      'home.title': 'Asociación Cultural Colombiana',
      'mision.c1l': 'Ver programas',
      'mision.c1p': 'Orientamos a las familias en programas como TANF, el pago de servicios públicos y el seguro médico para los niños.',
      'mision.c1t': 'Asistencia social',
      'mision.c2l': 'Ver cultura',
      'mision.c2p': 'Música, danza, gastronomía y tradiciones colombianas presentadas con orgullo para toda la comunidad de Dallas.',
      'mision.c2t': 'Cultura y arte',
      'mision.c3l': 'Ver eventos',
      'mision.c3p': 'Un punto de encuentro para reunirnos, celebrar nuestras fechas y ayudarnos entre paisanos.',
      'mision.c3t': 'Comunidad',
      'mision.eyebrow': 'Asociación Cultural Colombiana',
      'mision.lead': 'Somos una organización creada por colombianos para colombianos en el norte de Texas. Durante más de diez años hemos acompañado a familias que llegan buscando una vida mejor, ayudándoles a encontrar los recursos que necesitan y a mantener vivas sus raíces.',
      'mision.title': 'Empoderando y conectando comunidades a través del arte y la cultura',
      'nav.asistencia': 'Asistencia social',
      'nav.consulado': 'Consulado',
      'nav.contacto': 'Contacto',
      'nav.cultura': 'Cultura',
      'nav.eventos': 'Eventos',
      'nav.inicio': 'Inicio',
      'nav.quienes': 'Quiénes somos',
      'qs.eyebrow': 'Quiénes somos',
      'qs.lead': 'La Asociación Cultural Colombiana nació del deseo de un grupo de familias colombianas en Dallas de tender la mano a quienes venían llegando, y de que nuestros hijos crecieran sabiendo de dónde vienen.',
      'qs.quote': 'Llegar a un país nuevo no debería significar perder lo que uno es. Nuestro trabajo es que nadie tenga que escoger entre salir adelante y seguir siendo colombiano.',
      'qs.quoteBy': 'Asociación Cultural Colombiana',
      'qs.title': 'Más de diez años al lado de nuestra gente',
      'qs.v1p': 'Toda nuestra orientación es gratuita. Nadie debe pagar por saber a qué ayuda tiene derecho.',
      'qs.v1t': 'Servicio',
      'qs.v2p': 'Explicamos los trámites en español y sin letra menuda, para que cada familia entienda qué está firmando.',
      'qs.v2t': 'Claridad',
      'qs.v3p': 'Que las nuevas generaciones crezcan celebrando su cultura, su música y su comida.',
      'qs.v3t': 'Raíces',
      'qs.v4p': 'Tratamos la información de cada familia con reserva y respeto, siempre.',
      'qs.v4t': 'Confianza'
    },

    en: {
      'a11y.menu': 'Open menu',
      'a11y.skip': 'Skip to main content',
      'a11y.theme': 'Toggle theme',
      'as.aviso': 'The Colombian Cultural Association is not a government agency. We offer free guidance and support throughout the process; the final decision on each application is made by the relevant State of Texas agency.',
      'as.eyebrow': 'Social assistance programs',
      'as.i1': 'Food',
      'as.i10': 'Other basic needs',
      'as.i2': 'Clothing',
      'as.i3': 'Housing',
      'as.i4': 'Utilities',
      'as.i5': 'Furniture',
      'as.i6': 'Transportation',
      'as.i7': 'Household items',
      'as.i8': 'Baby supplies',
      'as.i9': 'School supplies',
      'as.lead': 'We guide you, free of charge, so you know which programs your family may qualify for and how to apply, step by step.',
      'as.p1c': 'Request guidance',
      'as.p1p': 'TANF (Temporary Assistance for Needy Families) is temporary financial help for families with dependent children. We explain whether your family qualifies and walk you through the application.',
      'as.p1t': 'TANF Program',
      'as.p2p': 'A one-time emergency payment that can be used to cover basic household needs. Among other things, it can go toward:',
      'as.p2t': 'One-time TANF payment',
      'as.p3c': 'Get help with my bill',
      'as.p3n': 'You will generally need: photo ID, proof of address, the outstanding bill and proof of household income.',
      'as.p3p': 'If you are behind on electricity, gas or water, there are assistance programs from the government and from the utility companies themselves. We help you identify which one applies to you and gather the documents.',
      'as.p3t': 'Utility bill assistance',
      'as.p4c': 'Ask about my children',
      'as.p4p': 'Children in families with limited income may qualify for free or low-cost health coverage through CHIP or Medicaid: check-ups, vaccinations, dental care, emergencies and prescriptions.',
      'as.p4t': 'CHIP and Children’s Medicaid',
      'as.title': 'Assistance',
      'co.aviso': 'The Colombian Cultural Association is independent of the Consulate. We publish this information to make contact easier; all paperwork is handled directly by the Consulate.',
      'co.datos': 'Consulate details',
      'co.dir': 'Address',
      'co.dirv': '2911 Turtle Creek Blvd, Suite 300<br>Dallas, Texas 75219',
      'co.eyebrow': 'Paperwork and documents',
      'co.foto': 'Consulate of Colombia in Dallas, Texas',
      'co.fotoAlt': 'Building of the Consulate of Colombia in Dallas',
      'co.hor': 'Opening hours',
      'co.horv': 'To be confirmed — check the official site',
      'co.lead': 'The Consulate of Colombia in Dallas handles passports, civil registry, ID cards, powers of attorney and notarisations. Here are its contact details.',
      'co.tel': 'Phone',
      'co.telv': 'To be confirmed',
      'co.title': 'Visit our consulate',
      'co.web': 'Official website',
      'co.wha': 'WhatsApp',
      'co.whav': 'To be confirmed',
      'ct.eyebrow': 'Contact',
      'ct.lead': 'Need guidance with an assistance program, want to volunteer, or have a cultural activity to propose? Write to us and we will reply.',
      'ct.title': 'Let’s talk',
      'cta.eyebrow': 'Join us',
      'cta.primary': 'Contact us',
      'cta.secondary': 'See assistance programs',
      'cta.text': 'If you have just arrived in Texas, if you need guidance with paperwork, or if you simply want to reconnect with Colombia, you have an open door here.',
      'cta.title': 'Join our community',
      'cu.c1p': 'Live vallenato, cumbia and porro, with local groups and guest artists.',
      'cu.c1t': 'Music',
      'cu.c2p': 'Folk dance groups representing Colombia’s regions at city festivals.',
      'cu.c2t': 'Dance',
      'cu.c3p': 'Arepas, empanadas, sancocho and bandeja paisa at our community gatherings.',
      'cu.c3t': 'Food',
      'cu.c4p': 'Wayuu bags, sombreros vueltiaos and the work of Colombian artisans.',
      'cu.c4t': 'Crafts',
      'cu.c5p': 'Spaces for children and young people to learn about the country’s history and regions.',
      'cu.c5t': 'Workshops',
      'cu.c6p': 'We take part in multicultural fairs, bringing Colombia’s presence to them.',
      'cu.c6t': 'Showcases',
      'cu.eyebrow': 'Art and tradition',
      'cu.lead': 'Culture is what keeps us together far from home. We bring Colombian music, dance and cooking to the stages of Dallas.',
      'cu.title': 'Culture',
      'ev.anual': 'Yearly',
      'ev.anual2': 'Yearly',
      'ev.e1m': 'Jul',
      'ev.e1p': 'Our biggest celebration of the year: live music, traditional dancing, Colombian food and activities for children.',
      'ev.e1t': 'Colombian Independence Day',
      'ev.e1tag': 'National holiday',
      'ev.e2m': 'May',
      'ev.e2p': 'We join the American commemoration with a family gathering of the Colombian community in Dallas.',
      'ev.e2t': 'Memorial Day',
      'ev.e2tag': 'Community',
      'ev.eyebrow': 'Save the date',
      'ev.lead': 'These are the dates we celebrate with the community. Contact us to confirm the venue and time of the next edition.',
      'ev.tbd': 'Venue to be confirmed · Dallas, TX',
      'ev.tbd2': 'Date and venue to be confirmed',
      'ev.title': 'Featured events',
      'footer.col1': 'The association',
      'footer.col2': 'Help',
      'footer.col3': 'Useful links',
      'footer.legal': 'Nonprofit organization serving the Colombian community in Texas.',
      'footer.made': 'Made with Colombian pride in Dallas 🇨🇴',
      'footer.rights': 'All rights reserved.',
      'footer.tagline': 'Empowering and connecting communities through art and culture, in Dallas, Texas.',
      'form.email': 'Email address',
      'form.emailL': 'Email',
      'form.emailPh': 'you@email.com',
      'form.incomplete': 'Please fill in the required fields.',
      'form.message': 'Message',
      'form.messagePh': 'Tell us how we can help…',
      'form.name': 'Name',
      'form.namePh': 'Maria Rodriguez',
      'form.note': 'Your email app will open with the message ready to send.',
      'form.opened': 'Thank you! We opened your email app to send the message.',
      'form.placeL': 'Where we are',
      'form.placeV': 'Dallas, Texas · Dallas–Fort Worth metroplex',
      'form.submit': 'Send message',
      'form.t1': 'Social assistance (TANF, utilities, CHIP)',
      'form.t2': 'Paperwork and consulate',
      'form.t3': 'Volunteering',
      'form.t4': 'Cultural activities',
      'form.t5': 'Other',
      'form.topic': 'Reason',
      'galeria.alt1': 'Las Lajas Sanctuary, Nariño',
      'galeria.alt2': 'Bogotá at sunset',
      'galeria.alt3': 'Clock Tower, Cartagena',
      'galeria.alt4': 'Cristo Rey, Cali',
      'galeria.alt5': 'Monserrate, Bogotá',
      'galeria.cap1': 'Las Lajas Sanctuary, Nariño',
      'galeria.cap2': 'Bogotá at sunset',
      'galeria.cap3': 'Clock Tower, Cartagena',
      'galeria.cap4': 'Cristo Rey, Cali',
      'galeria.cap5': 'Monserrate, Bogotá',
      'galeria.eyebrow': 'Our homeland',
      'galeria.title': 'Colombia, always with us',
      'home.cta1': 'Assistance programs',
      'home.cta2': 'About us',
      'home.eyebrow': 'Dallas, Texas · More than 10 years',
      'home.lead': 'Empowering and connecting communities through art and culture. We support Colombian families in Dallas with social assistance programs, cultural activities and guidance with paperwork.',
      'home.s1': 'Experience',
      'home.s1v': '10+ years',
      'home.s2': 'Based in',
      'home.s3': 'Services',
      'home.s3v': 'Free of charge',
      'home.s4': 'We serve you in',
      'home.s4v': 'Spanish',
      'home.title': 'Colombian Cultural Association',
      'mision.c1l': 'See programs',
      'mision.c1p': 'We guide families through programs such as TANF, utility bill assistance and health coverage for children.',
      'mision.c1t': 'Social assistance',
      'mision.c2l': 'See culture',
      'mision.c2p': 'Colombian music, dance, food and traditions presented with pride for the whole Dallas community.',
      'mision.c2t': 'Culture and art',
      'mision.c3l': 'See events',
      'mision.c3p': 'A meeting point to gather, celebrate our holidays and help one another.',
      'mision.c3t': 'Community',
      'mision.eyebrow': 'Colombian Cultural Association',
      'mision.lead': 'We are an organization created by Colombians for Colombians in North Texas. For more than ten years we have supported families arriving in search of a better life, helping them find the resources they need and keep their roots alive.',
      'mision.title': 'Empowering and connecting communities through art and culture',
      'nav.asistencia': 'Social assistance',
      'nav.consulado': 'Consulate',
      'nav.contacto': 'Contact',
      'nav.cultura': 'Culture',
      'nav.eventos': 'Events',
      'nav.inicio': 'Home',
      'nav.quienes': 'About us',
      'qs.eyebrow': 'About us',
      'qs.lead': 'The Colombian Cultural Association grew out of a group of Colombian families in Dallas who wanted to help newcomers, and to see their children grow up knowing where they come from.',
      'qs.quote': 'Arriving in a new country should not mean losing who you are. Our work is making sure nobody has to choose between getting ahead and staying Colombian.',
      'qs.quoteBy': 'Colombian Cultural Association',
      'qs.title': 'More than ten years beside our people',
      'qs.v1p': 'All of our guidance is free. Nobody should have to pay to find out what help they qualify for.',
      'qs.v1t': 'Service',
      'qs.v2p': 'We explain paperwork in Spanish and without fine print, so every family understands what they are signing.',
      'qs.v2t': 'Clarity',
      'qs.v3p': 'So the next generations grow up celebrating their culture, their music and their food.',
      'qs.v3t': 'Roots',
      'qs.v4p': 'We treat every family’s information with discretion and respect, always.',
      'qs.v4t': 'Trust'
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

  /* ------------------------------------------------------------------------
     Missing photographs
     The photo files live in assets/img/ and are added by the association.
     Until one is there, show the caption on its coloured panel rather than
     the browser's broken-image icon.
     ------------------------------------------------------------------------ */
  document.querySelectorAll('figure img').forEach(function (img) {
    var flag = function () { img.closest('figure').classList.add('sin-foto'); };
    img.addEventListener('error', flag);
    // Covers images that already failed before this script ran.
    if (img.complete && img.naturalWidth === 0) flag();
  });

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
