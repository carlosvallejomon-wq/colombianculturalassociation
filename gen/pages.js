const { t, ns } = require('./content');
const { page, pageHero, CUADROS, FOTOS } = require('./layout');

/* Reusable bits ---------------------------------------------------------- */

function galeria() {
  ns('galeria');
  const items = FOTOS.map((f, i) => `      <figure class="foto reveal">
        <img src="assets/img/${f.file}" alt="${f.es}" loading="lazy" decoding="async" width="800" height="1000"
             data-i18n-attr="alt:galeria.alt${i + 1}">
        <figcaption data-i18n="galeria.cap${i + 1}">${t('cap' + (i + 1), f.es, f.en)}</figcaption>
      </figure>`).join('\n');
  FOTOS.forEach((f, i) => t('alt' + (i + 1), f.es, f.en));

  return `<section class="section galeria-section">
  <div class="shell">
    <div class="section-head reveal">
      <p class="eyebrow" data-i18n="galeria.eyebrow">${t('eyebrow', 'Nuestra tierra', 'Our homeland')}</p>
      <h2 class="section-title" data-i18n="galeria.title">${t('title', 'Colombia, siempre presente', 'Colombia, always with us')}</h2>
    </div>
    <div class="galeria">
${items}
    </div>
  </div>
</section>`;
}

function ctaBand() {
  ns('cta');
  return `<section class="support" id="unete">
  <div class="shell support-inner reveal lit-azul">
    <div class="support-copy">
      <p class="eyebrow" data-i18n="cta.eyebrow">${t('eyebrow', 'Te esperamos', 'Join us')}</p>
      <h2 data-i18n="cta.title">${t('title', 'Únete a nuestra comunidad', 'Join our community')}</h2>
      <p data-i18n="cta.text">${t('text',
        'Si acabas de llegar a Texas, si necesitas orientación con un trámite o si simplemente quieres reencontrarte con lo colombiano, aquí tienes una puerta abierta.',
        'If you have just arrived in Texas, if you need guidance with paperwork, or if you simply want to reconnect with Colombia, you have an open door here.')}</p>
    </div>
    <div class="support-actions">
      <a class="btn btn-gold btn-lg" href="contacto.html" data-i18n="cta.primary">${t('primary', 'Escríbenos', 'Contact us')}</a>
      <a class="btn btn-ghost" href="asistencia.html" data-i18n="cta.secondary">${t('secondary', 'Ver programas de ayuda', 'See assistance programs')}</a>
    </div>
  </div>
</section>`;
}

/* 1. Inicio --------------------------------------------------------------- */

function home() {
  ns('home');
  const hero = `<section class="hero hero-home" id="inicio">
  ${CUADROS}
  <div class="shell hero-inner">
    <p class="eyebrow reveal" data-i18n="home.eyebrow">${t('eyebrow', 'Dallas, Texas · Más de 10 años', 'Dallas, Texas · More than 10 years')}</p>
    <h1 class="hero-title reveal" data-i18n="home.title">${t('title', 'Asociación Cultural Colombiana', 'Colombian Cultural Association')}</h1>
    <p class="hero-lead reveal" data-i18n="home.lead">${t('lead',
      'Empoderando y conectando comunidades a través del arte y la cultura. Acompañamos a las familias colombianas en Dallas con programas de asistencia social, actividades culturales y orientación para sus trámites.',
      'Empowering and connecting communities through art and culture. We support Colombian families in Dallas with social assistance programs, cultural activities and guidance with paperwork.')}</p>
    <div class="hero-cta reveal">
      <a class="btn btn-primary" href="asistencia.html">
        <span data-i18n="home.cta1">${t('cta1', 'Programas de ayuda', 'Assistance programs')}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="btn-arrow"><path d="M5 12h13M12 5.5 18.5 12 12 18.5"/></svg>
      </a>
      <a class="btn btn-ghost" href="quienes-somos.html" data-i18n="home.cta2">${t('cta2', 'Conócenos', 'About us')}</a>
    </div>
    <dl class="hero-stats reveal">
      <div class="stat"><dt data-i18n="home.s1">${t('s1', 'Experiencia', 'Experience')}</dt><dd data-i18n="home.s1v">${t('s1v', '+10 años', '10+ years')}</dd></div>
      <div class="stat"><dt data-i18n="home.s2">${t('s2', 'Sede', 'Based in')}</dt><dd>Dallas, TX</dd></div>
      <div class="stat"><dt data-i18n="home.s3">${t('s3', 'Servicios', 'Services')}</dt><dd data-i18n="home.s3v">${t('s3v', 'Gratuitos', 'Free of charge')}</dd></div>
      <div class="stat"><dt data-i18n="home.s4">${t('s4', 'Atención', 'We serve you in')}</dt><dd data-i18n="home.s4v">${t('s4v', 'En español', 'Spanish')}</dd></div>
    </dl>
  </div>
</section>`;

  ns('mision');
  const mision = `<section class="section">
  <div class="shell">
    <div class="section-head reveal">
      <p class="eyebrow" data-i18n="mision.eyebrow">${t('eyebrow', 'Asociación Cultural Colombiana', 'Colombian Cultural Association')}</p>
      <h2 class="section-title" data-i18n="mision.title">${t('title', 'Empoderando y conectando comunidades a través del arte y la cultura', 'Empowering and connecting communities through art and culture')}</h2>
      <p class="section-lead" data-i18n="mision.lead">${t('lead',
        'Somos una organización creada por colombianos para colombianos en el norte de Texas. Durante más de diez años hemos acompañado a familias que llegan buscando una vida mejor, ayudándoles a encontrar los recursos que necesitan y a mantener vivas sus raíces.',
        'We are an organization created by Colombians for Colombians in North Texas. For more than ten years we have supported families arriving in search of a better life, helping them find the resources they need and keep their roots alive.')}</p>
    </div>
    <div class="cards cards-3">
      <article class="card program reveal lit-azul">
        <span class="p-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.7-7.5-10A4.5 4.5 0 0 1 12 8.4a4.5 4.5 0 0 1 7.5 2.6c0 5.3-7.5 10-7.5 10Z"/></svg></span>
        <h3 data-i18n="mision.c1t">${t('c1t', 'Asistencia social', 'Social assistance')}</h3>
        <p data-i18n="mision.c1p">${t('c1p',
          'Orientamos a las familias en programas como TANF, el pago de servicios públicos y el seguro médico para los niños.',
          'We guide families through programs such as TANF, utility bill assistance and health coverage for children.')}</p>
        <a class="link-arrow" href="asistencia.html"><span data-i18n="mision.c1l">${t('c1l', 'Ver programas', 'See programs')}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5.5 18.5 12 12 18.5"/></svg></a>
      </article>
      <article class="card program reveal lit-amarillo">
        <span class="p-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 18V6.5l9-2v11"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="15.5" cy="15.5" r="2.5"/></svg></span>
        <h3 data-i18n="mision.c2t">${t('c2t', 'Cultura y arte', 'Culture and art')}</h3>
        <p data-i18n="mision.c2p">${t('c2p',
          'Música, danza, gastronomía y tradiciones colombianas presentadas con orgullo para toda la comunidad de Dallas.',
          'Colombian music, dance, food and traditions presented with pride for the whole Dallas community.')}</p>
        <a class="link-arrow" href="cultura.html"><span data-i18n="mision.c2l">${t('c2l', 'Ver cultura', 'See culture')}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5.5 18.5 12 12 18.5"/></svg></a>
      </article>
      <article class="card program reveal lit-rojo">
        <span class="p-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M16 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H7.4A3.4 3.4 0 0 0 4 18.4V20"/><circle cx="10" cy="8" r="3.4"/><path d="M20 20v-1.6a3.4 3.4 0 0 0-2.6-3.3M15.4 4.6a3.4 3.4 0 0 1 0 6.6"/></svg></span>
        <h3 data-i18n="mision.c3t">${t('c3t', 'Comunidad', 'Community')}</h3>
        <p data-i18n="mision.c3p">${t('c3p',
          'Un punto de encuentro para reunirnos, celebrar nuestras fechas y ayudarnos entre paisanos.',
          'A meeting point to gather, celebrate our holidays and help one another.')}</p>
        <a class="link-arrow" href="eventos.html"><span data-i18n="mision.c3l">${t('c3l', 'Ver eventos', 'See events')}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5.5 18.5 12 12 18.5"/></svg></a>
      </article>
    </div>
  </div>
</section>`;

  return page({
    id: 'inicio',
    title: 'Asociación Cultural Colombiana | Dallas, Texas',
    description: 'Empoderando y conectando comunidades a través del arte y la cultura. Asistencia social, cultura y orientación para la comunidad colombiana en Dallas, Texas.',
    hero,
    body: mision + '\n' + galeria() + '\n' + ctaBand(),
  });
}

/* 2. Quiénes somos -------------------------------------------------------- */

function quienes() {
  ns('qs');
  const hero = pageHero('qs.eyebrow', 'qs.title', 'qs.lead',
    t('eyebrow', 'Quiénes somos', 'About us'),
    t('title', 'Más de diez años al lado de nuestra gente', 'More than ten years beside our people'),
    t('lead', 'La Asociación Cultural Colombiana nació del deseo de un grupo de familias colombianas en Dallas de tender la mano a quienes venían llegando, y de que nuestros hijos crecieran sabiendo de dónde vienen.',
              'The Colombian Cultural Association grew out of a group of Colombian families in Dallas who wanted to help newcomers, and to see their children grow up knowing where they come from.'));

  const body = `<section class="section">
  <div class="shell">
    <div class="about-grid">
      <div class="card values-card reveal lit-amarillo">
        <ul class="values">
          <li><span class="v-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.7-7.5-10A4.5 4.5 0 0 1 12 8.4a4.5 4.5 0 0 1 7.5 2.6c0 5.3-7.5 10-7.5 10Z"/></svg></span>
            <div><h3 data-i18n="qs.v1t">${t('v1t', 'Servicio', 'Service')}</h3>
            <p data-i18n="qs.v1p">${t('v1p', 'Toda nuestra orientación es gratuita. Nadie debe pagar por saber a qué ayuda tiene derecho.', 'All of our guidance is free. Nobody should have to pay to find out what help they qualify for.')}</p></div></li>
          <li><span class="v-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3.5 7.5 12 4l8.5 3.5L12 11 3.5 7.5Z"/><path d="M7 9.6V15c0 1.7 2.2 3 5 3s5-1.3 5-3V9.6"/></svg></span>
            <div><h3 data-i18n="qs.v2t">${t('v2t', 'Claridad', 'Clarity')}</h3>
            <p data-i18n="qs.v2p">${t('v2p', 'Explicamos los trámites en español y sin letra menuda, para que cada familia entienda qué está firmando.', 'We explain paperwork in Spanish and without fine print, so every family understands what they are signing.')}</p></div></li>
          <li><span class="v-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z"/></svg></span>
            <div><h3 data-i18n="qs.v3t">${t('v3t', 'Raíces', 'Roots')}</h3>
            <p data-i18n="qs.v3p">${t('v3p', 'Que las nuevas generaciones crezcan celebrando su cultura, su música y su comida.', 'So the next generations grow up celebrating their culture, their music and their food.')}</p></div></li>
          <li><span class="v-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M16 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H7.4A3.4 3.4 0 0 0 4 18.4V20"/><circle cx="10" cy="8" r="3.4"/></svg></span>
            <div><h3 data-i18n="qs.v4t">${t('v4t', 'Confianza', 'Trust')}</h3>
            <p data-i18n="qs.v4p">${t('v4p', 'Tratamos la información de cada familia con reserva y respeto, siempre.', 'We treat every family’s information with discretion and respect, always.')}</p></div></li>
        </ul>
      </div>
      <aside class="card quote-card reveal lit-rojo">
        <span class="quote-mark" aria-hidden="true">&ldquo;</span>
        <blockquote data-i18n="qs.quote">${t('quote',
          'Llegar a un país nuevo no debería significar perder lo que uno es. Nuestro trabajo es que nadie tenga que escoger entre salir adelante y seguir siendo colombiano.',
          'Arriving in a new country should not mean losing who you are. Our work is making sure nobody has to choose between getting ahead and staying Colombian.')}</blockquote>
        <figcaption class="quote-by">
          <strong data-i18n="qs.quoteBy">${t('quoteBy', 'Asociación Cultural Colombiana', 'Colombian Cultural Association')}</strong>
          <span>Dallas, Texas</span>
        </figcaption>
      </aside>
    </div>
  </div>
</section>
${ctaBand()}`;

  return page({
    id: 'quienes',
    title: 'Quiénes somos | Asociación Cultural Colombiana',
    description: 'Más de diez años acompañando a las familias colombianas en Dallas, Texas, con asistencia social y programas culturales.',
    hero, body,
  });
}

/* 3. Asistencia social ---------------------------------------------------- */

function asistencia() {
  ns('as');
  const hero = pageHero('as.eyebrow', 'as.title', 'as.lead',
    t('eyebrow', 'Programas de ayuda social', 'Social assistance programs'),
    t('title', 'Ayudas', 'Assistance'),
    t('lead', 'Te orientamos, sin costo, para que sepas a qué programas puede acceder tu familia y cómo solicitarlos paso a paso.',
              'We guide you, free of charge, so you know which programs your family may qualify for and how to apply, step by step.'));

  const tanfItems = [
    ['Comida', 'Food'], ['Ropa', 'Clothing'], ['Vivienda', 'Housing'],
    ['Servicios públicos', 'Utilities'], ['Muebles', 'Furniture'], ['Transporte', 'Transportation'],
    ['Artículos para el hogar', 'Household items'], ['Artículos para bebés', 'Baby supplies'],
    ['Útiles escolares', 'School supplies'], ['Otras necesidades básicas', 'Other basic needs'],
  ].map(([es, en], i) => `        <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12.5 9 17l10.5-10.5"/></svg><span data-i18n="as.i${i + 1}">${t('i' + (i + 1), es, en)}</span></li>`).join('\n');

  const body = `<section class="section">
  <div class="shell">

    <article class="card ayuda reveal lit-amarillo" id="tanf">
      <span class="p-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10.5h18M7 15h4"/></svg></span>
      <h2 data-i18n="as.p1t">${t('p1t', 'Programa TANF', 'TANF Program')}</h2>
      <p data-i18n="as.p1p">${t('p1p',
        'TANF (Temporary Assistance for Needy Families) es una ayuda económica temporal para familias con hijos menores a cargo. Te explicamos si tu familia califica y te acompañamos en la solicitud.',
        'TANF (Temporary Assistance for Needy Families) is temporary financial help for families with dependent children. We explain whether your family qualifies and walk you through the application.')}</p>
      <a class="btn btn-primary" href="contacto.html" data-i18n="as.p1c">${t('p1c', 'Solicitar orientación', 'Request guidance')}</a>
    </article>

    <article class="card ayuda reveal lit-azul" id="pago-unico">
      <span class="p-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M9.5 10h5M9.5 14h5"/></svg></span>
      <h2 data-i18n="as.p2t">${t('p2t', 'Pago único TANF', 'One-time TANF payment')}</h2>
      <p data-i18n="as.p2p">${t('p2p',
        'Es un pago único de emergencia que puede usarse para cubrir necesidades básicas del hogar. Entre otras cosas, puede destinarse a:',
        'A one-time emergency payment that can be used to cover basic household needs. Among other things, it can go toward:')}</p>
      <ul class="feature-list feature-grid">
${tanfItems}
      </ul>
    </article>

    <article class="card ayuda reveal lit-rojo" id="servicios">
      <span class="p-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13 2.5 4.5 13.5H11l-.5 8L19 10.5h-6.5l.5-8Z"/></svg></span>
      <h2 data-i18n="as.p3t">${t('p3t', 'Pago de Servicios Públicos', 'Utility bill assistance')}</h2>
      <p data-i18n="as.p3p">${t('p3p',
        'Si estás atrasado con la luz, el gas o el agua, existen programas de ayuda del gobierno y de las propias empresas de servicios. Te ayudamos a identificar cuál te corresponde y a reunir los documentos.',
        'If you are behind on electricity, gas or water, there are assistance programs from the government and from the utility companies themselves. We help you identify which one applies to you and gather the documents.')}</p>
      <p class="nota" data-i18n="as.p3n">${t('p3n',
        'Generalmente necesitarás: identificación, comprobante de domicilio, la factura pendiente y un comprobante de ingresos del hogar.',
        'You will generally need: photo ID, proof of address, the outstanding bill and proof of household income.')}</p>
      <a class="btn btn-primary" href="contacto.html" data-i18n="as.p3c">${t('p3c', 'Pedir ayuda con mi factura', 'Get help with my bill')}</a>
    </article>

    <article class="card ayuda reveal lit-amarillo" id="chip">
      <span class="p-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.7-7.5-10A4.5 4.5 0 0 1 12 8.4a4.5 4.5 0 0 1 7.5 2.6c0 5.3-7.5 10-7.5 10Z"/></svg></span>
      <h2 data-i18n="as.p4t">${t('p4t', 'CHIP y Medicaid para Niños', 'CHIP and Children’s Medicaid')}</h2>
      <p data-i18n="as.p4p">${t('p4p',
        'Los niños de familias con ingresos limitados pueden tener cobertura médica sin costo o de bajo costo a través de CHIP o de Medicaid: consultas, vacunas, dentista, urgencias y medicinas.',
        'Children in families with limited income may qualify for free or low-cost health coverage through CHIP or Medicaid: check-ups, vaccinations, dental care, emergencies and prescriptions.')}</p>
      <a class="btn btn-primary" href="contacto.html" data-i18n="as.p4c">${t('p4c', 'Consultar por mis hijos', 'Ask about my children')}</a>
    </article>

    <p class="aviso reveal" data-i18n="as.aviso">${t('aviso',
      'La Asociación Cultural Colombiana no es una agencia del gobierno. Ofrecemos orientación gratuita y te acompañamos en el proceso; la decisión final sobre cada solicitud la toma la agencia correspondiente del estado de Texas.',
      'The Colombian Cultural Association is not a government agency. We offer free guidance and support throughout the process; the final decision on each application is made by the relevant State of Texas agency.')}</p>

  </div>
</section>
${ctaBand()}`;

  return page({
    id: 'asistencia',
    title: 'Asistencia social | Asociación Cultural Colombiana',
    description: 'Orientación gratuita sobre TANF, pago único TANF, ayuda con servicios públicos y CHIP/Medicaid para niños en Dallas, Texas.',
    hero, body,
  });
}

/* 4. Cultura -------------------------------------------------------------- */

function cultura() {
  ns('cu');
  const hero = pageHero('cu.eyebrow', 'cu.title', 'cu.lead',
    t('eyebrow', 'Arte y tradición', 'Art and tradition'),
    t('title', 'Cultura', 'Culture'),
    t('lead', 'La cultura es lo que nos mantiene unidos lejos de casa. Llevamos la música, la danza y la cocina colombiana a los escenarios de Dallas.',
              'Culture is what keeps us together far from home. We bring Colombian music, dance and cooking to the stages of Dallas.'));

  const cards = [
    ['lit-azul', 'Música', 'Music', 'Vallenato, cumbia y porro en vivo, con agrupaciones locales y artistas invitados.', 'Live vallenato, cumbia and porro, with local groups and guest artists.'],
    ['lit-amarillo', 'Danza', 'Dance', 'Grupos de baile folclórico que representan las regiones de Colombia en festivales de la ciudad.', 'Folk dance groups representing Colombia’s regions at city festivals.'],
    ['lit-rojo', 'Gastronomía', 'Food', 'Arepas, empanadas, sancocho y bandeja paisa en nuestras jornadas comunitarias.', 'Arepas, empanadas, sancocho and bandeja paisa at our community gatherings.'],
    ['lit-amarillo', 'Artesanía', 'Crafts', 'Mochilas wayuu, sombreros vueltiaos y el trabajo de artesanos colombianos.', 'Wayuu bags, sombreros vueltiaos and the work of Colombian artisans.'],
    ['lit-azul', 'Talleres', 'Workshops', 'Espacios para que niños y jóvenes aprendan sobre la historia y las regiones del país.', 'Spaces for children and young people to learn about the country’s history and regions.'],
    ['lit-rojo', 'Muestras', 'Showcases', 'Participamos en ferias multiculturales llevando la representación de Colombia.', 'We take part in multicultural fairs, bringing Colombia’s presence to them.'],
  ].map(([lit, es, en, pes, pen], i) => `      <article class="card program reveal ${lit}">
        <h3 data-i18n="cu.c${i + 1}t">${t('c' + (i + 1) + 't', es, en)}</h3>
        <p data-i18n="cu.c${i + 1}p">${t('c' + (i + 1) + 'p', pes, pen)}</p>
      </article>`).join('\n');

  const body = `<section class="section">
  <div class="shell">
    <div class="cards">
${cards}
    </div>
  </div>
</section>
${galeria()}
${ctaBand()}`;

  return page({
    id: 'cultura',
    title: 'Cultura | Asociación Cultural Colombiana',
    description: 'Música, danza, gastronomía y artesanía colombiana en Dallas, Texas.',
    hero, body,
  });
}

/* 5. Eventos -------------------------------------------------------------- */

function eventos() {
  ns('ev');
  const hero = pageHero('ev.eyebrow', 'ev.title', 'ev.lead',
    t('eyebrow', 'Para no perderte', 'Save the date'),
    t('title', 'Eventos destacados', 'Featured events'),
    t('lead', 'Estas son las fechas que celebramos con la comunidad. Escríbenos para confirmar lugar y hora de la próxima edición.',
              'These are the dates we celebrate with the community. Contact us to confirm the venue and time of the next edition.'));

  const body = `<section class="section">
  <div class="shell">
    <ol class="events">
      <li class="card event is-next reveal lit-amarillo">
        <div class="ev-date">
          <span class="ev-day">20</span>
          <span class="ev-mon" data-i18n="ev.e1m">${t('e1m', 'Jul', 'Jul')}</span>
          <span class="ev-yr" data-i18n="ev.anual">${t('anual', 'Anual', 'Yearly')}</span>
        </div>
        <div class="ev-body">
          <p class="ev-tag" data-i18n="ev.e1tag">${t('e1tag', 'Fiesta patria', 'National holiday')}</p>
          <h2 data-i18n="ev.e1t">${t('e1t', 'Día de la Independencia de Colombia', 'Colombian Independence Day')}</h2>
          <p data-i18n="ev.e1p">${t('e1p',
            'Nuestra celebración más grande del año: música en vivo, bailes tradicionales, comida colombiana y actividades para los niños.',
            'Our biggest celebration of the year: live music, traditional dancing, Colombian food and activities for children.')}</p>
          <p class="ev-meta"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-10.2A6.5 6.5 0 0 1 18.5 10.8C18.5 15.4 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.3"/></svg><span data-i18n="ev.tbd">${t('tbd', 'Lugar por confirmar · Dallas, TX', 'Venue to be confirmed · Dallas, TX')}</span></p>
        </div>
      </li>
      <li class="card event reveal lit-rojo">
        <div class="ev-date">
          <span class="ev-day ev-day-tbd">—</span>
          <span class="ev-mon" data-i18n="ev.e2m">${t('e2m', 'May', 'May')}</span>
          <span class="ev-yr" data-i18n="ev.anual2">${t('anual2', 'Anual', 'Yearly')}</span>
        </div>
        <div class="ev-body">
          <p class="ev-tag" data-i18n="ev.e2tag">${t('e2tag', 'Comunidad', 'Community')}</p>
          <h2 data-i18n="ev.e2t">${t('e2t', 'Memorial Day', 'Memorial Day')}</h2>
          <p data-i18n="ev.e2p">${t('e2p',
            'Nos sumamos a la conmemoración estadounidense con un encuentro familiar de la comunidad colombiana en Dallas.',
            'We join the American commemoration with a family gathering of the Colombian community in Dallas.')}</p>
          <p class="ev-meta"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.8V12l3 1.8"/></svg><span data-i18n="ev.tbd2">${t('tbd2', 'Fecha y lugar por confirmar', 'Date and venue to be confirmed')}</span></p>
        </div>
      </li>
    </ol>
  </div>
</section>
${ctaBand()}`;

  return page({
    id: 'eventos',
    title: 'Eventos | Asociación Cultural Colombiana',
    description: 'Día de la Independencia de Colombia y Memorial Day con la comunidad colombiana de Dallas, Texas.',
    hero, body,
  });
}

/* 6. Consulado ------------------------------------------------------------ */

function consulado() {
  ns('co');
  const hero = pageHero('co.eyebrow', 'co.title', 'co.lead',
    t('eyebrow', 'Trámites y documentos', 'Paperwork and documents'),
    t('title', 'Visita nuestro consulado', 'Visit our consulate'),
    t('lead', 'El Consulado de Colombia en Dallas atiende pasaportes, registro civil, cédulas, poderes y autenticaciones. Aquí tienes sus datos de contacto.',
              'The Consulate of Colombia in Dallas handles passports, civil registry, ID cards, powers of attorney and notarisations. Here are its contact details.'));

  const rows = [
    ['dir', 'Dirección', 'Address', '2911 Turtle Creek Blvd, Suite 300<br>Dallas, Texas 75219', '2911 Turtle Creek Blvd, Suite 300<br>Dallas, Texas 75219'],
    ['hor', 'Horario de atención', 'Opening hours', 'Por confirmar — consulta el sitio oficial', 'To be confirmed — check the official site'],
    ['tel', 'Teléfono', 'Phone', 'Por confirmar', 'To be confirmed'],
    ['wha', 'WhatsApp', 'WhatsApp', 'Por confirmar', 'To be confirmed'],
  ].map(([k, es, en, ves, ven]) => `        <li>
          <span class="c-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s-6.5-5.6-6.5-10.2A6.5 6.5 0 0 1 18.5 10.8C18.5 15.4 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.3"/></svg></span>
          <div>
            <p class="c-label" data-i18n="co.${k}">${t(k, es, en)}</p>
            <p data-i18n="co.${k}v">${t(k + 'v', ves, ven)}</p>
          </div>
        </li>`).join('\n');

  // Registered before ctaBand() switches the namespace, or it becomes cta.fotoAlt.
  t('fotoAlt', 'Edificio del Consulado de Colombia en Dallas', 'Building of the Consulate of Colombia in Dallas');

  const body = `<section class="section">
  <div class="shell contact-inner">
    <div class="contact-copy reveal">
      <h2 class="section-title" data-i18n="co.datos">${t('datos', 'Datos del consulado', 'Consulate details')}</h2>
      <ul class="contact-list">
${rows}
        <li>
          <span class="c-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.4 3.7 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.7-5.4-3.7-8.5S9.6 5.8 12 3.5Z"/></svg></span>
          <div>
            <p class="c-label" data-i18n="co.web">${t('web', 'Sitio web oficial', 'Official website')}</p>
            <a href="https://dallas.consulado.gov.co/" target="_blank" rel="noopener">dallas.consulado.gov.co</a>
          </div>
        </li>
      </ul>
      <p class="aviso" data-i18n="co.aviso">${t('aviso',
        'La Asociación Cultural Colombiana es independiente del Consulado. Publicamos esta información para facilitarte el contacto; los trámites se realizan directamente ante el Consulado.',
        'The Colombian Cultural Association is independent of the Consulate. We publish this information to make contact easier; all paperwork is handled directly by the Consulate.')}</p>
    </div>
    <figure class="card foto-card reveal lit-amarillo">
      <img src="assets/img/consulado.jpg" alt="Edificio del Consulado de Colombia en Dallas" loading="lazy" decoding="async" width="800" height="600"
           data-i18n-attr="alt:co.fotoAlt">
      <figcaption data-i18n="co.foto">${t('foto', 'Consulado de Colombia en Dallas, Texas', 'Consulate of Colombia in Dallas, Texas')}</figcaption>
    </figure>
  </div>
</section>
${ctaBand()}`;

  return page({
    id: 'consulado',
    title: 'Consulado | Asociación Cultural Colombiana',
    description: 'Datos de contacto del Consulado de Colombia en Dallas, Texas: dirección, horario y sitio oficial.',
    hero, body,
  });
}

/* 7. Contacto ------------------------------------------------------------- */

function contacto() {
  ns('ct');
  const hero = pageHero('ct.eyebrow', 'ct.title', 'ct.lead',
    t('eyebrow', 'Contacto', 'Contact'),
    t('title', 'Hablemos', 'Let’s talk'),
    t('lead', '¿Necesitas orientación con una ayuda, quieres ser voluntario o proponer una actividad cultural? Escríbenos y te respondemos.',
              'Need guidance with an assistance program, want to volunteer, or have a cultural activity to propose? Write to us and we will reply.'));

  ns('form');
  const body = `<section class="section">
  <div class="shell contact-inner">
    <div class="contact-copy reveal">
      <ul class="contact-list">
        <li>
          <span class="c-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg></span>
          <div>
            <p class="c-label" data-i18n="form.emailL">${t('emailL', 'Correo', 'Email')}</p>
            <!-- TODO: confirmar la dirección de correo oficial -->
            <a href="mailto:info@colombianculturalassociation.org">info@colombianculturalassociation.org</a>
          </div>
        </li>
        <li>
          <span class="c-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s-6.5-5.6-6.5-10.2A6.5 6.5 0 0 1 18.5 10.8C18.5 15.4 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.3"/></svg></span>
          <div>
            <p class="c-label" data-i18n="form.placeL">${t('placeL', 'Dónde estamos', 'Where we are')}</p>
            <p data-i18n="form.placeV">${t('placeV', 'Dallas, Texas · Área metropolitana de Dallas–Fort Worth', 'Dallas, Texas · Dallas–Fort Worth metroplex')}</p>
          </div>
        </li>
      </ul>
    </div>

    <form class="card contact-form reveal lit-amarillo" id="contactForm" novalidate>
      <div class="field">
        <label for="cf-name" data-i18n="form.name">${t('name', 'Nombre', 'Name')}</label>
        <input id="cf-name" name="name" type="text" autocomplete="name" required placeholder="María Rodríguez" data-i18n-attr="placeholder:form.namePh">
      </div>
      <div class="field">
        <label for="cf-email" data-i18n="form.email">${t('email', 'Correo electrónico', 'Email address')}</label>
        <input id="cf-email" name="email" type="email" autocomplete="email" required placeholder="tu@correo.com" data-i18n-attr="placeholder:form.emailPh">
      </div>
      <div class="field">
        <label for="cf-topic" data-i18n="form.topic">${t('topic', 'Motivo', 'Reason')}</label>
        <div class="select-wrap">
          <select id="cf-topic" name="topic">
            <option data-i18n="form.t1">${t('t1', 'Asistencia social (TANF, servicios, CHIP)', 'Social assistance (TANF, utilities, CHIP)')}</option>
            <option data-i18n="form.t2">${t('t2', 'Trámites y consulado', 'Paperwork and consulate')}</option>
            <option data-i18n="form.t3">${t('t3', 'Voluntariado', 'Volunteering')}</option>
            <option data-i18n="form.t4">${t('t4', 'Actividades culturales', 'Cultural activities')}</option>
            <option data-i18n="form.t5">${t('t5', 'Otro', 'Other')}</option>
          </select>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.5 9.5 5.5 5.5 5.5-5.5"/></svg>
        </div>
      </div>
      <div class="field">
        <label for="cf-msg" data-i18n="form.message">${t('message', 'Mensaje', 'Message')}</label>
        <textarea id="cf-msg" name="message" rows="5" required placeholder="Cuéntanos en qué podemos ayudarte…" data-i18n-attr="placeholder:form.messagePh"></textarea>
      </div>
      <button class="btn btn-primary btn-block" type="submit" data-i18n="form.submit">${t('submit', 'Enviar mensaje', 'Send message')}</button>
      <p class="form-note" data-i18n="form.note">${t('note', 'Se abrirá tu aplicación de correo con el mensaje listo para enviar.', 'Your email app will open with the message ready to send.')}</p>
      <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>`;

  t('namePh', 'María Rodríguez', 'Maria Rodriguez');
  t('emailPh', 'tu@correo.com', 'you@email.com');
  t('messagePh', 'Cuéntanos en qué podemos ayudarte…', 'Tell us how we can help…');
  t('incomplete', 'Por favor completa los campos requeridos.', 'Please fill in the required fields.');
  t('opened', '¡Gracias! Abrimos tu aplicación de correo para enviar el mensaje.', 'Thank you! We opened your email app to send the message.');

  return page({
    id: 'contacto',
    title: 'Contacto | Asociación Cultural Colombiana',
    description: 'Escríbenos para recibir orientación gratuita sobre programas de ayuda en Dallas, Texas.',
    hero, body,
  });
}

module.exports = { home, quienes, asistencia, cultura, eventos, consulado, contacto };
