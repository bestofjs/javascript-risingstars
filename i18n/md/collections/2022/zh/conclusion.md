---
id: conclusion
language: zh
---

2022年以混乱开局，两个非常受欢迎的软件包被其创建者故意破坏：[Faker.js 和 colors.js 被破坏](https://www.theregister.com/2022/01/10/npm_fakerjs_colorsjs/)。

当 {lerna} 这个流行的 mono-repos 工具被宣布为无人维护，巨大生态系统的脆弱性再次被证明... 直到 {nx} 背后的公司 Nrwl 宣布接管 Lerna 的管理权。

JavaScript 正在吞噬世界，你可能听说过 2009 年的这个预言：

> 任何可以用 JavaScript 编写的应用程序，最终都会用 JavaScript 编写。

...在 13年后的今天，我们可以添加上 **“或用 TypeScript 编写”** 这样一句话，因为 TypeScript 正在成为编写 JavaScript 的事实标准（{deno} 和 {bun} 的一流支持，Next.js 的默认设置，Vite 的开箱支持...）。

JavaScript 在代码库和工具中的地位伴始终随着一些问题，对开发者和终端用户来说都是如此：

- 在大型代码库中，构建时间失去控制
- JavaScript 的平均大小不断增加，导致性能下降

在2022年，我们看到了在堆栈的不同层次解决这两类问题的巨大创新。

工具的改进与这些解决方案有关：

- {bun}，今年的冠军采取了激烈的方法来加快安装和构建时间
- {rome} 现在是一个 linter 和一个 formatter，旨在成为管理用 JS/TS 编写的应用程序的唯一工具。
- 构建工具 {vite}

在浏览器的性能方面，不同的模式百家争鸣：

- 零基线 JavaScript 框架，几乎不向浏览器提供任何 JS（{qwik} 正在引领这一潮流）
- [部分 hydration](https://ajcwebdev.com/2021/11/22/what-is-partial-hydration-and-why-is-everyone-talking-about-it/)，为静态页面提供交互性的岛屿（{astro}）。
- React Server 组件（由 {nextjs} 13和 {gatsby} 实现），将更多的工作委托给服务器端。
- 由 {remix} 实现的[逐步增强的单页应用程序](https://www.epicweb.dev/the-webs-next-transition)架构在不影响任何动态行为的情况下，在浏览器中同时提供了很好的开发体验和性能

由于从静态 “页面” 到完全动态的 “应用程序” 的范围很大，所以没有简单方案能全部解决这些问题。

JavaScript 环境曾经非常分散：一边是多种浏览器，另一边是拥有自己的 CommonJS 模块系统和自己的 API 的 Node.js。

随着边缘计算的兴起，现在有一个明显的趋势，就是到处使用相同的标准化 API 子集（fetch、HTTP 请求和响应...）。

我们的特邀作家 Lee Robinson 在[《为什么我对 JavaScript 的未来持乐观态度》](https://leerob.substack.com/p/why-im-optimistic-about-javascripts)一文中对这种趋势做了很好的总结。

我们对他的结论也持乐观态度！

> 作为一个 web 开发者，这是一个多么不可思议的时代。
