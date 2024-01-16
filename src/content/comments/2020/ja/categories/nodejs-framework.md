---
id: nodejs-framework  
language: ja
---

Node.jsフレームワークには大きく2つの種類が存在します。

ひとつは{nextjs}や{nuxt}のようなフルスタックフレームワークで、ReactやVue.jsなどをサーバサイドに持ってくるアプリケーション構築方法については賛否両論があります。

もうひとつは昨年のチャンピオン{nest}や{fastify}などが属する、サーバ側のみで動作する古典的なフレームワークです。

この分野では2018年にトップだったNext.jsが再びチャンピオンに返り咲きました。
当初はReactをSSRするだけのソリューションとして名を上げましたが、今ではReactでフルスタックWebアプリケーションを構築するソリューションの筆頭になっています。

最新バージョンでは動的ページと静的ページの垣根を取り払う[Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)にも対応し、多くのユースケースで最適な選択肢になりつつあります。

フルスタックといえば、{blitz}や{redwood}は、それひとつだけで完全なWebアプリケーションを構築できるという最高の開発者体験を提供することを目的としたプロジェクトです。

それにしても浮沈の激しいJavaScriptの世界で、11年前に誕生した{express}がいまだに一定の地位を保っているのは興味深いですね。
