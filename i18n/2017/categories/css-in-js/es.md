No hay consenso sobre cuál es la mejor manera para dar estilo a nuestros componentes de React.

Puedes disponer de componentes predefinidos usando {material-ui} o {ant-design} si no necesitas mucha personalización.

Si quieres tener mayor flexibilidad, puedes hacerlo a la vieja usanza, usando estilos CSS globales con {bootstrap} or {bulma} y asignando `className` a tus componentes, pero de este modo no estarán completamente encapsulados, teniendo el estilo controlado externamente.

Para abordar esta cuestión, ha aparecido el concepto "CSS dentro de JavaScript".

La idea es sencilla: con React manejamos tanto la lógica como la plantilla del componente usando JavaScript. ¿Por qué no ir un poco más allá y encapsular los estilos dentro de nuestros componentes usando JavaScript?

{styled-components} ha sido de lejos el proyecto más popular del año en esta categoría. Permite incluir CSS dentro de nuestros componentes React usando *tagged template literals*, una funcionalidad añadida recientemente a JavaScript.

{css-modules}, número 2 en esta categoría, adopta un enfoque híbrido. Permite a los desarrolladores escribir en una gama de lenguajes a su elección (CSS, Sass, {less}, {stylus}), usando ficheros ubicados junto a los componentes relacionados e importados en estos.

[Mark Dalgleish](http://markdalgleish.com/), uno de los autores de {css-modules}, escribió uno de los artículos más interesantes sobre el enfoque "CSS-en-JavaScript": [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660). El artículo es muy recomendable para gente que se siente un poco escéptica en relación a esta nueva técnica.
