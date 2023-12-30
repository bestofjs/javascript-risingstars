---
id: framework
language: es
---

React continúa siendo el rey en 2022, pero Vue.js le sigue muy de cerca en términos de popularidad si consideremos que la estrellas de Vue.js están divididas entre dos repositorios: v2 y v3.

El cambio principal de este año es el crecimiento de {qwik}, llegando hasta la segunda posición. Qwik se parece a React, también usa componentes escritos en JSX sin embargo, la principal diferencia es su énfasis en intentar incluir la menor cantidad de código JavaScript en el navegador.     

Forma parte de la tendencia "Zero baseline JavaScript". Sitios y aplicaciones web están muchas veces cargados de ficheros JavaScript pesados que afectan al rendimiento en el navegador: incluso si la página se renderiza en el servidor los usuarios tienen que esperar hasta que el código JavaScript se cargue, procese y ejecute para poder interactuar con la página.

En vez de depender en [hydration](https://www.builder.io/blog/hydration-is-pure-overhead) para proporcionar interactividad a las páginas generadas en el servidor, Qwik usa una técnica llamada "resumability" que provee HTML que es instantáneamente interactivo. Funciona serializando el estado de la aplicación en el propio HTML.

El proyecto está dirigido por [Miško Hevery](https://twitter.com/mhevery), creador de AngularJS, que tenía el eslogan "HTML enhanced for web apps", mientras que el de Qwik es "the HTML-first framework"...una intención similar de crear apps encima de nuestro viejo conocido HTML.
