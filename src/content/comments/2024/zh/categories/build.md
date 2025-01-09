---
id: build
language: zh
---

2024 年是 JS 工具的又一个丰收年，我们正在努力创新和提高性能。许多项目已经成熟并获得动力，而其他超级令人兴奋的项目仍在开发中。

[Vite](https://vite.dev/) 今年再次成为大赢家，第二次将其 [State of JS awards](https://2024.stateofjs.com/en-US/awards/) 评为最被采用和喜爱的技术。同时具有高使用率和保留率的情况很少见，更不用说维护它了。我们热切期待看到新的 [void(0) 公司](https://voidzero.dev/) 明年将如何影响 Vite 生态系统！

值得一提的是，最成功的工具是让自己易于采用：

- [Rspack](https://rspack.dev/) 几乎是 webpack 的直接替代品，它开始受到关注，[被 Docusaurus 和 Nuxt 成功采用](https://rspack.dev/blog/announcing-1-1#ecosystem)。考虑到它的易用性和可以更快地构建的现有 webpack 项目的数量，它应该会在 2025 年爆炸式增长。
- [Bun](https://bun.sh/) 是一个多合一的 JS 工具链，由于它与 Node.js、npm 或 Jest 的兼容性，也旨在促进采用。它在 2024 年继续其正在进行的兼容性工作，特别是提供 [Windows 支持](https://bun.sh/blog/bun-v1.1)和[基于文本的锁定文件](https://bun.sh/blog/bun-lock-text-lockfile)。
- [Rolldown](https://github.com/rolldown/rolldown) 是一个快速的打包器，具有与 Rollup 兼容的 API 和 esbuild 比肩的功能。它仍在积极开发中，但进展迅速，最近发布了第一个 [v1.0 测试版](https://github.com/rolldown/rolldown/releases/tag/v1.0.0-beta.1)。最受期待的项目之一，将于 2025 年为 Vite 提供支持。
- [Turbopack](https://turbo.build/pack/docs) 是一个增量捆绑程序，最初专注于成为 Next.js 的实现细节，您可以使用简单的命令行标志 `--turbo` 来打开它。[Turbopack Dev](https://nextjs.org/blog/turbopack-for-development-stable) 被认为是稳定的，[Turbopack Prod](https://areweturboyet.com/) 正在积极开发中。Turbopack 的独立版本计划在未来推出。
- [Biome](https://biomejs.dev/) 是 Prettier（兼容性为 97%+）和 ESLint 的更快替代品，已被社区[广泛而积极](https://biomejs.dev/blog/biome-v1-9/#one-year-of-biome)地采用。

在 TypeScript 方面，也值得一提：

- TypeScript 5.5 发布了 [Isolated Declarations](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/#isolated-declarations)，解锁了改进的并行化构建
- [Node.js 现在默认支持 TypeScript](https://www.totaltypescript.com/typescript-is-coming-to-node-23)，并且可以直接运行 `.ts` 文件。它将在下一个 v23.6 版本中推出，应该在 v22 中向后移植。Bun 和 Deno 都已经得到了支持。
