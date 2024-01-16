---
id: all
language: es
---

### TOP 3

El proyecto más popular del año es {zx}, Google nos ha traído una nueva herramienta para escribir fácilmente scripts de línea de comandos en JavaScript o TypeScript.

Básicamente, nos permite embeber expresiones de bash (`ls`, `cat`, `git`...¡cualquier cosa!) en nuestro código y esperar el resultado con `await` usando [los template literals de JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

Este incluye funcionalidades proporcionadas por otros paquetes tan populares como:

- [node-fetch](https://github.com/node-fetch/node-fetch) para hacer llamadas HTTP usando la misma API como `fetch` en el navegador
- [fs-extra](https://github.com/jprichardson/node-fs-extra) para realizar operaciones con el sistema de ficheros
- [globby](https://github.com/sindresorhus/globby) para identificar nombres de ficheros dados sencillos patrones.

En segundo puesto, {vite} una herramienta para nuestro build que usa {esbuild} como compilador, proporcionando un gran rendimiento. Inicialmente estaba asociado a la comunidad de Vue.js pero actualmente tiene opciones para los principales frameworks UI: {react}, {svelte}, {lit}. 

Y en tercera posición, {nextjs} mantiene su liderazgo como "meta framework" en el panorama React. 

### Tauri

En quinto lugar, {tauri} que nos permite crear aplicaciones de escritorio usando tecnologías web.

Comparándolo con {electron}, está escrito en Rust y no incorpora el runtime de Node.js en cada aplicación. La versión 1.0 beta [fue lanzada en mayo](https://dev.to/tauri/announcing-tauri-beta-more-efficient-crossplatform-apps-with-better-features-1nbd).

### Mención especial

Aunque no aparezca en el TOP 10, {astro} es una de los proyectos más notables del año. Astro es una herramienta para crear sitios web ligeros que cargan notablemente rápido debido a que incluye menos JavaScript. 

El concepto es semejante al de "static site generation" (SSG) pero con la diferencia que Astro permite incluir partes dinámicas de interacción en las páginas llamadas "islands".

Para renderizar componentes dinámicos en el lado cliente se pueden usar diferentes estrategias cuando:

- la página carga
- la página no se modifica si es un componente de baja prioridad (por ejemplo tracking)
- el componente es visible usando la [API Intersection Observer](https://devdocs.io/dom/intersection_observer_api)

Una de las principales características, es que las páginas de Astro pueden ser construidas como combinación de HTML y componentes escritos con cualquier framework/librería: React, Vue.js o Svelte...