---
id: conclusion
language: zh
---

今年最重要的消息之一是 [Bun 被 Anthropic 收购](https://bun.com/blog/bun-joins-anthropic)，Anthropic 是开发 Claude Code 和 Claude 系列大语言模型的公司。

{bun} 这个一体化 JavaScript 运行时在 2022 年曾是我们的冠军。有趣的是，随着 LLM 的突然兴起，愿景从构建云产品（类似于 Deno 通过 [Deno Deploy](https://deno.com/deploy) 提供的）转向为 AI 代理提供支持。

> AI 编码工具正在快速变得非常强大，它们正在使用 Bun 的单文件可执行文件来分发可以在任何地方运行的 CLI 和代理。

另一则对 JS 社区重要的新闻是：[Lee Robinson](https://x.com/leerob)，多年来一直是 Next.js 的代表人物（也是我们在 2020 年的客座作家！）加入了 Cursor，为开发者提供关于 AI 的教育内容；请参见他的 [学习课程](https://www.cursor.com/learn/)，对初学者来说非常出色。

说到开源社区中的熟悉面孔，Anthony Fu（{vite}、{vitest} 以及众多项目！）、Daniel Roe 和 Sébastien Chopin（{nuxt}）加入了 Vercel，考虑到该公司以专注于 Next.js 和 React 而闻名，这似乎是框架多样性的好兆头。

[Remix 3](https://github.com/remix-run/remix/blob/main/README.md#welcome-to-remix-3) 的发布是一个大胆的举措，因为 Remix 的创建者（也是 React Router 的创建者）决定放弃 React，更加专注于 Web 平台。

这并不意味着 Remix 用户会失去他们最喜欢的框架，Remix 2 已经演变为 React Router 框架。

一篇关于 [React 和 Remix 选择不同未来](https://laconicwit.com/react-and-remix-choose-different-futures/) 的有趣内部文章。

> React 正沿着稳定性的道路前进，即使这意味着牺牲复杂性，而 Remix 则将简洁性作为其主要目标。

Remix 3 的正式发布无疑将是 2026 年的亮点。

说到 React，指令模式在今年引起了一些争议。指令模式早在 React 诞生之前很久就以 `use strict` 的形式出现，而最近这个话题再次变得热门。

- React 服务器组件 (RSC) 引入了 `use client` 来告诉编译器某个组件仅在客户端运行。
- `use server` 将函数暴露为 HTTP 端点，称为服务器操作
- `use cache`，由 Next.js 16 引入，在页面、组件或函数级别设置缓存
- 全新的 [Workflow](https://useworkflow.dev/) 项目（两个月前创建）将指令提升到了一个新的水平，使用 `use workflow` 和 `use step` 对基础设施层产生影响，允许创建可以长时间运行的强大异步工作流。

这些指令依赖于构建时约定，而不是显式的运行时契约，引发了关于这门已有 30 年历史的语言未来的有趣讨论！
阅读 Tanner Linsley（TanStack 背后的大神！）的文章 [Directives and the Platform Boundary](https://tanstack.com/blog/directives-and-the-platform-boundary#when-directives-look-like-the-platform-developers-treat-them-like-the-platform)

2025 年并非全是阳光和创新。我们已经提到了年末发现的 React2Shell 漏洞，但整个 npm 生态系统都受到了 ["Shai-Hulud" 供应链攻击](https://socket.dev/blog/ongoing-supply-chain-attack-targets-crowdstrike-npm-packages) 的影响，这是一场复杂的活动，损害了数千个 npm 包和 GitHub 仓库。这次攻击凸显了我们依赖项生态系统的脆弱性，以及对更好的安全实践、依赖项审计和供应链保护的迫切需求。

2026 年会有什么期待？掌握代理工作流程似乎将是开发人员必备的技能，同时我们也不想完全将控制权交给 AI，而牺牲代码质量和清洁度。

找到合适的平衡将是关键！