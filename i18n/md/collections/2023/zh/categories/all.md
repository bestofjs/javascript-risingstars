---
id: all
language: zh
---

## 年度最佳项目：shadcn/ui 🏆

年度最火的项目是 shadcn/ui，这是一个用 React 编写的 UI 组件集合，可通过 TailwindCSS 进行自定义样式的设置。

该项目建立在 {radix} 之上，这是一组提供诸如可访问性和键盘交互等基本功能的无头组件，shadcn/ui 与其他流行库（如 MUI、ChakraUI、React Spectrum）的区别在于它不是可下载的 NPM 包。相反，你可以通过终端命令将 shadcn/ui 组件集成到你的代码库中，该命令会安装底层依赖项并将组件源代码直接复制到你的代码库中，以便你进一步修改。

该项目的成功与 {tailwind-css} 的广泛流行（总体排名第 20 位）、对 React Server Components 的兼容性以及出色的文档密切相关。

似乎所有新的出众的 React 项目都采用了 shadcn/ui。甚至 Kent C. Dodds 也选择了它来开发 cutting-edge [Epic Stack](https://www.epicweb.dev/epic-stack).

另一个涉及人工智能的例子：用户只需要提供 UI 的功能和外观等的描述，[v0.dev](https://v0.dev) 就可以生成由 shadcn/ui 组件组成的 JSX 代码。真神奇！

最后但同样重要的是，[Best of JS](https://bestofjs.org) 在我将其从单页应用程序（SPA）转换为 Next.js 后也使用了它们。

它也催生了其他项目：

- [shad-cn/svelte](https://shadcn-svelte.com/) 提供 Svelte 的组件。
- [Draft UI](https://github.com/IHIutch/draft-ui) 建立在 [React Aria](https://react-spectrum.adobe.com/react-aria/) 而不是 Radix 之上。

对于深入分析，请参阅 [The anatomy of shadcn/ui](https://manupa.dev/blog/anatomy-of-shadcn-ui) 一文。

## 排名第二：Bun

Bun，2022 年的冠军，仍然保持着巨大的势头。

它旨在成为一个快速、全能的工具包，用于运行、构建、测试和调试 JavaScript 和 TypeScript 应用程序。

[version 1](https://bun.sh/blog/bun-v1.0) 于 9 月正式发布（图表中的峰值！），它声称已经 “可用于生产”。

它的文档提供了使用 Bun API 和常见任务（如文件操作和处理数据库交互）的出色方案，以帮助你快速入门。

Bun 年底时发表了一份 [强有力的声明](https://twitter.com/bunjavascript/status/1732945030007099510) :

> 我们 2024 年的目标是
> 将默认的后端 JavaScript 运行时从 Node.js 切换为 Bun

它对大多数 Node.js 生态系统（包括对旧的 CommonJS 通过 `require` 导入的支持）的兼容，以及对主要全栈框架（Next.js、Nuxt、Astro...）的支持，使其成为可能！
