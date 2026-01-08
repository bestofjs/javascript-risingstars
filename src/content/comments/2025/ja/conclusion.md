---
id: conclusion
language: ja
---

今年の最大のニュースの一つは、Claude CodeやClaudeファミリーのLLMで知られるAnthropicによる、[Bunの買収](https://bun.com/blog/bun-joins-anthropic)です。

{bun}は、JavaScriptランタイムとして2022年に注目を集めました。AIの急速な台頭が、クラウド製品（Denoが提供する[Deno Deploy](https://deno.com/deploy)のようなもの）開発から、AIエージェントの強化へとビジョンをシフトさせたことは興味深い展開です。

> AIコーディングツールは急速に進化しており、Bunの単一ファイル実行可能形式を利用して、どこでも動作するCLIやエージェントが提供されています。

JavaScriptコミュニティにとってもう一つ重要なニュースは、長年Next.jsの顔であった[Lee Robinson](https://x.com/leerob)氏（2020年には当社のゲストライターでもありました！）がCursorに入社し、開発者向けのAI教育コンテンツを提供していることです。特に、初心者向けの[学習コース](https://www.cursor.com/learn/)は大変おすすめです。

オープンソースコミュニティでお馴染みの顔といえば、Anthony Fu氏（{vite}、{vitest}など多数のプロジェクトを手掛ける）や、Daniel Roe氏、Sébastien Chopin氏（{nuxt}）がVercelに入社したことです。VercelはNext.jsとReactに注力することで知られており、これらのフレームワークの多様性にとって良い兆候と言えるでしょう。

[Remix 3](https://github.com/remix-run/remix/blob/main/README.md#welcome-to-remix-3)の発表は大胆な一歩でした。Remixのクリエイター（React Routerのクリエイターでもあります）はReactから離れ、Webプラットフォームにこれまで以上に賭けることを決定しました。これはRemixユーザーがお気に入りのフレームワークを失うことを意味するわけではなく、Remix 2はReact Routerフレームワークへと進化しました。

[ReactとRemixが異なる未来を選択した理由](https://laconicwit.com/react-and-remix-choose-different-futures/)についての興味深い記事があります。

> Reactは、複雑さを犠牲にすることになっても、安定性の道を追求しています。一方Remixは、シンプルさを最優先目標としています。

Remix 3の正式リリースは、2026年のハイライトとなることは間違いありません。

Reactといえば、ディレクティブパターンが今年、一部で論争を巻き起こしました。ディレクティブパターンは、Reactが登場するずっと以前の`use strict`から始まり、最近になって話題となりました。

- React Server Components (RSC) は、コンポーネントがクライアントサイド専用であることをコンパイラに伝えるために`use client`を導入しました。
- `use server`は、Server Actionsと呼ばれるHTTPエンドポイントとして関数を公開します。
- Next.js 16で導入された`use cache`は、ページ、コンポーネント、または関数のレベルでキャッシュを設定します。
- わずか2ヶ月前に作成されたばかりの新しいプロジェクト「[Workflow](https://useworkflow.dev/)」では、`use workflow`と`use step`により、ディレクティブがさらに進化しました。これはインフラ層に影響を与え、長期間実行可能な強力な非同期ワークフローの作成を可能にします。

これらのディレクティブは、明示的な実行時契約ではなく、ビルド時規約に依存しており、30年を経た言語の将来について興味深い議論を生んでいます。Tanner Linsley氏（TanStackの立役者！）による[ディレクティブとプラットフォームの境界](https://tanstack.com/blog/directives-and-the-platform-boundary#when-directives-look-like-the-platform-developers-treat-them-like-the-platform)に関する記事をお読みください。

2025年は、良いことばかりではありませんでした。年末に見つかったReact2Shellの脆弱性については既に言及しましたが、npmエコシステム全体が、数千のnpmパッケージとGitHubリポジトリを侵害した巧妙なキャンペーン[「Shai-Hulud」サプライチェーン攻撃](https://socket.dev/blog/ongoing-supply-chain-attack-targets-crowdstrike-npm-packages)の標的となりました。この攻撃は、我々の依存関係エコシステムの脆弱性と、より優れたセキュリティプラクティス、依存関係監査、サプライチェーン保護の必要性を浮き彫りにしました。

2026年に何を期待するか？開発者にとって、エージェントワークフローの習得は必須スキルとなるでしょう。同時に、AIに全てのコントロールを委ねてしまい、品質やクリーンコードを妥協したくはありません。
適切なバランスを見つけることが鍵となるでしょう。
