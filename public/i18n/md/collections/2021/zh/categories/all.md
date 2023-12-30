---
id: all
language: zh
---

### 前三甲

年度流行项目是 {zx}，一个由谷歌推出的全新的工具，可用于以 JavaScript 或 TypeScript 编写简单的命令行脚本。

基本上它可以让你在代码中嵌入任何 bash 表达式（`ls`, `cat`, `git`...等任何命令！），并 `await` 使用 [JavaScript 模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)的结果。

它引入了由几个流行的软件包提供的实用工具：

- [node-fetch](https://github.com/node-fetch/node-fetch) 与浏览器中 `fetch` 有着相同的 API， 可创建 HTTP 请求。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) 可处理文件系统操作。
- [globby](https://github.com/sindresorhus/globby) 以用户友好模式来匹配给定的文件名。

其次，{vite} 是一个使用 {esbuild} 编译器的，有着优秀性能的构建工具。出生时，它仅与 Vue.js 社区相连，但现在它为主流的UI框架都提供了支持：{react}、{svelte}、{lit}。

排在第三位的 {nextjs} 依旧保持了其在 React 世界中 “元框架” 的领先地位。

### Tauri

第五名，{tauri} 是一个使用 Web 技术构建桌面应用程序的解决方案。

与 {electron} 相比，它是用 Rust 编写的，而且它不在每一个应用程序中搭载 Node.js 运行时。1.0 测试版刚于 [5 月发布的](https://dev.to/tauri/announcing-tauri-beta-more-efficient-crossplatform-apps-with-better-features-1nbd)。

### 特选

它没有进入前十名，但 {astro} 是今年最值得注意的项目之一。Astro 是一个加载速度更快的建站工具，因为它使用较少的 JavaScript。

它的概念接近于静态网站生成（SSG），但关键的区别在于，Astro 可以让你在网页中引入被称为 “岛屿” 的动态互动部分。

在客户端渲染动态组件时可应用不同的策略：

- 当页面加载时
- 当页面空闲时，如果它是一个低优先级的组件（考虑跟踪。）
- 当组件可见时，使用游览器 [Intersection Observer API](https://devdocs.io/dom/intersection_observer_api)

最厉害的部分之一是 Astro 页面可以用任何框架编写的 HTML 和组件组合来构建。React、Vue.js 或 Svelte...