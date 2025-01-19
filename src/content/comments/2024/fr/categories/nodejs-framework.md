---
id: nodejs-framework
language: fr
---

À la première place, **{Payload}** est un CMS open-source polyvalent qui s'installe directement dans n'importe quelle application Next.js. L'intégration étroite avec le Next.js App Router facilite la mise en place d'un panneau d'administration directement dans une application existante, sans avoir à créer une nouvelle application pour les utilisateurs administrateurs.

Initialement conçu pour MongoDB, il prend désormais en charge Postgres et SQLite grâce à l'intégration de {drizzle-orm} en arrière-plan. Il fournit son propre ORM utilisé pour configurer la structure des données et les règles de contrôle d'accès à un niveau supérieur, et inclut des fonctionnalités puissantes comme le téléchargement en masse de fichiers médias. Consultez l'annonce de [Payload 3](https://payloadcms.com/blog/payload-30-the-first-cms-that-installs-directly-into-any-nextjs-app) pour plus de détails.

En deuxième position, **{nextjs}** reste le framework full-stack le plus populaire. La [version 15](https://nextjs.org/blog/next-15) prend en charge React 19 et apporte des améliorations de performance, exploitant la nouvelle API Cache, ainsi qu'une expérience développeur (DX) améliorée grâce à l'adoption complète de Turbopack comme outil de build.

Le nouveau venu dans la catégorie est le serveur web **{Hono}**, prenant la troisième place. Il peut être vu comme un remplaçant moderne de {Express} (classé 13ème malgré ses 15 ans !) et est capable de fonctionner dans plusieurs environnements d'exécution JavaScript : Node.js, bien sûr, mais aussi Deno, Bun, et les environnements serverless comme Lambda ou Cloudflare Workers. Il se distingue par son empreinte incroyablement réduite. Lisez [l'histoire de son créateur](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/).

En quatrième position, **{astro}** est devenu une solution polyvalente pour construire des applications riches en contenu. La [version 5](https://astro.build/blog/astro-5/) a introduit l'API Content Layer, permettant la récupération de données type-safe depuis n'importe quelle source—que ce soit depuis le système de fichiers ou des API externes.

J'ai utilisé Astro pour construire ce site, et je suis impressionné par la DX (le CLI qui vous appelle astronaute est tellement mignon !) et les performances web exceptionnelles qu'il offre.
