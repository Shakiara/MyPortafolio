# Main_Portafolio

Portafolio personal creado con HTML, CSS y JavaScript puro. El repositorio incluye una pagina principal de portafolio y una pagina separada para mostrar componentes y experimentos de UI.

## Resumen

Este proyecto presenta un portafolio frontend de Shakiara Feliciano. Es un sitio estatico, asi que no depende de frameworks ni de un paso de compilacion. La pagina principal incluye introduccion, sobre mi, habilidades, proyectos y contacto. La pagina de UI Showcase funciona como un laboratorio visual para botones, formularios, navegacion, overlays, estados de feedback y utilidades.

## Caracteristicas

- Diseno responsivo con navegacion para escritorio y movil
- Hero con animaciones y efectos de aparicion al hacer scroll
- Seccion de habilidades con barras de progreso
- Grid de proyectos renderizado desde datos en JavaScript
- Formulario y datos de contacto
- Pagina separada de UI Showcase con componentes reutilizables

## Estructura Del Proyecto

- `pages/index.html` - pagina principal del portafolio
- `pages/ui-showcase.html` - pagina de componentes UI
- `scripts/portafolio.js` - logica del portafolio y render de proyectos
- `scripts/ui-showcase.js` - interacciones de la pagina UI Showcase
- `styles/style.css` - estilos principales del portafolio
- `styles/ui.css` - estilos compartidos para UI Showcase
- `media/` - imagenes y recursos multimedia
- `docs/` - espacio reservado para documentacion
- `packages/` - espacio reservado para paquetes futuros

## Como Ejecutarlo

Como es un sitio estatico, puedes abrir los archivos HTML directamente en el navegador. Para mejores resultados, usa un servidor local para que las rutas relativas funcionen bien.

### Opcion 1: Abrir Directamente

Abre `pages/index.html` en tu navegador.

### Opcion 2: Usar Un Servidor Local

Si usas VS Code Live Server o cualquier servidor estatico simple, abre la carpeta `pages/` y sirve el sitio desde ahi.

Ejemplos:

- Live Server en VS Code
- Servidor rapido con Python: `python -m http.server`

## Despliegue

Si ya publicaste el sitio, coloca aqui tu enlace en vivo:

- Sitio en vivo: agrega tu URL de despliegue aqui

Tambien puedes enlazar las versiones especificas de cada pagina si las publicas por separado:

- Portafolio: agrega tu enlace aqui
- UI Showcase: agrega tu enlace aqui

## Sobre El Repositorio

Este repositorio esta enfocado en practica frontend y presentacion personal. Muestra como esta estructurado el sitio, como se construyen secciones interactivas con JavaScript vanilla y como probar componentes reutilizables en una pagina independiente.

## Notas

- El proyecto no usa framework ni gestor de paquetes por ahora.
- Los iconos externos se cargan desde Font Awesome por CDN.
- Algunos enlaces de demo siguen siendo temporales y se pueden reemplazar por proyectos reales o repositorios de GitHub.