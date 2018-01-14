Como predijimos [el año pasado](/2016/en#test-framework) (¡la primera vez que predecimos algo que se cumple!), {jest} se ha convertido en el framework más popular del 2017.

Inicialmente fue diseñado por Facebook con el fin de crear tests para React, pero su evolución ha sido tal durante los últimos meses (¡ya van por la versión 22!) que actualmente puede ser usado para hacer tests tanto en el front-end como en el back-end.

Jest destaca en los siguiente puntos:

* No requiere configuración inicial, normalmente los valores por defecto se ajustan a las necesidades más comunes.
* Buena experiencia desde el punto de vista del desarrollador (detección avanzada de cambios en los ficheros, buen reporte de errores...).
* Sintaxis similar a la de {mocha}, es una ventaja ya que muchos desarrolladores ya están familiarizados con `describe` o `it` por ejemplo.
* No necesita de ninguna otra librería, contiene todo lo necesario para realizar tus tests.
* Implementa un modo "snapshot" que registra automáticamente la respuesta esperada para futuros tests.

{ava}, el número 1 del año pasado, continua siendo muy popular.

Creado por [Sindre Sorhus](https://github.com/sindresorhus) y usado por el mismo en todos sus extraordinarios proyectos.

Comparándolo con Jest, este se centra en la velocidad con la que se ejecutan los tests (haciéndolo en paralelo). Es más ligero y cercano a los estándares, con una sintaxis semejante a la de frameworks como {tape}.
