---
id: build  
language: zh
---

对于构建工具而言，2020 年也是重大的一年，我们发现了很多新的趋势。

在未来 ES 模块的首选方法上，{snowpack} 和 {vite} 展开角逐。他们在不会构建开发中代码，而是仅构建生产环境的代码（除非浏览器的支持提高），并有着极快的反馈循环。

{swc} 和 {esbuild} 分别使用 Rust 和 Go 编写，因此有着难以置信的性能，它们都支持 Typescript。

{webpack} 经常被认为过于复杂，而其更简单的替代工具，比如 {parcel} 和 {rollup} 已经非常成熟。Webpack 仍然是实际使用最多的构建工具，它新的缓存层可以很显著的提高构建效率。

Monorepos 正在成为主流：Yarn 和 Lerna 的使用非常广泛，npm 7 也参与其中。

就我个人而言，在 2021 年将关注：{rome}，[Toast](https://toast.dev)，[Turborepo](https://turborepo.com)