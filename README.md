# Colombian Cultural Association — sitio web

Sitio web estático, bilingüe (español / inglés) y sin dependencias externas para la
Colombian Cultural Association (Kansas City · Overland Park, KS).

No requiere compilación ni instalación: son archivos HTML, CSS y JavaScript planos.

---

## ⚠️ Antes de publicar: datos por confirmar

Este sitio se construyó a partir de información pública sobre la organización. **Los
siguientes datos deben verificarse y corregirse antes de publicar.** Cada uno está
marcado con un comentario `TODO` en el código.

| Dato | Valor actual | Dónde se edita |
|---|---|---|
| Correo de contacto | `info@colombianculturalassociation.org` *(supuesto)* | `index.html` (sección contacto) y `CONTACT_EMAIL` en `assets/js/main.js` |
| Enlace de donaciones | apunta al formulario de contacto | `index.html`, sección `#apoya` |
| Cita del presidente | atribuida a Orlando Gutiérrez, tomada de prensa local | `about.quote` en `assets/js/main.js` + `index.html` |
| Novena de diciembre 2026 | fecha y lugar «por confirmar» | `index.html`, sección `#eventos` |
| Festival 2027 | fecha «por confirmar» | `index.html`, sección `#eventos` |
| Teléfono | no incluido | añadir en la lista de contacto si se desea |

Datos que sí están verificados: nombre legal, EIN **46-4889897**, estatus 501(c)(3),
fundación en 2018, sede en Overland Park (KS), el Festival de la Independencia del
**19 de julio de 2026 en North Kansas City**, las presentaciones en Rockhurst
University y las cuentas de Facebook y X (`@CCAmokan`).

---

## Estructura

```
index.html            Página principal (todas las secciones)
404.html              Página de error
robots.txt            Indexación
sitemap.xml           Mapa del sitio
assets/css/styles.css Sistema de diseño completo (tokens, temas, responsive)
assets/js/main.js     Idioma, tema, menú móvil, animaciones, formulario
```

Todo el sitio es autocontenido: no carga fuentes, íconos ni imágenes externas.
Los íconos son SVG en línea y el logo es SVG. Esto lo hace muy rápido y hace que
funcione sin conexión a servicios de terceros.

---

## Cómo editar el contenido

### Textos

El sitio es bilingüe. **El español vive en `index.html`** (es lo que se ve sin
JavaScript) y **el inglés vive en `assets/js/main.js`**, en el diccionario `I18N.en`.

Para cambiar un texto hay que editarlo en los dos lugares. Cada elemento traducible
lleva un atributo con su clave:

```html
<h3 data-i18n="programs.p1Title">Festival de la Independencia</h3>
```

```js
// assets/js/main.js  →  I18N.en
'programs.p1Title': 'Independence Day Festival',
```

Variantes del atributo:

- `data-i18n` — reemplaza el texto del elemento.
- `data-i18n-html` — para textos que contienen etiquetas (ej. la palabra destacada del título).
- `data-i18n-attr="placeholder:form.namePh"` — traduce un atributo (placeholder, aria-label…).

> Si se añade una clave nueva, hay que agregarla en **ambos** diccionarios (`es` y `en`).

### Eventos

En la sección `#eventos` de `index.html`, cada evento es un bloque `<li class="event">`.
Para añadir uno, se copia un bloque completo y se cambian la fecha, el título y el texto.

- `class="event is-next"` → resalta el evento con un borde azul (el próximo).
- `class="event is-past"` → estilo normal.

Recuerde añadir también las claves de texto del nuevo evento al diccionario inglés.

### Colores y tipografía

Todo está centralizado en las variables CSS al inicio de `assets/css/styles.css`:

```css
:root {
  --brand: #0B3A82;   /* azul */
  --gold:  #E0A21A;   /* amarillo */
  --coral: #D93B3B;   /* rojo */
  ...
}
```

Los colores de la bandera se usan como acento, no como fondo, para que el resultado
sea festivo pero profesional.

Nota importante: `--brand` es un color de **texto** (se aclara en modo oscuro),
mientras que `--band-from/mid/to` son los azules oscuros de los **fondos grandes**
(la franja de apoyo, el ticket, la cita). Están separados a propósito: si se usara
`--brand` para los fondos, en modo oscuro quedarían azul claro y el texto blanco
perdería contraste.

---

## Formulario de contacto

Como el sitio es estático, el formulario abre la aplicación de correo del visitante
con el mensaje ya redactado (`mailto:`). Funciona sin servidor y sin costo.

Para recibir los mensajes en un panel en lugar de por correo, se puede reemplazar el
bloque del formulario en `assets/js/main.js` por un servicio gratuito como
[Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/)
o un Google Form.

---

## Cómo ver el sitio localmente

Basta abrir `index.html` en el navegador. Para que las rutas se comporten igual que
en producción, se puede levantar un servidor local:

```bash
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

---

## Cómo publicarlo

Al ser un sitio estático, sirve cualquier hosting. Opciones gratuitas:

**GitHub Pages** — en el repositorio: *Settings → Pages*, elegir la rama y la carpeta
raíz (`/`). Para usar el dominio propio, se agrega un archivo `CNAME` con el
contenido `colombianculturalassociation.org` y se apunta el DNS a GitHub Pages.

**Netlify / Cloudflare Pages / Vercel** — conectar el repositorio y dejar el comando
de compilación vacío; el directorio de publicación es la raíz.

---

## Accesibilidad y calidad

Verificado durante el desarrollo:

- Contraste **WCAG AA** en todos los textos, en modo claro y oscuro.
- Navegación por teclado con enlace «saltar al contenido» y foco visible.
- Menú móvil con `aria-expanded`, cierre con `Esc` y al hacer clic fuera.
- Respeta `prefers-reduced-motion` (desactiva animaciones).
- Respeta `prefers-color-scheme` y recuerda la elección del visitante.
- Funciona sin JavaScript (el contenido en español se muestra completo).
- Sin desbordamiento horizontal desde 360 px hasta escritorio.
- SEO: meta descripciones, Open Graph, y datos estructurados JSON-LD tipo `NGO`.
