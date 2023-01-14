---
id: conclusion
language: ja
---


2022年は、非常に人気のあったライブラリが作者自らによって壊されるという波瀾から始まりました。
[Faker.jsとcolors.jsのこと](https://www.theregister.com/2022/01/10/npm_fakerjs_colorsjs/)です。

巨大なエコシステムの脆弱性は、モノレポツールである{lerna}がもうメンテナンスしないと宣言したときに再び顕現しました。
このときは{nx}のバックにいるNrwlがLernaを引き継ぐことでなんとかなりましたが。

JavaScriptは世界を埋め尽くす。
2009年になされた、こんな予言を覚えている人もいるかもしれません。

> JavaScriptで書くことのできるアプリケーションは、いずれJavaScriptで書かれるようになる。

13年の時を経て、この予言には少しばかり追記が必要になるかもしれません。
『もしくはTypeScriptで。』
DenoでもBunでも、Nex.jsでもViteでも、TypeScriptがJavaScriptを書くためのデファクトスタンダードになりつつあるからです。

コードベースやツールにおいてJavaScriptは、開発者とエンドユーザの両方に対して障害になっています。

- 大規模なコードベースでは、ビルド時間が青天井になる。
- JavaScriptのサイズは肥大化し続けており、パフォーマンスの低下を招いている。

2022年には、これらの問題を解決するために様々なレイヤで幾つものイノベーションが生まれました。

- 今年のチャンピオンである{bun}は、インストールやビルドにかかる時間を減らすため思い切ったアプローチをとりました。
- ひとつのツールで全てを完結させるために{rome}は生まれました。
- ビルドツール{vite}。

ブラウザでのパフォーマンスについては、様々なアプローチが見られます。

- ブラウザでJSをほとんど動かさない、ゼロベースJavaScript。{qwik}
- 静的ページにインタラクティブ性をPartial Hydrationする。{astro}
- 処理をサーバ側で行うReact Server Components。{nextjs} 13・{gatsby}
- 妥協せずに優れたDXとパフォーマンスの両方を追求する[Progressively Enhanced Single Page Apps](https://www.epicweb.dev/the-webs-next-transition)アーキテクチャ。{remix}

静的な"ページ"から、完全に動的な"アプリ"まで、Webが担っている範囲はとても広いため、たったひとつで全てを解決する特効薬は存在しません。

かつてのJavaScriptは、一方では動きの異なる複数のブラウザ、もう片方では独自のモジュールシステムとAPIを持つNodeと、完全に分断されていました。
エッジコンピューティングの台頭により、標準化されたAPI(fetch・HTTP Request/Responseなど)をどこでも使いたいという強いトレンドが生まれつつあります。

ゲストライターのLee Robinsonが、[Why I'm Optimistic About JavaScript's Future.](https://leerob.substack.com/p/why-im-optimistic-about-javascripts)という記事において、これらのトレンドについて素晴らしいまとめをしてくれています。

そして我々も、その気持ちを共有しています。

> Web開発者であるということは、なんと素敵なことでしょう。

