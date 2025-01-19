---
id: build
language: es
---

2024 ha sido otro gran año para las herramientas de JS, con un trabajo constante para innovar y mejorar el rendimiento. Muchos proyectos han madurado y ganado impulso, mientras que otros proyectos emocionantes aún están en desarrollo.

[Vite](https://vite.dev/) ha sido nuevamente el gran ganador este año, renovando por segunda vez su [premio State of JS](https://2024.stateofjs.com/en-US/awards/) como la tecnología más adoptada y amada. Es raro lograr un alto uso y retención a la vez, y mucho menos mantenerlo. ¡Estamos ansiosos por ver cómo la nueva [empresa void(0)](https://voidzero.dev/) impactará el ecosistema de Vite el próximo año!

Vale la pena mencionar que las herramientas más exitosas están facilitando su adopción:

- [Rspack](https://rspack.dev/) es una alternativa casi directa a webpack que comenzó a ganar tracción, siendo [adoptada con éxito por Docusaurus y Nuxt](https://rspack.dev/blog/announcing-1-1#ecosystem). Debería explotar en 2025, dado lo fácil que es adoptarla y la cantidad de proyectos existentes en webpack que podrían compilar más rápido.
- [Bun](https://bun.sh/) es una herramienta todo en uno de JS, también diseñada para facilitar su adopción gracias a su compatibilidad con Node.js, npm o Jest. Continuó su trabajo de compatibilidad en 2024, destacando el [soporte para Windows](https://bun.sh/blog/bun-v1.1) y el [lockfile basado en texto](https://bun.sh/blog/bun-lock-text-lockfile).
- [Rolldown](https://github.com/rolldown/rolldown) es un bundler rápido con una API compatible con Rollup y paridad de características con esbuild. Todavía está en desarrollo activo, pero progresa rápidamente y recientemente publicó la primera [beta v1.0](https://github.com/rolldown/rolldown/releases/tag/v1.0.0-beta.1). Es uno de los proyectos más esperados, y está previsto que impulse Vite en 2025.
- [Turbopack](https://turbo.build/pack/docs) es un bundler incremental que se centra en ser un detalle de implementación de Next.js, que puedes activar con un simple flag del CLI `--turbo`. [Turbopack Dev](https://nextjs.org/blog/turbopack-for-development-stable) se considera estable, y [Turbopack Prod](https://areweturboyet.com/) está en desarrollo activo. Se planea una versión independiente de Turbopack en el futuro.
- [Biome](https://biomejs.dev/), una alternativa más rápida a Prettier (con un 97 % de compatibilidad) y ESLint, ha sido [ampliamente adoptada con opiniones positivas](https://biomejs.dev/blog/biome-v1-9/#one-year-of-biome) por la comunidad.

En el ámbito de TypeScript, también vale la pena mencionar:

- TypeScript 5.5 introdujo [Isolated Declarations](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/#isolated-declarations), desbloqueando una mejor paralelización de builds
- [Node.js ahora soporta TypeScript por defecto](https://www.totaltypescript.com/typescript-is-coming-to-node-23) y puede ejecutar archivos `.ts` directamente. Llegará en la próxima versión v23.6 y debería ser incorporado en la v22. Tanto Bun como Deno ya tenían soporte.
