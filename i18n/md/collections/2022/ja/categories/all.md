---
id: all
language: ja
---

#### 優勝: Bun 🏆

今年の総合優勝は、{bun}です！

パフォーマンスとDXにこだわった新しいJavaScriptランタイムである{bun}は、2022年夏のベータ版リリース直後から人気沸騰しました。
一か月で20000以上のスターを獲得しましたが、Best of JSがプロジェクトのトラッキングを始めて以来、これほどの爆発は見たことがありません。

しかしいったい、何がBunをこれほど特別に押し上げたのでしょうか？
Bunは、2年前の総合優勝である{deno}と同じくTypeScriptをナチュラルにサポートしています。

さらにBunはただのランタイムではなく、以下のような機能も持っています。

- パッケージマネージャ(Yarn、npm、pnpmのような)
- ビルドツール(Webpack、ESBuild、Parcelのような)
- テストランナー
- その他諸々

Bunはpackage.jsonから依存関係をインストールすることができます。
Bunはスクリプトを実行することができます。
そして、他のランタイムよりも高速に、それらを行うことができます。

Bunは、JavaScriptエコシステムにおいて、パフォーマンスに焦点を合わせた新たな試みです。

Fetchなどの標準的Web API、およびNode.js APIの多くをサポートしており、またほとんどのnpmパッケージとも互換しています。
まだプロダクションレベルにまでは達していないかもしれません(特にWindowsのサポートがない)が、非常に将来有望なツールです。
Denoに比べると歴史は浅いですが、早々とフレームワーク[Elysia](https://elysiajs.com/)が登場しており、最速のHTTPフレームワークであると主張しています。

Bunの最も驚くべきところは、作者の[Jarred Sumner](https://twitter.com/jarredsumner)が、全ての機能を[Zig](https://ziglang.org/)という低水準言語でゼロから実装したというところです。

これ以上詳しく知りたければ、[A Complete Overhaul of the JavaScript Ecosystem](https://www.lunasec.io/docs/blog/bun-first-look/)を読むとよいでしょう。

#### Tauri

2021年は5位だった{tauri}は、2022年には新たに3万人の星をみるひとを獲得し、人気を広げつつあります。
これはRust製のデスクトップアプリケーション作成ツールであり、Web技術を使って製作できることが特徴です。

2022年6月にはついに[バージョン1.0](https://tauri.app/blog/2022/06/19/tauri-1-0)に到達しました。

セキュリティとパフォーマンスに重点を置いて作られています。
競合の{electron}と比べると、使用するAPIや機能などを開発者が指定する必要があるかわりに、フットプリントが小さくて済みます。

#### React and Next.js


3位の{react}と4位の{nextjs}は同じくらいの数値であり、共に2万人を獲得しました。

2022年10月にリリースされた[Next.js 13.0](https://nextjs.org/blog/next-13)においては、React 17で導入された[React Server Components](https://www.plasmic.app/blog/how-react-server-components-work#what-are-react-server-components)がフル活用されています。

ReactのメンテナのひとりAndrew Clarkは、Server Componentsの将来について[こちら](https://twitter.com/acdlite/status/1585029529361612801)で大胆に語っています。

> Server ComponentsはReactの未来であり、我々の目標はこのアーキテクチャをReact全体に広げることである。


#### Vite


5位の{vite}は、最もトレンドなアプリケーションビルドツールであり、素晴らしい開発者体験を提供します。
2022年は[6月のv3](https://vitejs.dev/blog/announcing-vite3.html)、[12月のv4](https://vitejs.dev/blog/announcing-vite4.html)と2回のメジャーアップデートが行われました。

{sveltekit}や{qwik}といったフレームワーク、はたまたテストツール{vitest}など多くのプロジェクトと力を合わせています。
