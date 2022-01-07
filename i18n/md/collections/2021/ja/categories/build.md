---
id: build
language: ja
---

2021年は、既存のトレンドが強化された年でした。

ネイティブES modulesの採用が続き、{vite}は広く受け入れられました。
一方Node.jsエコシステムにおいても{vitest}のようなES modulesフレームワークが作られつつありますが、こちらは一筋縄ではいきません。
TypeScriptに至っては[ES modules対応を延期した](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#esm-nodejs)ほどです。

JavaScript以外の言語で作られたフロントエンドツールが[増えつつあります](https://github.com/RobinCsl/awesome-js-tooling-not-in-js)が、これは主にパフォーマンスの理由からです。

Lee Robinsonが[RustはJavaScriptインフラの未来だ](https://leerob.io/blog/rust)という記事を書いています。
Rustの興味深い点は、その素晴らしいパフォーマンスと、JavaScriptとの親和性の良さです。
[NAPI-RS](https://napi.rs/)はシリアライズ無しにJavaScriptとRust間の通信を行うことを可能とし、Next.jsは[SWCにその将来を賭けました](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler)。

{parcel}2は[Rustコンパイラをひっさげて登場](https://parceljs.org/blog/v2/)しました。
{rome}も[全面的にRustに移行する](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust)ということでしたが、創業者のひとりである[Jamie Kyleは何の情報もないまま会社を離れました](https://twitter.com/buildsghost/status/1471523960479121408)。

Rustは非JS言語の代表格ですが、決して唯一ではありません。
素晴らしいパフォーマンスを発揮する言語は他にもあり、[Bun](http://bun.sh/)はZigで書かれており、{turborepo}や{esbuild}はGo製です。
そういえば[Evan WallaceがFigmaを去った](https://twitter.com/buildsghost/status/1471523960479121408)のは、esbuildの開発に時間を割けるようになったからかもしれません。

monorepo分野では[Lerna](https://github.com/lerna/lerna)が最も使われていますが、既にあまり保守されていません。
次を狙って、ビルド時間を大幅に短縮できるモノレポツール [Nx](https://nx.dev/)が[急成長しています](https://twitter.com/victorsavkin/status/1476618225551036427)。
さらにライバルである{turborepo}が、[Vercelに買収された](https://vercel.com/blog/vercel-acquires-turborepo)直後から攻勢を仕掛けています。
