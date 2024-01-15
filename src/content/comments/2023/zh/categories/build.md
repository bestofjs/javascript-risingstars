---
id: build
language: zh
---

{bun} 也是一个 [bundler](https://bun.sh/docs/bundler) 所以我们今年将其纳入了 “构建工具” 类别。

第二名 {vite} 仍然是最受欢迎的通用 bundler ，为 Astro、Nuxt、Remix、SolidStart、SvelteKit 等元框架提供支持。

11 月发布的 [version 5](https://vitejs.dev/blog/announcing-vite5) 建立在 {rollup} 4 的基础上，带来了性能改进。

Evan You [宣布](https://twitter.com/youyuxi/status/1709943106215530867) 他正在研究 Rolldown，这是 Rollup 的 Rust 替代品，将集成到 Vite 中。因此，Vite 的未来一片光明！

第三名 {biome} 的崛起是今年的故事之一。它与 [Rome 衰落](https://bytes.dev/archives/175) 有关，这是一个雄心勃勃的项目，旨在统一工具（编译、 linting、格式化、打包、测试）。但这个项目背后的公司垮台了，该项目也随即停止。

不过幸运的是，该项目被 forked 并以 Biome 的名义重生。

11 月，Biome 赢得了 [Prettier Challenge](https://biomejs.dev/blog/biome-wins-prettier-challenge/)：创建 “一个可以通过 Prettier 95% 以上测试的 Rust 驱动的代码格式化程序” 。Prettier 都认可了，那我们可以期待 2024 年 Biome 的更多可能。

说到 Rust，{oxc} 和 {rspack} 是这个领域的新参与者，来自 ByteDance 团队。
{rspack} 提供了与 Webpack 的兼容性，同时提供了无与伦比的性能。自我们发布 Rising Stars 以来，这是第一次 Webpack 没有进入榜单，我们感觉很奇怪，因为毕竟用它的人这么多！
