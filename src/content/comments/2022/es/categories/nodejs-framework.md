---
id: nodejs-framework
language: es
---
El límite que separa a un framework de ser frontend o backend es fino en muchas ocasiones, ya que hay una tendencia a hacer cada vez más cosas en el lado servidor (incluyendo rendering y routing) comparado con el enfoque SPA, donde el backend es el único responsable de la API. Por esta razón, la sección incluye full-stack, meta y backend frameworks.  

#### Next.js

Al igual que el año pasado, {nextjs} lidera el ranking. La versión 13 ha traído grandes funcionalidades incluyendo React Server Components y la nueva estructura del sistema de ficheros usando la carpeta `app`, que permite a los desarrolladores ubicar su código en relación a sus funcionalidades y gestionar rutas anidadas de una forma muy potente. 

#### tRPC

Uno de las novedades ha sido el crecimiento de {trpc}, llegando hasta la segunda posición. 
Olvidémonos de REST contra GraphQL: ahora también aparece el [protocolo JSON RPC 2.0](https://en.wikipedia.org/wiki/JSON-RPC) que potencia a {trpc}.
Una de sus funcionalidades más llamativas es la posibilidad de importar types definidos en el servidor desde el cliente, para proporcionar "end-to-end type safety".

Nos gustaría mencionar también el proyecto {t3-stack}, que combina tRPC, Next.js y {tailwind-css} en un boilerplate muy popular (dentro de los 20 proyectos más populares del año). 

#### Astro

En tercera posición tenemos a {astro}. En 2021 apareció como un static site generator e hizo popular el concepto de partial hydration. 

La habilidad del equipo de Astro para crear una buena experiencia de desarrollo se resalta en [el lanzamiento de Astro 1.0](https://astro.build/blog/astro-1/).

La integración del nuevo soporte para SSR con cualquier herramienta frontend (como React y SCSS) hace que el desarrollo web se sienta muy fresco!

#### Remix

En cuarto puesto, {remix} continúa creciendo a mucha velocidad. Su código fue liberado en 2021 y justo un año después [lo adquirió Shopify](https://remix.run/blog/remixing-shopify).

En el post [The Web Next Transition](https://www.epicweb.dev/the-webs-next-transition) Kent C. Dodds hizo un gran trabajo explicando los patrones que hacen Remix tan especial.

En vez de depender en la generación estática de páginas, Remix implementa computación distribuida y funcionalidades nativas del navegador para proporcionar buen rendimiento y experiencia de desarrollo.
