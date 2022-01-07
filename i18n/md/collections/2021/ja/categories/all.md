---
id: all
language: ja
---

### トップ3

2021年、最もトレンディだったプロジェクトは、Googleによる全く新しいツールです。
JavaScriptやTypeScriptでシンプルなコマンドラインスクリプトを書くことができる{zx}です。

基本的な使い方としては、コードにbashコマンド(`ls`・`cat`・`git`など…なんでも！)を埋め込むことができ、さらにそれを[テンプレートリテラル](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)で`await`することもできます。

また、有名なパッケージも幾つか含まれています。

- [node-fetch](https://github.com/node-fetch/node-fetch) ブラウザのfetch APIと同じことができる。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) ファイルシステムの操作ができる。
- [globby](https://github.com/sindresorhus/globby) ユーザフレンドリーなパターンマッチングができるglob。

2位は{vite}です。
これは{esbuild}コンパイラを使用し、優れたパフォーマンスを示すビルドツールです。
当初はVue.js専用として誕生しましたが、現在では{react}・{svelte}・{lit}など主なフレームワークと連携が可能です。

3位の{nextjs}は、Reactをリードするメタフレームワークとしての地位を盤石なものにしています。


### Tauri

5位に入った{tauri}は、Web技術を用いてデスクトップアプリケーションを構築するソリューションです。

{electron}と比べると、Rustで書かれており、実行環境にNode.jsが必要ないのが特徴です。
5月にバージョン1.0の[ベータ版がリリースされました](https://dev.to/tauri/announcing-tauri-beta-more-efficient-crossplatform-apps-with-better-features-1nbd)。

### ピックアップ

トップ10には入っていませんが、{astro}は今年よく注目されたプロジェクトのひとつです。
より少ないJavaScriptで、より高速なローディングを実現するツールです。

コンセプトはSSGに近いですが、Astroでは"islands"と呼ばれる動的な部分をページに含めることができるところが特徴です。
また、クライアントサイドで動的コンポーネントをレンダリングする際に、複数の戦略を取ることができます。

- ページが読み込まれたとき
- アイドル状態のときに、優先順位の低いコンポーネントを読み込む
- [Intersection Observer API](https://devdocs.io/dom/intersection_observer_api)を使用した監視

そしてAstro最大の特徴は、React・Vue.js・Svelteなど、あらゆるフレームワークとの組み合わせが可能ということです。
