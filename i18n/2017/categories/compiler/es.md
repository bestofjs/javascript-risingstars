Aquí hablaremos sobre lenguajes que compilan código JavaScript.

Puede que necesites un compilador en tu proceso de build por dos razones:

* Si quieres utilizar todas las funcionalidades de la última versión de JavaScript (ES7) manteniendo tu código compatible con la máxima variedad de navegadores. Esto ha ayudado al éxito de {babel}, del que dependen muchos proyectos.
* Si deseas incluir nuevas funcionalidades al lenguaje como "type checking"

Una de las cuestiones más populares que suele dividir a desarrolladores es: ¿tipado o no tipado?

JavaScript tiene tipado dinámico pero no estático. Muchos desarrolladores prefieren el fuerte tipado en su código, especialmente en proyectos grandes, para hacerlo más robusto y fácil de leer/entender.

Así que si eres de los que necesita tipado, los 2 principales contendientes son: {typescript} de Microsoft y {flow} de Facebook (usado en sus principales proyectos: {react}, {react-native}, {jest}...).

Echa un vistazo a este artículo de [James Kyle](https://github.com/thejameskyle) para conocer sus diferencias: [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51).
