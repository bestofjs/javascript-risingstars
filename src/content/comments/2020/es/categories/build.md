---
id: build  
language: es
---

2020 ha sido un gran año para las herramientas de build y nos hemos encontrado con nuevas tendencias.

{snowpack} y {vite} apuestan por un enfoque priorizando *ES modules*. Estas herramientas no hacen bundle de tu código en *dev*, se centran en conseguir un extremadamente rápido feedback y solo hacen bundle para producción (hasta que el soporte en navegadores mejore).

{swc} y {esbuild} aprovechan Rust y Go para ofrecer un gran rendimiento, ambos usando TypeScript.

Muchas veces se describe a {webpack} como demasiado complejo y alternativas como {parcel} y {rollup} han madurado. Aún así Webpack continúa siendo la herramienta de build por defecto para muchos y su nueva *caching layer* puede mejorar significativamente tu rendimiento a la hora de crear el build.


La popularidad de *Monorepos* está creciendo: Yarn y Lerna son ampliamente utilizados, npm 7 también se unió a la fiesta de los *Monorepos* este año.

Selección personal para no perder de vista en 2021: {rome}, [Toast](https://toast.dev), [Turborepo](https://turborepo.com)