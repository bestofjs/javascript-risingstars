---
id: framework
language: zh
---

#### React

2023 年，React 在 JavaScript 生态系统中仍然保持着领先地位，这一趋势从 2021 年和 2022 年延续至今，尽管偶尔会受到批评和争议。

为了庆祝其成立 10 周年，React 还推出了一部纪录片 ( [点这里观看](https://www.youtube.com/watch?v=8pDqJVdNa44))；这充分说明了它的受欢迎程度！

然而，React 也并非没有质疑者。有些人认为它已经过时，这种观点在 [这篇文章](https://joshcollinsworth.com/blog/antiquated-react) 中得到了巧妙的探讨，文章还探讨了其他替代方案。另一方面，支持者则称赞 React 具有出色的适应性和创新能力。

一个争议点是缺少“信号”（signals），这是 Solid 或 Preact 等库使用的一种反应性处理机制，而 React 的支持者则喜欢它提供的数据流程的可预测性。

从 Parcel 的创建者 Devon Govett 发布的一条 [推文](https://twitter.com/devongovett/status/1629540226589663233) 中可以了解到关于信号的更多信息：

> 当状态更新不确定时，UI 作为状态的函数的简单性就会丧失。

要了解更多关于信号的信息，请阅读 [信号的演变](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob), 这是对今年热门词汇之一的全面探讨。

#### htmx

htmx 是一个采用不同方法为 HTML 页面提供交互性的库：开发人员不是编写多行 JavaScript 代码，而是使用特定的属性来增强 HTML，从而实现实时交互和动态更新。

它因文件尺寸小、与现有服务器端框架的无缝集成而受到称赞，因为它是“通过电线发送 HTML”趋势的一部分：要求服务器发送 HTML 部分块，而不是在客户端处理 JSON。

在“标记库”空间中，Alpine.js 是一个受欢迎的解决方案（今年排名第 13 位）。

#### Svelte

Svelte 的受欢迎程度持续增长，排名第三。它常被视为 React 的现代替代品。
即将推出的 Svelte 5 是该项目历史上“最受期待的版本”，它引入了 [runes](https://svelte.dev/blog/runes) 来解决处理状态反应性时的一些“痛点”。Rich Harris 制作的 [This short video](https://www.youtube.com/watch?v=RVnxF3j3N8U) 很好地解释了 rune 解决的问题。

今年的一个故事与 Svelte 有关，并引发了很多争论 (例如 [Hacker News](https://news.ycombinator.com/item?id=35892250))：Svelte 团队选择使用带有 JSDoc 注释的 JavaScript 而不是 TypeScript，以避免 TypeScript 带来的额外复杂性和缺点，同时仍然提供类型安全的好处。

#### 其他框架更新

- [Million v3](https://million.dev/blog/million-3) 是一个轻量级库，可让“React 组件以纯 JavaScript 的速度运行”。
- [Angular 17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b) 在性能、刷新文档和新品牌（包括徽标颜色）方面有重大改进
- [Qwik reached v1](https://www.builder.io/blog/qwik-v1) 4 月发布，这个构建“可恢复”应用程序的框架最初会发送零 JavaScript（JS），同时提供立即变为交互式的 HTML。
