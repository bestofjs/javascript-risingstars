---
id: build
language: en
---

2024 is another great year for JS tooling, with ongoing work to innovate and improve performance. Many projects have matured and gained momentum, while other super exciting projects are still being developed.

[Vite](https://vite.dev/) has been the big winner again this year, renewing for the second time its [State of JS awards](https://2024.stateofjs.com/en-US/awards/) as the most adopted and loved technology. It's rare to have both high usage and retention, let alone maintain it. We are eagerly waiting to see how the new [void(0) company](https://voidzero.dev/) will impact the Vite ecosystem next year!

It’s worth mentioning that the most successful tools are making themselves easy to adopt:

- [Rspack](https://rspack.dev/) is an almost drop-in alternative to webpack that started to gain traction, successfully [adopted by Docusaurus and Nuxt](https://rspack.dev/blog/announcing-1-1#ecosystem). It should explode in 2025, given its ease of adoption and the number of existing webpack projects that could build faster.
- [Bun](https://bun.sh/) is an all-in-one JS toolchain, also designed to facilitate adoption thanks to its compatibility with Node.js, npm, or Jest. It continued its ongoing compatibility work in 2024, notably shipping [Windows support](https://bun.sh/blog/bun-v1.1) and [text-based lockfile](https://bun.sh/blog/bun-lock-text-lockfile).
- [Rolldown](https://github.com/rolldown/rolldown) is a fast bundler with a Rollup-compatible API and esbuild feature parity. It’s still in active development but progressing fast and recently published the first [v1.0 beta](https://github.com/rolldown/rolldown/releases/tag/v1.0.0-beta.1). One of the most eagerly awaited projects, set to power Vite in 2025\.
- [Turbopack](https://turbo.build/pack/docs) is an incremental bundler that initially focuses on being an implementation detail of Next.js, that you can turn on with a simple CLI `--turbo` flag. [Turbopack Dev](https://nextjs.org/blog/turbopack-for-development-stable) is considered stable, and [Turbopack Prod](https://areweturboyet.com/) is being actively worked on. A standalone version of Turbopack is planned in the future.
- [Biome](https://biomejs.dev/), a faster alternative to Prettier (with 97%+ compatibility) and ESLint, has been [widely and positively](https://biomejs.dev/blog/biome-v1-9/#one-year-of-biome) adopted by the community.

On the TypeScript side, it’s also worth mentioning:

- TypeScript 5.5 shipped [Isolated Declarations](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/#isolated-declarations), unlocking improved build parallelization
- [Node.js now supports TypeScript by default](https://www.totaltypescript.com/typescript-is-coming-to-node-23) and can run `.ts` files directly. It’s coming in the very next v23.6 release and should be backported in v22. Both Bun and Deno already had support.
