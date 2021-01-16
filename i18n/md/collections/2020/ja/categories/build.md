---
id: build  
language: ja
---

2020年はビルドツールの当たり年で、多くの新しいトレンドが産まれました。

{snowpack}と{vite}はES modulesの将来に賭けたアプローチです。
開発中のコードはバンドルせず、プロダクションコードのビルド時のみバンドルする方針で、非常に高速なフィードバックループを持っています。

{swc}と{esbuild}は、それぞれRustとGoで書かれており、TypeScriptをサポートしていて、そして信じられないほどの高速で動作します。

{webpack}は設定が複雑すぎると言われることが多く、よりシンプルに書ける{parcel}や{rollup}が成熟してきました。
とはいえビルドツールの中心はいまだWebpackであることは変わらず、そしてWebpackの新たなキャッシングレイヤはビルドのパフォーマンスを大幅に改善します。

Monorepoがメインストリームになりつつあります。
YarnとLernaが広く使われ、そしてnpm 7も参加してきました。

個人的に2021年の去就を注目しているのは{rome}、Toast](https://toast.dev/)、[Turborepo](https://turborepo.com/)です。
