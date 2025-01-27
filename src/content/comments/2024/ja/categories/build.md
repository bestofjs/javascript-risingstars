---
id: build
language: ja
---

2024年はJavaScriptツールにとって素晴らしい年であり、革新とパフォーマンス向上にむけた取り組みが続いています。
あるプロジェクトは成熟して勢いを増しており、また他のプロジェクトはエキサイティングに開発が続けられています。

[Vite](https://vite.dev/)は今年も絶好調であり、[State of JSワード](https://2024.stateofjs.com/en-US/awards/)で最も採用され、最も好まれている賞の2冠を果たしました。
採用も継続も高い状態を維持できることは稀です。
[void(0)社](https://voidzero.dev/)がViteエコシステムに来年何をしてくるのか、楽しみにしています。

高評価なツールは、導入が容易であることは特筆すべきでしょう。

- [Rspack](https://rspack.dev/)は、webpackのほぼそのままな代替です。
[Docusaurusとnuxtが採用した](https://rspack.dev/blog/announcing-1-1#ecosystem)ことで注目を集めました。
導入の容易さと高速化という利点は、既存のWebpackプロジェクト数を考えると、2025年はさらに普及することは間違いないでしょう。
- [Bun](https://bun.sh/)はオールインワンのJSツールチェーンで、Node.js、npm、Jestとの互換によって簡単に導入できるよう設計されています。
2024年も互換性の年であり、[Windowsサポート](https://bun.sh/blog/bun-v1.1)や[テキストベースのロックファイル](https://bun.sh/blog/bun-lock-text-lockfile)などをリリースしました。
- [Rolldown](https://github.com/rolldown/rolldown)はRollup互換のAPIとesbuildの機能を兼ね備えた高速バンドラーです。
絶賛開発中であり、最近[v1.0ベータ版](https://github.com/rolldown/rolldown/releases/tag/v1.0.0-beta.1)を公開しました。
最も待ち望まれているプロジェクトのひとつであり、2025年にはViteに乗る予定です。
- [Turbopack](https://turbo.build/pack/docs)はNext.jsの高速な増分ハンドラであり、CLIからは`--turbo`とするだけでオンにできます。
[Turbopack Dev](https://nextjs.org/blog/turbopack-for-development-stable)は安定版であり、[https://areweturboyet.com/](Turbopack Prod)は積極的な開発が続けられています。
将来的にはスタンドアロンのTurbopackも計画されています。
- [Biome](https://biomejs.dev/)はPrettier(97%以上の互換性)とESLintの高速な代替であり、コミュニティでは[広く積極的に導入](https://biomejs.dev/blog/biome-v1-9/#one-year-of-biome)されています。

TypeScriptについて、以下の点には言及する価値があるでしょう。

- TypeScript5.5では[Isolated Declarations](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/#isolated-declarations)がサポートされビルドが高速化されました。
- Node.jsが[デフォルトでTypeScriptをサポート](https://www.totaltypescript.com/typescript-is-coming-to-node-23)し、`.ts`ファイルを直接実行できるようになりました。
これはv23.6でリリースされ、v22にもバックポートされる予定です。
なお、BunとDenoはどちらも既にTypeScriptをサポートしています。
