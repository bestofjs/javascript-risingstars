---
id: react
language: ja
---

2023年、React Server Componentsの登場によってReactは第三世代に入りました。

ReactコアチームはVercelとコラボし、初めての安定版である[Next.js 13.4 App Router](https://nextjs.org/blog/next-13-4)をリリースしました。
Vercelは多くのリソースに貢献し、エキサイティングなイノベーションを主導しています。
しかし、Reactコアチームとの特権的な関係と、実験的機能への早期アクセスへの姿勢が時折批判を受けることもあります。
2023年には、Reactの新機能は一番最初にNext.jsのドキュメントに記載されることが普通になりました。

コミュニティは[fetch()の独自拡張](https://nextjs.org/docs/app/api-reference/functions/fetch)など一部の設計思想を評価しておらず、こちらは[元に戻されました](https://twitter.com/leeerob/status/1733154383410684148)。
またApp Routerの安定性や開発サーバのパフォーマンスに関する批判意見なども頻繁に見受けられました。
いっぽうReact Server Componentsは、バンドルサイズの縮小や、コードを大幅にシンプルにできることなど、非常に多くの利点がアーリーアダプタによって高く評価されました。

Reactチームは、[実験的機能の実装と展開戦略についての立場を表明](https://react.dev/blog/2023/05/03/react-canaries)しました。
カナリアバージョンは破壊的変更が入ることがありますが、その変更はドキュメント化されるため、フレームワークはカナリアバージョンを採用してもかまいません。
Reactは[ドキュメントも大きく整備されました](https://github.com/reactwg/server-components/discussions/7)。
[useFormState](https://react.dev/reference/react-dom/hooks/useFormState)や[use server](https://react.dev/reference/react/use-server)といった最新のAPIも徹底してドキュメント化されています。

また[Server Actions](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action)が登場しました。
これは[Next.js14](https://nextjs.org/blog/next-14)で安定版となったReactの新たなコア機能で、フォームの変更と送信についてシームレスなRPCコールを可能にします。

Remixの哲学に倣い、Server Actionsは[プログレッシブエンハンスメント](https://react.dev/reference/react-dom/components/form#display-a-form-submission-error-without-javascript)を念頭に設計されています。

2024年にはエキサイティングなことに、多くのフレームワークがReact Server Componentsを取り入れる動きを示しています。

- Remixは[React Server Componentsをロードマップに追加](https://twitter.com/ryanflorence/status/1729274387671760936)しました。
- Expoはクロスプラットフォームの[React Server Componentsをサポートする計画](https://blog.expo.dev/expo-router-v3-beta-is-now-available-eab52baf1e3e)を発表しました。
- Redwoodは[React Server Componentsに全てを賭け](https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc)ています。
- Wakuは[React Server Componentsをサポートする](https://waku.gg/blog/introducing-waku)もっとも小規模なフレームワークです。
- Docusaurusは[ビルド時に静的なReact Server Componentsを出力する](https://github.com/facebook/docusaurus/issues/9089)予定です。

みんなが、[まもなく登場するであろう](https://twitter.com/acdlite/status/1719474730363662473)React19を心待ちにしています。
