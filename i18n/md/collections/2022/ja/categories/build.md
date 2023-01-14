---
id: build
language: ja
---

2022年もViteが勢いを保ち続け、最もポピュラーなフロントエンドツールのひとつになりました。
その前身であった[Snowpack](https://www.snowpack.dev/)は既にメンテナンスされておらず、公式にもViteの使用が推奨されています。
Viteの採用はVueエコシステムに留まるわけではありません。
[SvelteKit](https://kit.svelte.dev/)や[Storybook](https://storybook.js.org/blog/first-class-vite-support-in-storybook/)、[Vitest](https://vitest.dev/)をはじめ、[Create-React-App](https://create-react-app.dev/)の代替にすら使われます。

モノレポのためのビルドツールとして、[Nx](https://nx.dev/)や[Turborepo](https://turbo.build/repo)が台頭しつつあります。
Nxの開発元であるNwrlは[Lerna](https://blog.nrwl.io/lerna-is-dead-long-live-lerna-61259f97dbd9)の運営を引き継ぎ、Nxに最適化された[Lerna 6](https://blog.nrwl.io/lerna-reborn-whats-new-in-v6-10aec6e9091c)をリリースしました。

[Babel](https://babeljs.io/)は依然として人気を保っていますが、[swc](https://swc.rs/)や[esbuild](https://esbuild.github.io/)といったツールが多くの新しいプロジェクトやメタフレームワークに採用されつつあります。
これら新しいツールは、ビルドとトランスパイルの性能を大きく向上させることができます。
また[swc](https://swc.rs/)は[プラグインシステム](https://swc.rs/docs/plugin/ecmascript/getting-started)を提供しているため、よりモジュール化を進められます。

Vercelは、新しいバンドルツール、[Turbopack](https://turbo.build/pack)を発表しました。
これはWebpackの作者である[Tobias Koppers](https://twitter.com/wSokra)が取り組んでいる、Rust製の非常に高速なバンドルツールです。

[Rome](https://rome.tools/)は[初めての安定版をリリース](https://rome.tools/blog/2022/11/08/rome-10/)しました。
興味深いリンターとフォーマッターを持っており、今のところ採用は控えめですが今後増えていくことが期待されます。

2023年は、Rust製のフロントエンドツールがたくさんニュースになることでしょう。

- [Lightning CSS](https://lightningcss.dev/)：旧[Parcel CSS](https://parceljs.org/blog/parcel-css/)。高速なCSSツールチェイン。
- [Speedy TypeScript type checker](https://github.com/dudykr/stc)：tscのより高速な代替。
- [mdxjs-rs](https://github.com/wooorm/mdxjs-rs)：[MDX](https://mdxjs.com/)のより高速な実装。
