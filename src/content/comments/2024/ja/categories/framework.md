---
id: framework
language: ja
---

2023年に2位だった **{htmx}** が、今年はフロントエンドフレームワークの頂点に立ちました。

htmxはHTML言語の拡張であるとみなすことができ(名前の由来もそこから来ています)、したがってフレームワークではなくライブラリだと考える人も多くいます。
といっても、その境界はあいまいです。
[why htmx is another framework](https://htmx.org/essays/is-htmx-another-javascript-framework/)を参照ください。

静的サイトにインタラクティブ性を持たせたい場合や、アプリケーションがサーバ駆動型である場合は、この方法が優れています。
なにしろ`hx-*`という属性のHTMLを書くだけで、JavaScriptを全く書かずにデータ取得などの機能を実装することができるのです。

実際にhtmxが動いているところを見てみたいですか？
この"Rising Stars"のサイトはAstroで構築されており、そしてスクロール時にカテゴリを遅延読み込みするなどの動作にhtmxを使用しています。

**{2}位** のReactは絶え間なく改革を繰り返しており、それが成功の要因になっています。
バージョン19のリリースには3年以上もかかりましたが、[Suspense APIの仕様変更を何度も繰り返し](https://tkdodo.eu/blog/react-19-and-suspense-a-drama-in-3-acts)て[12月にようやくリリースされました](https://react.dev/blog/2024/12/05/react-19)。
より詳しく知りたい場合は[React 19 Cheat Sheet](https://www.epicreact.dev/react-19-cheatsheet)を見てみるとよいでしょう。

新機能の中でも、Webコンポーネント…"Custom Elements"のサポートは素晴らしいニュースです。
Webコンポーネントといえば、8位にランクインしている{solid}の作者Ryan Carnatoが[Web Components Are Not the Future](https://dev.to/ryansolid/web-components-are-not-the-future-48bh)という記事を書いて物議を醸しました。
この投稿にはさらにLea Veraが[興味深い回答を返して](https://lea.verou.me/blog/2024/wcs-vs-frameworks/)おり、生産性の高いツールは何でも使おうと結論づけていました。

**{3}位** の **{svelte}** は、メジャーバージョン5がリリースされました。
目立った変更点は、リアクティブな状態管理を行うメカニズムruneの導入です。
Svelteは、[State of JS](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/)において最も高い評価を得ていることも特筆すべきでしょう。
