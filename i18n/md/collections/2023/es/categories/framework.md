---
id: framework
language: es
---

#### React

En 2023, React mantiene su posición como líder en el ecosistema de JavaScript, una tendencia que persiste desde 2021 y 2022, a pesar de críticas y controversias ocasionales.

Celebrando su décimo aniversario, React consiguió tener su propio documental (lo puedes ver [aquí](https://www.youtube.com/watch?v=8pDqJVdNa44)) ¡esto dice mucho sobre su popularidad!

Sin embargo, React no está exento de escépticos. Algunos lo ven como una reliquia del pasado, un sentimiento detallado en [este artículo](https://joshcollinsworth.com/blog/antiquated-react), que también explora soluciones alternativas. Por otro lado, los defensores elogian a React por su notable adaptabilidad y capacidad para reinventarse.

Un punto de controversia gira en torno a la ausencia de "señales" ("signals"), un mecanismo de manejo de reactividad utilizado por librerías como {solid} o {preact}, mientras que los entusiastas de React aprecian la previsibilidad que ofrece el flujo de datos de React.

Del [tweet](https://twitter.com/devongovett/status/1629540226589663233) de Devon Govett, el creador de Parcel, sobre las señales:

> La simplicidad de la UI como una función del estado se pierde cuando las actualizaciones fluyen de manera impredecible.

Para obtener más información sobre las señales, puedes leer [La evolución de las señales](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob), un análisis detallado de uno de los términos más destacados del año.

#### htmx

En segundo lugar, {htmx} es una librería que toma un enfoque diferente para proporcionar interactividad al HTML: en lugar de escribir varias líneas de código JavaScript, los desarrolladores nutren el HTML con atributos específicos y de esta forma habilitan la interactividad en tiempo real y actualizaciones dinámicas.

Fue elogiado por su poco peso y su perfecta integración con los frameworks del lado servidor existentes, ya que forma parte de la tendencia de "enviar HTML sobre el cable": pedir al servidor que envíe bloques parciales de HTML en lugar de manejar JSON en el cliente.

En el mismo ámbito de "tagging libraries", {alpinejs} es una solución popular (número 13 este año).

#### Svelte

En tercer lugar, la popularidad de Svelte sigue creciendo. A menudo se ve como una alternativa moderna a React.
Un gran cambio llegará dentro de pronto con Svelte 5, "el lanzamiento más esperado en la historia del proyecto", que introduce [runes](https://svelte.dev/blog/runes) para abordar algunos de los mayores problemas al manejar la reactividad del estado. [Este breve video](https://www.youtube.com/watch?v=RVnxF3j3N8U) de Rich Harris hace un gran trabajo explicando los problemas resueltos por las runas.

Una de las historias del año está relacionada con Svelte y causó mucho debate (por ejemplo, [Hacker News](https://news.ycombinator.com/item?id=35892250)): el equipo de Svelte ha elegido usar JavaScript con anotaciones JSDoc en lugar de TypeScript, para evitar la complejidad adicional y las desventajas asociadas con TypeScript, al tiempo que sigue brindando los beneficios de la seguridad en el tipado.

#### Otras actualizaciones de frameworks

- [Million v3](https://million.dev/blog/million-3) es una librería liviana que permite que "los componentes de React se ejecuten a la velocidad de JavaScript puro."
- [Angular 17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b) introdujo mejoras significativas en rendimiento, documentación actualizada y un nuevo branding (incluyendo bonitos colores para el logo).
- [Quik llegó a la versión 1](https://www.builder.io/blog/qwik-v1) en abril. El framework para construir aplicaciones "resumable" que envían cero JS (inicialmente) mientras entregan HTML que se vuelve instantáneamente interactivo.

