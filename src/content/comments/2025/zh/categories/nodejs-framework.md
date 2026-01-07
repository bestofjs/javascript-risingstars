---
id: nodejs-framework
language: zh
---

一个新项目赢得了后端/全栈类别！{motia}代表了后端工程中的范式转变，将传统上需要多个独立框架的功能统一到一个系统中。Motia不需要为API、后台任务、队列、工作流、流和AI代理使用不同的工具，而是为整个后端提供一个框架。

在核心层面，Motia使用一种称为[Steps](https://www.motia.dev/docs/concepts/steps)的原语，这是一种单一抽象，定义了代码如何运行、何时运行、在哪里运行以及做什么。每个Step都有一个配置（定义触发器、路径、计划）和一个处理器（您的业务逻辑）。更改Step类型，相同的模式适用于不同的用例：API端点、事件处理器或cron作业。

Steps可以用TypeScript或Python编写。它还通过Workbench提供内置的可观察性，Workbench是一个可视化控制面板，用于管理和调试运行，加上内置的状态管理和流功能。

接下来的四个项目与2024年相同，除了Hono和Astro互换了位置。

{payload}，去年排名第一，是无头CMS和Next.js管理面板之间的混合体。最大新闻是[Figma的收购](https://payloadcms.com/posts/blog/payload-is-joining-figma)，最终目标是缩小设计和代码之间的差距。

排名第3的是Next.js 16，引入了[缓存组件](https://nextjs.org/blog/next-16#cache-components)以使缓存更加明确和灵活。开发者可以创建包含从服务器流式传输的动态内容的静态页面框架。

排名第4的是{astro}，它继续作为一个多才多艺的框架闪耀，用于构建内容丰富的应用程序（比如您钟爱的JS Rising Stars！），具有出色的开发者体验并专注于性能。

排名第5的是{hono}，凭借其轻量级核心（可以在任何地方运行，如Node.js运行时、Cloudflare workers等）和丰富的处理器和中间件生态系统，已成为现代Web服务器的标准（即使{express}仍然是一个选择！）。阅读[Hono的故事](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/)。

元框架类别中最大的变化是[Tanstack Start](https://tanstack.com/start/latest)的崛起，如果您想在React之上构建全栈应用，它是Next.js的最佳替代品之一。