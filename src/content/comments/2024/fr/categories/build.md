---
id: build
language: fr
---

2024 est une nouvelle excellente année pour les outils JS, avec des travaux en cours pour innover et améliorer les performances. De nombreux projets ont mûri et gagné en popularité, tandis que d'autres projets très excitants sont encore en développement.

[Vite](https://vite.dev/) a encore été le grand gagnant cette année, remportant pour la deuxième fois les [State of JS awards](https://2024.stateofjs.com/en-US/awards/) en tant que technologie la plus adoptée et appréciée. Il est rare d'avoir à la fois une forte utilisation et rétention, et encore plus de la maintenir. Nous attendons avec impatience de voir comment la nouvelle [entreprise void(0)](https://voidzero.dev/) impactera l'écosystème Vite l'année prochaine !

Il convient de souligner que les outils les plus performants se rendent faciles à adopter :

- [Rspack](https://rspack.dev/) est une alternative presque directe à webpack qui commence à gagner du terrain, [adopté avec succès par Docusaurus et Nuxt](https://rspack.dev/blog/announcing-1-1#ecosystem). Il devrait exploser en 2025, étant donné sa facilité d'adoption et le nombre de projets webpack existants qui pourraient compiler plus rapidement.
- [Bun](https://bun.sh/) est une chaîne d'outils JS tout-en-un, également conçue pour faciliter l'adoption grâce à sa compatibilité avec Node.js, npm, ou Jest. Il a poursuivi son travail de compatibilité en 2024, notamment en intégrant [la prise en charge de Windows](https://bun.sh/blog/bun-v1.1) et un [fichier de verrouillage basé sur du texte](https://bun.sh/blog/bun-lock-text-lockfile).
- [Rolldown](https://github.com/rolldown/rolldown) est un bundler rapide avec une API compatible Rollup et une parité de fonctionnalités avec esbuild. Il est encore en développement actif mais progresse rapidement et a récemment publié la première [beta v1.0](https://github.com/rolldown/rolldown/releases/tag/v1.0.0-beta.1). C'est l'un des projets les plus attendus, destiné à alimenter Vite en 2025.
- [Turbopack](https://turbo.build/pack/docs) est un bundler incrémental qui se concentre initialement sur les détails d'implémentation de Next.js, que vous pouvez activer avec un simple flag CLI `--turbo`. [Turbopack Dev](https://nextjs.org/blog/turbopack-for-development-stable) est considéré comme stable, et [Turbopack Prod](https://areweturboyet.com/) est en cours de développement actif. Une version autonome de Turbopack est prévue dans le futur.
- [Biome](https://biomejs.dev/), une alternative plus rapide à Prettier (avec une compatibilité de plus de 97%) et à ESLint, a été [largement and positivement](https://biomejs.dev/blog/biome-v1-9/#one-year-of-biome) adopté par la communauté.

Côté TypeScript, il est également important de mentionner :

- TypeScript 5.5 a intégré les [Déclarations Isolées](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/#isolated-declarations), permettant d'améliorer la parallélisation des builds.
- [Node.js prend désormais en charge TypeScript par défaut](https://www.totaltypescript.com/typescript-is-coming-to-node-23) et peut exécuter directement les fichiers `.ts`. Cela arrivera dans la très prochaine version v23.6 et devrait être rétro-porté dans la v22. Bun et Deno le prenaient déjà en charge.
