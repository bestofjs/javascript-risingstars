---
id: conclusion
language: zh
---

为了构建现代网站和应用程序，我们似乎已经进入了元框架的时代。Next.js、Nuxt、SvelteKit......以及前景广阔的新秀 {remix}。

Famous members of the JavaScript community joined tech companies to work on these solutions:
许多 JavaScript 社区的知名成员加入了科技公司，从事这些解决方案的工作。

- Kent C. Dodds 加入了 Remix 团队，并高度评价说 Remix 使他"既能创建令人惊奇的用户体验，又能快乐编程"。

- 似乎 Vercel 雇佣了剩余所有人：作为 {svelte} 创建者的 Rich Harris，来自 React 核心团队的 Sebastian Markbåge 以及可管理 monorepos 的开源解决方案（{turborepo}）创始人 Jared Palmer......它看起来像一个梦之队!

关于工具，对速度的需求导致了对 Rust 和 Go 等语言的转变，而不是 JavaScript。

Lee Robinson 放出豪言：[Rust 是 JavaScript 基础设施的未来](https://leerob.io/blog/rust)，并且我们也曾多次提到 Rust 语言的崛起：

- {tauri} 由 Rust 构建
- {rome} 项目已完成[从 JavaScript 到 Rust](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust) 的转变
- Next.js 的最新版本（12）引入用Rust编写的 {swc} 编译器。

SWC 也被 {deno} 所使用，该服务器端运行时是 2020 年的冠军。并且我们想说的是，[Deno 仍然是一个新事物](https://blog.bitsrc.io/is-deno-still-a-thing-a-look-at-the-status-of-the-node-killer-884d47981d09)! 它不断得到增强，[Deno 部署文档](https://deno.com/deploy/docs)也已经公开：它是一个构建和部署无服务器功能的解决方案，其在 “边缘” 运行，距离用户更近。

谈到无服务器功能，边缘计算也是 2021 年的一个重要主题。我们有 [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions)、[CloudFlare Workers](https://workers.cloudflare.com/) 或 [Netlify Edge](https://www.netlify.com/products/edge/edge-handlers/) 等解决方案，在靠近用户的地方运行后端代码。像 Next.js 或 Remix 这样的元框架利用了边缘计算的优势，使 React 应用程序中后端代码的整合变得轻而易举。

我们将在 2022 年进入 JavaScript 全栈应用的黄金时代吗？
