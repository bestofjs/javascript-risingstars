---
id: all
language: zh
---

#### 年度总冠军: Bun 🏆

今年最流行的项目是 {bun}：一个专注性能与开发者体验的全新 JavaScript 运行时。它的流行程度伴随着在今年夏天发布的第一个 Beta 版而爆炸性增长：仅一个月内，就在 GitHub 上获得了超过两万颗星星。自从我们在 Best of JS 开始统计项目以来，我们还从未见过这样的爆炸。

那么，是什么让 Bun 与众不同呢？与两年前的总冠军 {deno} 一样，它也为 TypeScript 提供了一流的支持。

但 Bun 不仅仅是一个运行时。它也是：

- 一个包管理器 (类似 Yarn、 NPM、 PNPM)
- 一个构建工具 (类似 Webpack、 ESBuild、 Parcel)
- 一个测试运行器
- ... 以及很多其他东西！

所以 Bun 可以通过读取你的 package.json 来安装依赖项。Bun 还可以运行你的脚本。不管它做什么都比其他工具更快。

Bun 在 JavaScript 生态系统的许多方面都有新的尝试，其中的重点是性能。

它优先支持标准的 Web API，如 Fetch。它也支持许多 Node.js APIs，使其能与大多数 NPM 包兼容。

它可能还没到 “能用于生产” 的阶段（缺乏 Windows 支持），但它依旧是一个非常有前途的工具。与 Deno 相比，它的生态系统相当新，但它已经有一个名为 [Elysia](https://elysiajs.com/) 的网络框架，其声称是最快的 HTTP 框架。

Bun 最不可思议的是，它的创造者 [Jarred Sumner](https://twitter.com/jarredsumner) 用的是一种名为 [Zig](https://ziglang.org) 的低级语言从零开始实现了所有这些功能。

更多细节，请阅读[《彻底整顿 JavaScript 生态系统》](https://www.lunasec.io/docs/blog/bun-first-look/)一文。

#### Tauri

2021 年排名第五的 {tauri} 在 2022 年更受欢迎了，新增了 3 万颗星星。
这是一个由 Rust 编写的项目，利用 Web 技术创建跨平台的桌面应用程序。

它在 6 月份发布了[ 1.0 版](https://tauri.app/blog/2022/06/19/tauri-1-0)。

它创建之初就考虑到了安全和性能问题。与 {electron} 相比，它占用的空间很小，因为开发者必须指定应用程序所需的 API 和能力。

#### React 与 Next.js

在第三的 {react} 和第四的 {nextjs} 得到了类似的成绩，新增近两万颗星星。

10月发布的 [Next.js 13](https://nextjs.org/blog/next-13)，利用了 2020 年 React 17 推出的 [React Server 组件](https://www.plasmic.app/blog/how-react-server-components-work#what-are-react-server-components)。

React 的维护者之一 Andrew Clark 在[这篇推文](https://twitter.com/acdlite/status/1585029529361612801)中对它们在未来的发展做了大胆的陈述。

> Server 组件是 React 的未来，我们的目标是将这一架构推广到整个 React 生态系统，不管是什么框架。

#### Vite

第五名的 {vite} 是最流行的构建工具，用于构建基于 Web 技术的应用程序，同时提供令人惊喜的开发者体验。

它在今年有两个主要版本（[ 7 月的 v3](https://vitejs.dev/blog/announcing-vite3.html) 和 [12 月的 v4](https://vitejs.dev/blog/announcing-vite4.html)）。

它为越来越多的项目提供支持，包括框架 {sveltekit} 和 {qwik} 以及测试运行器 {vitest}。