---
id: framework
language: es
---

En 2019, {svelte} ha descolocado la categoría de Frameworks Front-end, entrando en la 3ª posición justo detrás de {vuejs} y {react} pero delante de {angular}.

¿Significa esto que ahora tenemos 4 gigantes en vez de 3?

Svelte es muy diferente a los demás en esta categoría, ya que no es realmente un framework sino un compilador, ejecutando su mágia durante la creación del bundle y no en tiempo de ejecución.

Al igual que React o Vue, Svelte nos permite construir aplicaciones mediante la creación de componentes que se actualizan cuando sus datos cambian. Sin embargo, el bundle solo incluirá el código necesario para que funcione nuestra aplicación, a diferencia de React, Vue o Angular que necesitan incluir su propia librería además de nuestro código.

El compilador es capaz de generar código imperativo que manipula el DOM de los componentes creados por los desarrolladores directamente.

Por lo tanto el bundle resultante es pequeño y muy rápido de ejecutar (haciendo a Svelte un buen candidato para aplicaciones en dispositivos embebidos por ejemplo).

Además de su espectacular rendimiento, es sencillo crear complejas transiciones en CSS.

La versión 3 mejora el concepto de *reactivity*: actualizar una variable es todo lo que necesitas para disparar un cambio en la UI.

Es demasiado pronto para afirmar que Svelte será tan exitoso como los otros 3 pero definitivamente merece la pena seguirle la pista a lo largo del 2020.
