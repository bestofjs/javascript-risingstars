---
id: vue
language: ja
---

2020年のVueコミュニティ最大のニュースは、Vue3のリリースです。

Vue2に存在した幾つかの問題を解決するために、[Composition API](https://v3.vuejs.org/api/composition-api.html)という仕組みが導入されました。

- コンポーネント内の論理的な繋がりによってコードを整理することが難しかった。
- コンポーネントをまたいだコードの再利用が容易になる。 (Vue2のmixin、mixing factory、scoped slots等では不十分だった)
- TypeScriptサポートが改善された。

バージョン3で導入された変更については、[マイグレーションガイド](https://v3.vuejs.org/guide/migration/introduction.html)をチェックしてみてください。

2020年には新たなWeb構築ツール、{vite}が誕生しました。
ES modulesに対応し、コマンドラインからVueアプリケーションを構築する最速の方法です。
