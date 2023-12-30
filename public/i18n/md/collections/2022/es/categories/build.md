---
id: build
language: es
---

Este año Vite continúa creciendo y se ha convertido en uno de las herramientas más populares en el mundo frontend. Su precursor, [Snowpack](https://www.snowpack.dev/), se ha dejado de mantener y recomiendan usar Vite en su lugar. Su uso no está limitado al ecosistema de Vue: Vite es usado en [SvelteKit](https://kit.svelte.dev/), [Storybook](https://storybook.js.org/blog/first-class-vite-support-in-storybook/), [Vitest](https://vitest.dev/) o incluso como alternativa moderna a [Create-React-App](https://create-react-app.dev/).

También hemos visto un crecimiento de herramientas para monorepo como [Nx](https://nx.dev/) y [Turborepo](https://turbo.build/repo). Nwrl (la compañía detrás de Nx) ha [tomado el mantenimiento de Lerna](https://blog.nrwl.io/lerna-is-dead-long-live-lerna-61259f97dbd9) y lanzado [Lerna 6](https://blog.nrwl.io/lerna-reborn-whats-new-in-v6-10aec6e9091c) que activa optimizaciones de Nx por defecto.  

Aunque [Babel](https://babeljs.io/) continúa siendo popular, [swc](https://swc.rs/) y [esbuild](https://esbuild.github.io/) han sido ampliamente acogidos por muchos proyectos y meta-frameworks. Estas herramientas han mejorado sustancialmente el rendimiento de los procesos de build y transpilación. [swc](https://swc.rs/) es una opción más modular ofreciendo un [sistema de plugins](https://swc.rs/docs/plugin/ecmascript/getting-started).

Vercel anunció la versión alpha de [Turbopack](https://turbo.build/pack), un nuevo bundler creado con Rust, en el que está trabajando [Tobias Koppers](https://twitter.com/wSokra) (el creador original de Webpack).

El conjunto de herramientas [Rome](https://rome.tools/), ha publicado su [primera versión estable](https://rome.tools/blog/2022/11/08/rome-10/), comenzando con un linter y formatter con unas opciones interesantes. Por el momento su recibimiento ha sido modesto pero puede que crezca a lo largo del año. 

Algunas herramientas frontend creadas con Rust que podrían sorprendernos este año son:
- [Lightning CSS](https://lightningcss.dev/) (formalmente [Parcel CSS](https://parceljs.org/blog/parcel-css/)): herramientas más rápidas para CSS
- [Speedy TypeScript type checker](https://github.com/dudykr/stc): una alternativa más rápida a tsc
- [mdxjs-rs](https://github.com/wooorm/mdxjs-rs): implementación que mejora la velocidad de [MDX](https://mdxjs.com/)