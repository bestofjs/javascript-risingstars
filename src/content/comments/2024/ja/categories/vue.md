---
id: vue
language: ja
---

2024年はVueにとってよい一年でした。
コアチームによるVueのリリースサイクルが活発になり、マイナーリリースのたびにパフォーマンスは改善されつつあります。
たとえば[リアクティブシステム](https://github.com/vuejs/core/pull/10397)はV3.5で軽量の[alien-signals](https://github.com/stackblitz/alien-signals)を利用するよう書き直され、[メインブランチに統合](https://github.com/vuejs/core/pull/12349)されました。

エコシステムの成長の最も明らかな一面はUIライブラリに見られ、これらはいま盛況です。
もちろん、この理由の一端はTailwind CSSです。
規約ベースのCSS記述アプローチとクロスフレームワーク機能により、{shadcn-vue}や{Radix-Vue} (もうすぐ[Reka UI](https://reka-ui.com/)に変わる)などのUIライブラリを、Reactの同等品から容易に移植することができます。
また{Element-Plus}や{Naive-UI}などVueで生まれ育ったライブラリも、熱心なユーザと着実な成長に支えられています。

しかしながら、UIライブラリの中で最も評価を得られたものは[PrimeVue](https://primevue.org/)でした。
5.4kの☆を獲得してVueエコシステムの2位にランクインしました。
PrimeVueはTailwind CSSと統合することもできますが、Tailwind CSSが必須ではありません。
PrimeVueは今も継続的な開発が続けられており、さらにReactやAngularにも手を伸ばし、[Primefaces](https://www.primefaces.org/)エコシステムを成長させようとしています。

また、Nuxt・Slidev・VitePress・{Vue-Element-Admin}といったフレームワークも変わらず好調です。

{Slidev}はスライドを開発するための、極めて優れたインタラクティブな経験を提供しています。
2024年には[Twoslash](https://twoslash.netlify.app/)の改善やMagic Moveのサポートが行われました。

{VitePress}はVueで構築された静的サイトジェネレータであり、堅実なパフォーマンスと優れた開発者エクスペリエンスを提供します。
Vueエコシステム内外を問わずドキュメントWebサイトの定番として広く使われていますが、実はより幅広い用途に利用可能です。

1位は{Nuxt}で、Vueで最も使用されているメタフレームワークです。
2024年の作業は大部分がNuxt3で変更された部分をしっかり固めることと、v4以降へのメジャーバージョンアップへのスムーズな移行の準備でした。
しかしそんな中でも、Webフォントを最適化導入する[Nuxt Fonts](https://fonts.nuxt.com/)にサードパーティスクリプトを容易に読み込める[Nuxt Scripts](https://scripts.nuxt.com/)など新しいコアモジュールのリリースや、認証ソリューションとして開発中の[nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils)などが現れました。

ランキングにある全てのライブラリにおいて、開発者エクスペリエンスは最優先事項です。
翌年はついにVapor modeがやってきて、Suspenseがstableになり、Nextの次のメジャーバージョンがやってくると、Vue開発者にとって非常にエキサイティングな一年になるでしょう。
