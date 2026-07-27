# Asociación Cultural Colombiana — sitio web

Sitio web estático, bilingüe (español / inglés) y sin dependencias externas para la
Asociación Cultural Colombiana en Dallas, Texas.

No requiere compilación ni instalación: son archivos HTML, CSS y JavaScript planos.

---

## ⚠️ Antes de publicar: datos por confirmar

Cada uno de estos está marcado con un comentario `TODO` en el código.

| Dato | Valor actual | Dónde se edita |
|---|---|---|
| Correo de contacto | `info@colombianculturalassociation.org` *(supuesto)* | `contacto.html` y `CONTACT_EMAIL` en `assets/js/main.js` |
| Horario del consulado | «por confirmar» | `consulado.html` |
| Teléfono y WhatsApp del consulado | «por confirmar» | `consulado.html` |
| Fecha exacta del Día de la Independencia | «lugar por confirmar» | `eventos.html` |
| Fecha y lugar de Memorial Day | «por confirmar» | `eventos.html` |
| Foto del consulado | falta el archivo `assets/img/consulado.jpg` | ver sección de fotos abajo |
| Fotos de la galería | faltan los 5 archivos `assets/img/galeria-*.jpg` | ver sección de fotos abajo |

Dato verificado: la dirección del consulado, 2911 Turtle Creek Blvd, Suite 300,
Dallas, Texas 75219 (tomada de la captura de pantalla que se compartió).

---

## Fotos

El sitio referencia estos archivos, que hay que copiar a `assets/img/` con esos
nombres exactos (ver `assets/img/LEEME.txt`):

| Archivo | Dónde aparece |
|---|---|
| `galeria-1.jpg` | Santuario de Las Lajas, Nariño |
| `galeria-2.jpg` | Bogotá al atardecer |
| `galeria-3.jpg` | Torre del Reloj, Cartagena |
| `galeria-4.jpg` | Cristo Rey, Cali |
| `galeria-5.jpg` | Cerro de Monserrate, Bogotá |
| `consulado.jpg` | Foto del edificio del consulado, en `consulado.html` |

**Mientras un archivo no exista, la web no se rompe**: `assets/js/main.js` detecta
la imagen faltante y muestra un panel de color con el texto de la foto en su lugar
(revise `assets/img/`, la función que dice "Missing photographs" en `main.js`, y la
clase `.sin-foto` en el CSS). Al copiar la foto, el panel de color desaparece solo.

Recomendación: fotos verticales de ~800×1000 px para la galería, horizontal de
~800×600 px para el consulado, comprimidas a menos de 300 KB cada una.

---

## Estructura

```
index.html              Inicio
quienes-somos.html      Quiénes somos
asistencia.html         Programas de ayuda: TANF, pago único, servicios públicos, CHIP/Medicaid
cultura.html            Música, danza, gastronomía, artesanía
eventos.html            Día de la Independencia, Memorial Day
consulado.html          Datos de contacto del consulado
contacto.html           Formulario de contacto
404.html                Página de error
robots.txt / sitemap.xml
assets/css/styles.css   Sistema de diseño completo (tokens, temas, responsive)
assets/js/main.js       Idioma, tema, menú móvil, animaciones, formulario
assets/img/             Fotografías (ver arriba)
```

Todo el sitio es autocontenido: no carga fuentes ni íconos externos (son SVG en
línea). Solo las fotografías se cargan como archivo aparte.

### Generador (`gen/`, no se publica)

Las 7 páginas HTML se generan con un pequeño script en Node, para que el texto en
español y en inglés nunca queden desincronizados entre sí. Está en la carpeta
`gen/` de este mismo proyecto de trabajo (no forma parte del sitio publicado):

- `gen/content.js` — registra cada texto como par `{es, en}`.
- `gen/layout.js` — encabezado, pie de página, y los "cuadros" de la bandera del hero.
- `gen/pages.js` — el contenido de cada una de las 7 páginas.
- `gen/build.js` — escribe los 7 archivos `.html` y reescribe el diccionario
  `I18N` dentro de `assets/js/main.js`.

**Si vuelve a tocar el contenido con ayuda de un asistente de código**, lo más seguro
es editar `gen/pages.js` y correr `node gen/build.js` desde esa carpeta, para que
español e inglés queden garantizados iguales en estructura. Si solo edita el HTML
final a mano, recuerde actualizar la traducción correspondiente en
`assets/js/main.js` usted mismo.

---

## Cómo editar el contenido

### Textos

El español vive en el HTML de cada página (así se ve el sitio completo sin
JavaScript). El inglés vive en `assets/js/main.js`, en el diccionario `I18N.en`.
Cada elemento traducible lleva un atributo con su clave:

```html
<h1 data-i18n="as.title">Ayudas</h1>
```

```js
// assets/js/main.js → I18N.en
'as.title': 'Assistance',
```

Variantes del atributo:

- `data-i18n` — reemplaza el texto del elemento.
- `data-i18n-attr="placeholder:form.namePh"` — traduce un atributo.

Si edita el HTML a mano, agregue la clave nueva en **ambos** bloques del
diccionario (`es` y `en`) dentro de `main.js`.

### Diseño: «luz y vidrio»

Detrás de toda la página hay un campo fijo de **tres luces** —amarilla, azul y
roja— muy difuminadas. Todo el contenido flota encima en **paneles de vidrio
esmerilado**, y cada panel lleva el tinte y la sombra de color de una de las tres
luces. La bandera nunca aparece como bloque plano: aparece como luz y como sombra.

En el hero de cada página hay además un motivo de triángulos de bandera (`.cuadros`
en el CSS, generado por `CUADROS` en `gen/layout.js`), inspirado en el diseño
original de la asociación.

Todo está centralizado en las variables CSS al inicio de `assets/css/styles.css`:

```css
:root {
  --amarillo: #FFCE00;
  --azul:     #14336F;   /* azul marino oscuro, el de la marca */
  --rojo:     #CE2027;

  --tint-a: .17;   /* cuánto color lleva el vidrio del panel */
  --rim:    .34;   /* cuánto color lleva el borde */
  --glow-a: .58;   /* fuerza del halo de color detrás del panel */
}
```

Cada tarjeta declara bajo qué luz está con una clase: `lit-amarillo`, `lit-azul` o
`lit-rojo`. Eso define su tinte, su borde, su halo y el color de su ícono.

```html
<article class="card program reveal lit-rojo"> … </article>
```

**Cosas aprendidas ajustando esto** (útiles si va a modificarlo):

- Las tres luces **no deben solaparse**: superpuestas se promedian y dan gris.
- En modo oscuro las luces van mucho más tenues, o crean manchas que se comen el
  texto pequeño.
- Sobre fondo claro, el color se lee por el **tinte dentro del vidrio**, no por la
  sombra detrás.
- Elementos de color fijo (como el botón "Ver programas de ayuda") necesitan un
  fondo oscuro propio en modo oscuro cuando quedan sobre una franja `lit-amarillo`
  muy clara — si no, el texto pierde contraste.

### Interactividad

En `assets/js/main.js`: las luces se mueven con el cursor y se desplazan con el
scroll; los paneles de vidrio reciben un reflejo que sigue al puntero y se inclinan
un poco. Se desactiva en teléfonos y para quien tenga «reducir movimiento» activado.

### Eventos

En `eventos.html`, cada evento es un bloque `<li class="card event">`. Para añadir
uno, copie un bloque completo. `class="... is-next lit-azul"` resalta el próximo
evento con un borde de color.

### Programas de ayuda social

Cada programa en `asistencia.html` es un bloque `<article class="card ayuda">`.
El aviso legal al final de la página (que aclara que la asociación no es una
agencia del gobierno) debe mantenerse si se agregan más programas.

---

## Formulario de contacto

El formulario abre la aplicación de correo del visitante con el mensaje ya
redactado (`mailto:`) — funciona sin servidor. Para recibir los mensajes en un
panel en lugar de por correo, reemplace el bloque del formulario en
`assets/js/main.js` por un servicio gratuito como
[Formspree](https://formspree.io) o [Netlify Forms](https://docs.netlify.com/forms/setup/).

---

## Cómo ver el sitio localmente

Abra `index.html` en el navegador, o levante un servidor local para que las rutas
se comporten igual que en producción:

```bash
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

---

## Cómo publicarlo

**GitHub Pages** — en el repositorio: *Settings → Pages*, elegir la rama y la
carpeta raíz (`/`). Para el dominio propio, agregue un archivo `CNAME` con
`colombianculturalassociation.org` y apunte el DNS a GitHub Pages.

**Netlify / Cloudflare Pages / Vercel** — conecte el repositorio, deje el comando
de compilación vacío; el directorio de publicación es la raíz.

---

## Accesibilidad y calidad

Verificado durante el desarrollo, en las 7 páginas:

- Contraste **WCAG AA**, en modo claro y oscuro, **medido sobre los píxeles
  realmente pintados** (no basta con leer el CSS: `backdrop-filter` deja pasar la
  luz de atrás, así que la comprobación oculta las letras, fotografía el fondo real
  de cada texto y calcula el contraste del peor 5 % de esos píxeles).
- El idioma y el tema elegidos se mantienen al navegar de una página a otra.
- El menú marca la página actual; foco de teclado visible; enlace «saltar al
  contenido»; menú móvil con `aria-expanded`, cierre con `Esc` y al hacer clic fuera.
- Respeta `prefers-reduced-motion` y `prefers-color-scheme`.
- Funciona sin JavaScript (el contenido en español se muestra completo).
- Sin desbordamiento horizontal desde 320 px hasta 1920 px, en ambos idiomas.
- Todos los enlaces internos verificados contra archivos que existen.
- SEO: meta descripciones, Open Graph, mapa del sitio con las 7 páginas.
