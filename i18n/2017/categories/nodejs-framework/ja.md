JavaScript は web アプリケーションのフロントエンドを実装するためだけの言語ではなく、バックエンドでも利用が広がっています。
node.js コミュニティで影響力のあるメンバーのひとり、[Mikeal Rogers](https://github.com/mikeal) は [Node.js は一年以内に Java を凌駕する](https://thenewstack.io/open-source-profile-mikeal-rogers-node-js/) と予言しています。

しかし、長い時間を経てデファクトスタンダードが確立された他の言語（Ruby の Ruby on Rails、Python の Django、PHP の Laravel）とは異なり、node.js にはスタンダードや推奨されるアーキテクチャといったものがいまだに存在しません。

node.js の歴史を鑑みても、{express} が唯一支持されている node.js フレームワークというわけではありませんが、{feathers}, {keystone} や {nest} などのフレームワークや CMS の基幹として相変わらず広く利用されています。

Express のミニマリストなアプローチは、昨今トレンドのマイクロサービス（モノリスな単体アプリより、コンパクトなアプリケーションの疎結合な集積を推奨する考え方）に非常にフィットしているようです。

2017年は、３つの新たなプロジェクトが node.js フレームワークのトップ 10 にランクインしました。

* {hapi} にインスパイヤされた汎用 web フレームワークの {fastify} は、どちらかというと JSON ベースの高速な HTTP APIs の構築に向いています。
* {serverjs} は「箱からだしたらすぐ使える」的な体験を志向したフレームワークです。
* {nest} は、モジュールとコントローラからなる Angular 開発者にはとっつきやすいアーキテクチャを採用しています。また、TypeScript で実装されています。
