---
id: framework
language: ja
---

2022年はReactが頂点に立ちました。
なお、Vue.jsはv2とv3のリポジトリに分かれているため、合算すれば近いくらいの力関係となります。


目新しいところとしては、{qwik}が2位に上昇しました。
QwikはReactに比較的似ており、テンプレートをJSXで書きますが、主な違いは、ブラウザに送られるJavaScriptの量を最小限にすることにフォーカスしているところです。

これは"ゼロベースJavaScript"と呼ばれるトレンドのひとつです。
最近のWebサイトやWebアプリケーションは、ブラウザのパフォーマンスに影響を与えるほどJavaScriptの重さが肥大化することがよくあります。
たとえサーバサイドレンダリングを使ったとしても、JavaScriptをロードし、解析し、実行するまでユーザは待たされます。

SSRでレンダリングされたページにインタラクティブ性を与える方法として、Qwikは[hydration](https://www.builder.io/blog/hydration-is-pure-overhead)ではなく、Resumabilityという技術を用いています。
状態をHTML内にシリアライズすることで、極めて高速な初動を実現します。

このプロジェクトはAngularJSの開発者である[Miško Hevery](https://twitter.com/mhevery)によって進められています。
AngularJSのスローガンが『HTMLをWebアプリのために強化する』であるのに対して、Qwikは『HTMLファーストのフレームワーク』であり、即ち古き良きHTMLの上にアプリを構築するという意図を持っています。
