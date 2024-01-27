---
id: all
language: ja
---

#### 優勝: shadcn/ui 🏆

2023年、最もホットだったプロジェクトはshadcn/uiです。
これはTailwindを通してスタイルをカスタマイズすることができる、Reactで書かれたUIコンポーネントのコレクションです。

shadcn/uiは、アクセシビリティやキーボード操作などに対する一連のUIを提供するヘッドレスコンポーネントである{radix}上に構築されています。
shadcn/uiはNPMパッケージとしてダウンロードすることができないという点で、他の似たようなライブラリ(MUI・ChakraUI・React Spectrum等)と一線を画しています。
かわりにターミナルコマンドを実行することで、必要なコンポーネントだけを直接プロジェクトに組み込みます。
そしてコンポーネントをカスタマイズしたい場合は、自分のコードベースにあるコンポーネントのソースコードを直接編集します。

このプロジェクトが大成功した背景には、総合20位に入った{tailwind-css}の人気、React Server Componentsとの互換性、そして優れたドキュメントの存在があるでしょう。

現在、新進気鋭のReactプロジェクトはほとんどがshadcn/uiを採用しています。
またKent C. Doddsによって、[Epic Stack](https://www.epicweb.dev/epic-stack)にも選出されました。

他の例としてAIを挙げましょう。
[v0.dev](https://v0.dev/)はプロンプトから、shadcn/uiコンポーネントで構成されるJSXを生成します。素敵！

おっと大事なことを忘れていました。
[Best of JS](https://bestofjs.org/)は先日SPAからNext.jsに書き換えを行ったのですが、その後shadcn/uiを使っています。

shadcn/uiのアプローチは、既にほかのプロジェクトに影響を与え始めています。

- [shad-cn/svelte](https://shadcn-svelte.com/)はSvelte移植版です。
- [Draft UI](https://github.com/IHIutch/draft-ui)はRadixのかわりに[React Aria](https://react-spectrum.adobe.com/react-aria/)に構築された版です。

もっと詳しい分析については、[The anatomy of shadcn/ui](https://manupa.dev/blog/anatomy-of-shadcn-ui)を参照するとよいでしょう。

#### 準優勝: Bun


2022年の王者Bunは、今年もその勢いを保っています。

Bunは、JavaScriptおよびTypeScriptアプリケーションを実行、ビルド、テスト、デバッグするオールインワンツールキットになることを目指しています。

[正式バージョン1.0](https://bun.sh/blog/bun-v1.0)が9月にリリースされ(グラフのピークを見てください)、Bunはついにプロダクションレベルになったと主張しました。

ドキュメントでは、Bunを今すぐ始めるのに役立つAPIおよびファイル操作、データベース操作などの優れたレシピが公開されています。

2023年末には[非常に力強い声明](https://twitter.com/bunjavascript/status/1732945030007099510)を発表しました。

> We have one goal for 2024 Flip the default backend JavaScript runtime from Node.js to Bun
> ( 2024年のゴールは、デフォルトのJavaScriptランタイムをNode.jsからBunにすることだ。 )

`require`のような古き良きCommonJSを含むほとんどのNode.jsエコシステムとの互換性、そしてNext.js・Nuxt・Astroといった優れたフルスタックフレームワークの存在により、いずれはそれを実現してのけるかもしれません。
