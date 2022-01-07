---
id: conclusion
language: ja
---

モダンなサイト作成は、メタフレームワークの時代に突入したようです。
Next.js、Nuxt、SvelteKit、そして期待の新星{remix}等が鎬を削っています。

JavaScriptコミュニティの高名なメンバーの多くは、様々なソリューションに取り組むため技術企業に参画しました。

- Kent C. DoddsはRemixのチームに加入しました。
Remixを「素晴らしいユーザ体験をもたらし、コードに満足する」ことを可能にすると高く評価しています。

- Vercelは多くのメンバーを雇いました。
{svelte}の開発者Rich Harris、ReactコアチームのSebastian MarkbågeにJared Palmer、そして{turborepo}。
まるでドリームチームです。

ツールに目を向けると、その多くが速度を求めてJavaScriptからRustやGoといった言語にシフトしました。

Lee RobinsonはRustの台頭について、[RustはJavaScriptインフラの未来だ](https://leerob.io/blog/rust)と幾度となく力説しました。

- {tauri}はRust製です。
- [Rome](https://rome.tools/)はJavaScriptから[Rustへの移行を表明しています](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust)。
- Next.jsの最新バージョン12には、Rustで書かれた{swc}コンパイラが同梱されています。

swcは、2020年の当ランキングで優勝したサーバサイドランタイム、{deno}でも使われています。
そして[Denoは当時よりさらに進化](https://blog.bitsrc.io/is-deno-still-a-thing-a-look-at-the-status-of-the-node-killer-884d47981d09)しています。
[Deno Deploy](https://deno.com/deploy/docs)が公開され、これはサーバレスにデプロイするソリューションです。

サーバレスといえば、エッジコンピューティングも2021年の重要なテーマでした。
[Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions)に[CloudFlare Workers](https://workers.cloudflare.com/)、[Netlify Edge](https://www.netlify.com/products/edge/edge-handlers/)といった、ユーザのそばでバックエンドコードを実行するソリューションが多数現れました。
Next.jsやRemixといったメタフレームワークはエッジコンピューティングを活用し、バックエンドコードとReactアプリケーションの統合を容易にしてくれます。

2022年、我々はJavaScriptフルスタックアプリケーションの黄金時代に突入するのでしょうか？
