2016 年、以下のようなサービスの登場により開発、デプロイがとても簡単になりました。

* [Now](https://zeit.co/now)
* [Webtask.io](https://webtask.io/)
* [Stdlib](https://stdlib.com/)

また、 [Glitch](https://glitch.com/) のようなサービスによりブラウザから数回クリックするだけで誰でも簡単にコードを書いて共有することができるようになり、 node.js の世界へ足を踏み入れる障壁を下げました。

さて、アプリケーションを実装するにあたってどのフレームワークを利用しましょうか。

#### {express}

Node.js で Web アプリケーションを構築する場合、web サーバーのデファクトとなっている {express} は一番に選択肢に上がるのではないでしょうか。

{express} は、必要最低限のコアモジュールでできており利用者は middleware と呼ばれるパッケージを追加して機能を拡張していきます。
これは node.js の開発者には馴染みのスタイルですね。

#### {koa}

{koa} の設計思想は {express} によく似ていますが、 ES6 で書くことが出来るためいわゆる _[ Callback Hell](https://www.sitepoint.com/saved-from-callback-hell/)_ の呪縛から逃れることができます。

#### {feathers}

{feathers} はサービス指向アーキテクチャに柔軟に対応でき、 microservices なシステムの構築に適しています。

#### {nodal}

{nodal} フレームワークは PostgreSQL に接続されたステートレスで分散したサービスをターゲットにしています。

#### {keystone}

{keystone} は MongoDB のコンテンツを管理する画面を設けるのに優れたツールの一つです。その管理画面は DB のモデルから自動で作られ、 CRUD の一通りの処理と便利なフィルターを備えています。

#### {sails}

{sails} はフル MVC のフレームワークで、 **S**ails という名前からも分かる通り Ruby on Rails ライクなフレームワークです。 その歴史は長く、 各種 SQL / no-SQL なデータベースと接続することができます。

#### {loopback}

{loopback} は成熟したフレームワークのひとつで、トークンを用いた認証や様々なデータベースに対応いるなど多くの機能が実装されています。

**API explorer** は非常に強力な機能で、すべての API end-points を直感的に確認することができ、どんなユーザーのトークンも確認することができます。API の実装に非常に適したフレームワークです。
