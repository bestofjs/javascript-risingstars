---
id: build
language: es
---

En 2021, las tendencias existentes se han fortalecido.

La adopción de módulos nativos ES continúa. {vite} ha sido ampliamente aceptado (más rápido que {snowpack}), generando un nuevo ecosistema de herramientas (como {vitest}, un moderno framework para testing). Los módulos ES también están siendo incorporados en el ecosistema de Node.js, aunque no está siendo sencillo. TypeScript incluso [ha retrasado el soporte para módulos ES en Node.js](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#esm-nodejs).

Nunca antes se habían creado tantas herramientas frontend escritas en otros lenguajes (ver [awesome-js-tooling-not-in-js](https://github.com/RobinCsl/awesome-js-tooling-not-in-js)), principalmente por razones de rendimiento. 

Lee Robinson dijo que [Rust Es El Futuro en la Infraestructura de JavaScript](https://leerob.io/blog/rust). Rust es particularmente interesante por su gran rendimiento e interoperabilidad con JavaScript. [NAPI-RS](https://napi.rs/) permite comunicar JavaScript con Rust sin ningún coste de serialización. Next.js está [apostando por SWC](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler), un compilador extensible de Rust que les permite portar los plugins más populares de Babel a Rust.

{parcel} 2 has sido [lanzado con un nuevo compilador Rust](https://parceljs.org/blog/v2/). Las herramientas de {rome} también están siendo [reescritas en Rust](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust), aunque uno de sus fundadores [Jamie Kyle acaba de abandonar la compañía](https://twitter.com/buildsghost/status/1471523960479121408) sin dar mucha información al respecto.

Rust es claramente el lenguaje no-JS líder actual, pero no es el único que proporciona gran rendimiento: [Bun](http://bun.sh/) está escrito en Zig. {turborepo} y {esbuild} están construidos con Go. También destacar que [Evan Wallace dejó Figma](https://twitter.com/evanwallace/status/1475685056454836229): quizás ahora pueda dedicar más tiempo para trabajar en esbuild.

En el mundo monorepo, [Lerna](https://github.com/lerna/lerna) continúa siendo ampliamente usado aunque no tenga tanto soporte de mantenimiento. [Nx](https://nx.dev/), una herramienta monorepo que ayuda a reducir el tiempo de build considerablemente, [ha ido creciendo muy rápidamente](https://twitter.com/victorsavkin/status/1476618225551036427). Su nuevo competidor {turborepo} se ha beneficiado de un gran marketing después de [haber sido adquirido por Vercel](https://vercel.com/blog/vercel-acquires-turborepo).