# PlayBack Fútbol — sitio público

Landing bilingüe (español / inglés), soporte y política de privacidad de PlayBack Fútbol: https://diegokelya.github.io/playback-futbol/

Este repositorio contiene solo los archivos públicos del sitio. El código de la app no está acá.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Página única, con metadatos para buscadores y redes (Open Graph). |
| `app.js` | Textos en español e inglés. Elige el idioma por `?lang=es\|en`, después la última elección guardada y después el idioma del navegador. |
| `support.html`, `privacy.html` | Soporte y política de privacidad, en español e inglés en la misma página. Sin JavaScript. |
| `styles.css` | Estilos, sin dependencias externas. |
| `404.html` | Página de error de GitHub Pages. |
| `sitemap.xml` | Para cargar en Google Search Console. |
| `assets/` | Logo optimizado (PNG/WebP 128 px), ícono para iPhone y tarjeta para redes de 1200×630. |

## Publicación

Cada push a `main` corre `.github/workflows/pages.yml`, que copia solo los archivos públicos a `_site/`, verifica que no falte ningún recurso y publica en GitHub Pages. Si se agrega un archivo nuevo, hay que sumarlo al paso *Build _site*.

## Seguridad y privacidad

- CSP en `<meta>` (Pages no permite headers): solo recursos propios, sin estilos inline y sin formularios.
- Sin recolección de datos: no hay formularios, cookies ni analíticas. `localStorage` guarda solo el idioma elegido.
- Actions fijadas por SHA y actualizadas con Dependabot.
- Nada privado: no se publican fuentes de la app, claves, identificadores de cuenta ni datos personales.

## Contacto

Issues públicos de este repositorio. No incluyas datos personales ni videos privados.
