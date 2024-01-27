---
id: build
language: ja
---

ご存じ{bun}は[バンドラ](https://bun.sh/docs/bundler)でもあるため、今回からビルドツールカテゴリに移動しました。

2位の{vite}は、今最も使われている多目的バンドラで、Astro・Nuxt・Remix・SolidStart・SvelteKitなどなど様々なメタフレームワークを支えています。
11月にリリースされた[バージョン5](https://vitejs.dev/blog/announcing-vite5)は{rollup}4をベースとしており、さらにパフォーマンスが向上しています。

さらにEvan Youは、Rust製RollupであるRolldownに取り組んでいることを[明らかにしました](https://twitter.com/youyuxi/status/1709943106215530867)。
Viteはさらに進化することでしょう。

3位の{biome}は、2023年のトピックのひとつです。
これは、コンパイラでありLinterでありフォーマッターでありバンドラでありテスターでもあるという非常に野心的であったプロジェクト[Romeの崩壊](https://bytes.dev/archives/175)に起因しています。
Romeはプロジェクトを支えていた会社が倒産し、Rome自体も中断してしまいましたが、幸いなことにそのforkがBiomeとして生まれ変わりました。

そして11月には『Prettierのテストの95%以上に合格するRust製コードフォーマッタを作る』というコンテスト、[Prettier Challenge](https://biomejs.dev/blog/biome-wins-prettier-challenge/)で優勝しました。
Prettierはこの業界の標準であるため、2024年にはBiomeの採用が増えていくことが予想されます。

Rustといえば、ByteDanceチームからの新星{oxc}と{rspack}も現れました。
RspackはWebpackと互換しつつも比類なきパフォーマンスを発揮します。

それにしても、Rising Starsを始めて以来初めてWebpackがランキング外になりましたが、Webpackを採用しているプロジェクトの数を考えると実に不思議なことに感じられます。
