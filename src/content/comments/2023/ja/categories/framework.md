---
id: framework
language: ja
---

#### React


批判や論争がしばしば巻き起こるにも関わらず、Reactは2021年以降JavaScriptエコシステムのトップをひた走っています。
そして2023年もフロントエンドフレームワークのトップに立ちました。

Reactは10周年を記念した[ドキュメンタリー](https://www.youtube.com/watch?v=8pDqJVdNa44)を公開しました。
Reactがいかにして評価を勝ち得てきたが語られています。

しかし、Reactに批判的でない人もいないわけではありません。
Reactは古臭い過去の遺物と見る向きもあり、[Things you forgot (or never knew) because of React](https://joshcollinsworth.com/blog/antiquated-react)の記事ではその理由と代替ソリューションについて詳しく調査がなされています。
一方で支持者たちはReactの優れた適応力と再発明能力を高く評価しています。

争点のひとつは"signals"の欠如です。
これは{solid}や{preact}などで採用されている状態管理メカニズムです。
いっぽうReactの愛好者たちは、Reactのデータフローの予測可能性を支持しています。

Percelの開発者であるDevon Govettは、signalsについて[以下のようにツイートしています](https://twitter.com/devongovett/status/1629540226589663233)。

> The simplicity of UI as a function of state is lost when updates flow unpredictably.
> (予期せぬ流れで更新が行われると、UIのシンプルさが失われます。)

signalsについてさらに知りたい場合は、signalsを歴史的にまとめた[The Evolution of Signals](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)を参照ください。

#### htmx


第二位となった{htmx}は、HTMLにインタラクティブを導入するために異なるアプローチをとったライブラリです。
JavaScriptを記述するのではなく、HTMLに属性を記述することで、リアルタイムの対話性や動的な更新が可能になります。

ファイルサイズが小さいこと、また既存のサーバ側フレームワークとシームレスに結合できることが高く評価されています。
htmxは`send HTML over the wire`と呼ばれるトレンドに従っており、クライアントはサーバから送られてきたJSONを処理するのではなく、HTMLをそのまま持ってくるという仕組みになっています。

同じような"属性ライブラリ"分野の有名どころとしては、{alpinejs}が13位に入っています。

#### Svelte

3位には、人気が高まり続けているSvelteが入りました。
ポストReactとしても名をよく上げられます。

「プロジェクト史上最も期待されているリリース」と自称しているSvelte 5では、リアクティビティに関する問題点を解消する[runes](https://svelte.dev/blog/runes)が導入されます。
Rich Harrisによる[この動画](https://www.youtube.com/watch?v=RVnxF3j3N8U)が、runesによって解決される事象について解説しています。

2023年に起きた焦点の幾つかはSvelteであり、たとえば[Hacker News](https://news.ycombinator.com/item?id=35892250)などが多くの議論を引き起こしました。
SvelteチームはTypeScriptを辞め、アノテーション付きJavaScriptを使うことを選択したのです。
タイプセーフの利点は保ちつつ、TypeScriptがもたらす複雑さや欠点を回避することを選びました。

#### その他注目プロジェクト

- [Million v3](https://million.dev/blog/million-3)は、ピュアJavaScript並の速度でReactコンポーネントを動かすことを可能にする軽量ライブラリです。

- [Angular 17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)では、大幅なパフォーマンス向上、ドキュメントのリニューアル、ロゴの刷新などが行われました。

- [Qwik](https://www.builder.io/blog/qwik-v1)はバージョン1に達しました。
最初はJavaScriptを含まないただのHTMLを高速に返しながらも、即座にインタラクティブな操作が可能になるフレームワークです
