---
id: build
language: zh
---

{bun} 也是一个 [bundler](https://bun.sh/docs/bundler) 所以我们今年将其纳入了“构建工具”类别。

[vite] 在两款产品中仍然是最受欢迎的通用 bundler ，为 Astro、Nuxt、Remix、SolidStart、SvelteKit 等元框架提供支持。

11 月发布的 [version 5](https://vitejs.dev/blog/announcing-vite5) 建立在[rollup]4 的基础上，带来了性能改进。

Evan You [宣布](https://twitter.com/youyuxi/status/1709943106215530867) 他正在研究 Rolldown，这是 Rollup 的 Rust 端口，将集成到 Vite 中。因此，Vite 的未来是光明的！

在第三位，[biome] 的崛起是今年的故事之一。它与 [Rome](https://bytes.dev/archives/175) 有关，这是一个雄心勃勃的项目，旨在统一工具（编译、 linting、格式化、捆绑、测试）。该项目背后的公司失败了，该项目今年停止了。

幸运的是，该项目被分叉并以 Biome 的名义重生。

11 月，Biome 赢得了 [Prettier Challenge](https://biomejs.dev/blog/biome-wins-prettier-challenge/)：创建“一个可以通过 Prettier95%以上测试的 Rust 驱动的代码格式化程序”。Prettier 是如此的标准，我们可以期待 2024 年 Biome 的更多采用。

说到 Rust，[oxc]和[rspack]是这个领域的新参与者，来自字节跳动团队。
rspack 提供了与 Webpack 的兼容性，同时提供了无与伦比的性能。自我们运行 Rising Stars 以来，这是第一次，看到 Webpack 没有进入排名感觉很奇怪，考虑到使用它的项目数量！
