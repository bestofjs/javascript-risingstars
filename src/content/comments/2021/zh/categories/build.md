---
id: build
language: zh
---

在 2021 年，早已存在的趋势更进一步。

对原生 ES 模块的接纳仍在继续。{vite} 已经被广泛采用（比 {snowpack} 更快），引领了一个新的工具生态系统（如 {vitest}，一个基于 ES 的现代测试框架）。ES 模块也在 Node.js 生态系统中逐渐被接纳，但这并不容易。TypeScript 甚至[在 Node.js 中推迟了对 ES 模块的支持](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#esm-nodejs)。

出于对性能的考虑，越来越多的前端工具开始用其他语言构建的（见[awesome-js-tooling-not-in-js](https://github.com/RobinCsl/awesome-js-tooling-not-in-js)）。

Lee Robinson 写道，[Rust 是 JavaScript 基础设施的未来](https://leerob.io/blog/rust)。Rust 特别有趣，因为它既有很好的性能，又与 JavaScript 有互操作性。[NAPI-RS](https://napi.rs/) 允许 JavaScript 和 Rust 在没有任何序列化成本的情况下相互通信。Next.js 正[押注 SWC](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler)，这是一个可扩展的 Rust 编译器，允许他们将最流行的 Babel 插件移植到 Rust。

{parcel}2 已经[发布了一个新的 Rust 编译器](https://parceljs.org/blog/v2/)。{rome} 工具链也[正在用 Rust 重写](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust)，但其创始人之一 [Jamie Kyle 刚悄无声息地离开了公司](https://twitter.com/buildsghost/status/1471523960479121408)。

Rust 显然是领先的非 JS 语言，但它并不是唯一提供出色性能的语言。[Bun](http://bun.sh/) 是用 Zig 写的。{turborepo} 和 {esbuild} 是用 Go 写的。值得注意的是，[Evan Wallace 离开了Figma](https://twitter.com/evanwallace/status/1475685056454836229)：这可能让他有更多的时间来研究 esbuild。

在 monorepo 领域，[Lerna](https://github.com/lerna/lerna) 仍然被广泛使用，但维护得不是很好。[Nx](https://nx.dev/)，一个有助于大幅减少构建时间的单引擎工具，一直在[快速增长](https://twitter.com/victorsavkin/status/1476618225551036427)。其较新的竞争者 {turborepo} 在[被 Vercel 收购](https://vercel.com/blog/vercel-acquires-turborepo)后受益于巨大的营销。