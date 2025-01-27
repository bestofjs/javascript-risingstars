---
id: nodejs-framework
language: ja
---

1位の **{Payload}** は、あらゆるNext.jsアプリに直接導入できる多用途のオープンソースCMSです。
Next.js App Routerとの緊密な統合により、新しいアプリを作成することなく、既存のアプリ内に管理パネルを直接かつ簡単に追加することができます。

元々はMongoDBで開発されていましたが、{drizzle-orm}の導入により現在はPostgresとSQLiteをサポートしています。
データ構造とアクセスコントロールをより高いレベルで実現するために独自のORMを提供し、メディアファイルの一括アップロードなど強力な機能を備えています。
詳細については、[Payload 3](https://payloadcms.com/blog/payload-30-the-first-cms-that-installs-directly-into-any-nextjs-app)に関する発表を確認するとよいでしょう。

2位の **{nextjs}** は、最も人気あるフルスタックフレームワークの地位を継続しています。
[バージョン15](https://nextjs.org/blog/next-15)はreact19をサポートし、新しいCacheAPIの導入によりパフォーマンスが向上し、さらにビルドツールとしてTurbopackを導入したことで開発者エクスペリエンスも強化されました。

初登場で3位にランクインした **{Hono}** はWebサーバであり、15年の歴史を持つ{Express}の現代的なオルタナティブです。
Nodeはもちろん、DenoやBun、そしてLambdaやCloudflare Workersなどのサーバレスでも実行可能です。
フットプリントが非常に小さいことも特徴です。
[作者による記事](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/)も参考になるでしょう。

4位の **{astro}** は、コンテンツの多いアプリケーションを構築する多目的ソリューションへと進化しました。
[バージョン5](https://astro.build/blog/astro-5/)では新しいコンテンツレイヤが導入され、ファイルシステムからでも外部APIからでも、あらゆるソースから型安全にデータ取得できるようになりました。

このサイトの構築にもAstroを使用していますが、DX(astronautというCLIがとてもかわいい)と、それが提供する並外れたパフォーマンスに感動しました。
