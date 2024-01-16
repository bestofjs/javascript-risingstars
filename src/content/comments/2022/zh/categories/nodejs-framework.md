---
id: nodejs-framework
language: zh
---

前端和后端框架之间的界限有点模糊，因为与 SPA 方式相比，现在有一种明显的趋势是在服务端做更多的事情（包括渲染和路由），而后端只负责API。所以本节包括全栈框架、元框架和后端框架。

#### Next.js

与去年一样，{nextjs} 在排名中领先，其第 13 版带来了较大的功能，包括 React Server 组件以及新文件系统结构，使用 `app` 文件夹让开发者将与他们的功能相关的代码都放在一起，并以强大的方式处理嵌套路由。

#### tRPC

最大的变化是 {trpc} 的崛起，位居第二。
抛开 REST 与 GraphQL 不谈：还有为 {trpc} 提供动力的 [JSON RPC 2.0协议](https://en.wikipedia.org/wiki/JSON-RPC)。
它的特点是可以从客户端导入服务器中定义的类型，以提供 “端到端类型安全”。

值得一提的是 {t3-stack} 项目，它将 tRPC、Next.js 和 {tailwind-css} 结合在了一个流行的模板中（位于总排名第16）。

#### Astro

在第三的 {astro} 在2021年作为一个静态网站生成器崛起，并使部分 hydration 的概念流行起来。

Astro 团队对创造流畅的开发者体验的一丝不苟，在 [Astro 1.0 的发布](https://astro.build/blog/astro-1/)中得到强调。

新的 SSR 支持与任何前端工具（如 React 和 SCSS）的“烘烤”整合，使 web 应用开发感觉太干脆了

#### Remix

第四，{remix} 保持快速增长。它于 2021 年开源，仅仅一年后就被 [Shopify 收购](https://remix.run/blog/remixing-shopify)。

在博文 [The Web Next Transition](https://www.epicweb.dev/the-webs-next-transition) 中，Kent C. Dodds 很好地解释了 Remix 与众不同的模式。

Remix 不依赖于静态生成的页面，而是利用分布式计算和本地浏览器功能，在浏览器中提供出色的性能和惊人的开发者体验。
