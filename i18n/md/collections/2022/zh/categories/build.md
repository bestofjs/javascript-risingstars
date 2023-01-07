---
id: build
language: zh
---

今年，Vite 继续保持其发展势头，成为最流行的前端工具之一。其先驱 [Snowpack](https://www.snowpack.dev/) 已不再维护，并推荐使用 Vite。它的发展并不限于 Vue 生态系统：Vite 也被用于[SvelteKit](https://kit.svelte.dev/)、[Storybook](https://storybook.js.org/blog/first-class-vite-support-in-storybook/)、[Vitest](https://vitest.dev/)，甚至作为[Create-React-App](https://create-react-app.dev/)的现代替代品。

我们也看到了 [Nx](https://nx.dev/) 和 [Turborepo](https://turbo.build/repo) 等支持 monorepo 的构建工具的崛起。Nwrl（Nx 背后的公司）已经[接管了 Lerna 的维护](https://blog.nrwl.io/lerna-is-dead-long-live-lerna-61259f97dbd9)，并发布了 [Lerna 6](https://blog.nrwl.io/lerna-reborn-whats-new-in-v6-10aec6e9091c)，它默认启用了 Nx 的优化。

尽管 [Babel](https://babeljs.io/) 仍然很流行，但 [swc](https://swc.rs/) 和 [esbuild](https://esbuild.github.io/) 已被许多项目和元框架广泛采用。这些新的工具可以大大提升构建和转译的性能。[swc](https://swc.rs/) 是一个更加模块化的选择，因为它提供了一个[插件系统](https://swc.rs/docs/plugin/ecmascript/getting-started)。

Vercel 发布了 [Turbopack](https://turbo.build/pack)(alpha)，这是一个由 Rust 驱动的非常快的全新构建工具，[Tobias Koppers](https://twitter.com/wSokra)（Webpack 的原始创造者）正在研究它。

[Rome](https://rome.tools/) 工具链已经发布了它的[第一个稳定版本](https://rome.tools/blog/2022/11/08/rome-10/)，包含一个 linter 和一个具有有趣属性的 formatter。不过开发者采用率很低，但今年可能会增加。

Rust 中的许多前端工具在今年应该都造就了不少新闻：
- [Lightning CSS](https://lightningcss.dev/)（以前是 [Parcel CSS](https://parceljs.org/blog/parcel-css/)）：一个更快的 CSS 工具链
- [Speedy TypeScript 类型检查器](https://github.com/dudykr/stc)：一个比 tsc 更快的替代品
- [mdxjs-rs](https://github.com/wooorm/mdxjs-rs): 一个更快的 [MDX](https://mdxjs.com/) 实现
