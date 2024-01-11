---
id: build
language: en
---

This year, Vite continues its momentum and has become one of the most popular frontend tools. Its precursor [Snowpack](https://www.snowpack.dev/) is no longer maintained and recommends using Vite. Its adoption is not limited to the Vue ecosystem: Vite is used in [SvelteKit](https://kit.svelte.dev/), [Storybook](https://storybook.js.org/blog/first-class-vite-support-in-storybook/), [Vitest](https://vitest.dev/) or even as a modern alternative to [Create-React-App](https://create-react-app.dev/).

We have also seen the rise of build tools for monorepo with [Nx](https://nx.dev/) and [Turborepo](https://turbo.build/repo). Nwrl (the company behind Nx) has [taken over maintenance of Lerna](https://blog.nrwl.io/lerna-is-dead-long-live-lerna-61259f97dbd9) and released [Lerna 6](https://blog.nrwl.io/lerna-reborn-whats-new-in-v6-10aec6e9091c) which enables Nx optimizations by default. 

Although [Babel](https://babeljs.io/) remains popular, [swc](https://swc.rs/) and [esbuild](https://esbuild.github.io/) have been widely adopted by many projects and meta-frameworks. These new tools allow to significantly improve build and transpilation performances. [swc](https://swc.rs/) is a more modular choice, as it offers a [plugin system](https://swc.rs/docs/plugin/ecmascript/getting-started). 

Vercel announced [Turbopack](https://turbo.build/pack) (alpha), a new very fast bundler in Rust on which [Tobias Koppers](https://twitter.com/wSokra) (original creator of Webpack) is working.

The [Rome](https://rome.tools/) toolchain has released its [first stable version](https://rome.tools/blog/2022/11/08/rome-10/), starting with a linter and a formatter with interesting properties. The adoption is shy, but could increase this year.

Many frontend tools in Rust should make news this year:
- [Lightning CSS](https://lightningcss.dev/) (formerly [Parcel CSS](https://parceljs.org/blog/parcel-css/)): a faster CSS toolchain
- [Speedy TypeScript type checker](https://github.com/dudykr/stc): a faster alternative to tsc
- [mdxjs-rs](https://github.com/wooorm/mdxjs-rs): a faster [MDX](https://mdxjs.com/) implementation
