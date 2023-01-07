---
id: conclusion
language: es
---

2022 empezó envuelto en el caos cuando dos paquetes muy populares fueron intencionalmente rotos por su creador: [Faker.js and colors.js sabotaged](https://www.theregister.com/2022/01/10/npm_fakerjs_colorsjs/).

La fragilidad de este gran ecosistema quedó demostrada de nuevo cuando {lerna}, una herramienta muy conocida para mono-repos dejó de tener mantenimiento...hasta que Nrwl, la compañía detrás de {nx}, anunció que se encargaría de ella.

JavaScript continúa arrasando, quizás hayas oído hablar de esta profecía del 2009: 

> Cualquier aplicación que pueda ser escrita en JavaScript, será escrita en algún momento en JavaScript

..._o en TypeScript_ podríamos añadir 13 años después, ya que TypeScript se ha convertido en el estándar a la hora de escribir JavaScript (soporte por defecto en {deno}, {bun}, Next.js, Vite...).  

El lugar tomado por JavaScript y sus herramientas también tiene sus problemas, tanto para desarrolladores como para los usuarios finales:

- los tiempos de build se disparan en proyectos grandes. 
- el tamaño del código JavaScript continúa creciendo llevándonos a un deterioro de rendimiento.

En 2022, vimos grandes innovaciones para resolver estos dos tipos de problemas en diferentes capas del stack tecnológico.

Las herramientas mejoraron con las siguientes soluciones:

- {bun}, el campeón del año, toma un enfoque radical mejorando la velocidad de instalación y build.
- {rome} es ahora un linter y formatter que intenta ser una sola herramienta para manejar aplicaciones escritas en JS/TS.
- La herramienta de build {vite}.

Para mejorar el rendimiento en el navegador, hay diferentes patrones compitiendo:

- Frameworks "Zero baseline JavaScript" que intentan proveer prácticamente nada de JS al navegador ({qwik} lidera este frente)
- [Partial hydration](https://ajcwebdev.com/2021/11/22/what-is-partial-hydration-and-why-is-everyone-talking-about-it/) proporcionando interactividad a páginas estáticas ({astro})
- React Server Components (implementado en {nextjs} 13 y {gatsby}) para delegar más peso en el lado servidor.
- La arquitectura [Progressively Enhanced Single Page Apps](https://www.epicweb.dev/the-webs-next-transition) implementada por {remix} proporciona tanto una gran experiencia de desarrollo como buen rendimiento en el navegador sin comprometer ningún comportamiento dinámico.

No hay una fórmula mágica para resolver estos problemas, ya que el espectro entre páginas estáticas y completamente dinámicas es amplio.

El panorama JavaScript ha estado muy fragmentado anteriormente: por un lado teníamos diferentes navegadores y por otro Node.js, con su sistema de módulos CommonJS además de sus propias APIs.

Con el surgimiento del edge computing, hay una tendencia de usar el mismo conjunto de APIs estándar en cualquier lugar (fetch, HTTP Request and Response...).

Nuestro escritor invitado Lee Robinson, hizo un gran resumen de estas tendencias en el artículo [Why I'm Optimistic About JavaScript's Future](https://leerob.substack.com/p/why-im-optimistic-about-javascripts).

Y compartimos totalmente el optimismo de su conclusión! 

> Que gran momento para ser desarrollador web.
