We are talking here about compilers (or "transpilers") that generate JavaScript from any language (or any variation of JavaScript).
They transform the code into "standard JavaScript" code that the browser (or node.js) can execute.

For example compilers let developers write code using the latest version of JavaScript (ES6) without having to worry about browser support.

#### {typescript}

The most trendy transpiler was {typescript}, it brings to web developers the static types used by Java and C# developers.
The fact that {angular-2} uses TypeScript added even more traction.
There are pros and cons about using types in JavaScript, read these 2 article to make your own point of view:
* [You Might Not Need TypeScript](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.1pn05vlis)
* [TypeScript: the missing introduction](https://toddmotto.com/typescript-the-missing-introduction)

#### {babel}

{babel}, along with Webpack, almost became a standard to compile ES6 code and templates used by libraries like React (JSX) in standard JavaScript. Initially created to compile ES6, it became a much more generic tool that can accomplish any code transformation, thanks to a system of plugins.

#### {flow}

{flow} is not a compiler, it's a static type checker used to "annotate" the JavaScript code.
Basically using Flow inside a code base means adding comments to describe expected types (read more about using Flow to write modules [here](http://javascriptplayground.com/blog/2017/01/npm-flowjs-javascript/)).

It's used inside the code source of Facebook projects. Since Facebook became one of the major actors of the open source world (with projects like {react}, {react-native}, {flux}, {immutable}, {jest}...), that means a lot.

#### {coffeescript}

During years {coffeescript} and its lean syntax, inspired by Python and Ruby syntax, was the most popular compiler but a lot of developers moved from CoffeeScript to ES6 with Babel in 2016.
