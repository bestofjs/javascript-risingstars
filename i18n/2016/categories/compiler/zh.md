我们这里讨论的是把其他语言或者 JS 变体编译（Compiler）或转换成（Transpiler）标准 JS 代码的工具，这些工具生产出来的代码可以在浏览器或者 Node.js 环境中执行。

最常见的场景是，这类编译工具能够让开发者使用 ES6 语法编写代码，而不用担心浏览器支持情况。

#### {typescript}

最具潜力的编译工具可能是 {typescript} 了，它为 JS 带来了类似于 Java 和 C# 的静态类型，而 {angular} 完全使用 TypeScript 的事实让他看起来更诱人，当然关于在 JS 使用静态类型的讨论有很多，建议阅读下面这两篇文章来做出自己的决定：

* [你可能不需要 TypeScript](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.1pn05vlis)
* [TypeScript 入门手册](https://toddmotto.com/typescript-the-missing-introduction)

#### {babel}

{babel} + webpack 已经成了 ES6 代码转换、React 模板编译的标准工具组合，{babel} 最初是用来编译 ES6 的，但得益于他的插件系统，如今俨然已经演化成一个用途广泛，几乎能实现各种代码转换的工具。

#### {flow}

{flow} 并不是一个编译工具，它只是一个基于 JS 代码标记的静态类型检查工具，也就是说，使用 Flow 时需要在代码中添加各种注释来注明需要的数据类型，关于 Flow 的使用，可以阅读[这篇文章](http://javascriptplayground.com/blog/2017/01/npm-flowjs-javascript/)。

Flow 在很多 Facebook 项目的源代码中都有使用，而 Facebook 已经成为开源社区的重要玩家，开源了 {react}、{react-native}、{flux}、{immutable}、{jest} 等众多的项目，相信你明白这意味着什么。

#### {coffeescript}

{coffeescript} 的简洁语法大量借鉴了 Python 和 Ruby 的语言特性，过去几年曾经是最受欢迎的编译器，但 2016 年很多开发者从 CoffeeScript 转向了 ES6 + {babel} 组合。
