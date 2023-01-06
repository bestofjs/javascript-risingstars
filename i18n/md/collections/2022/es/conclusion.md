---
id: conclusion
language: es
---

2022 empezó envuelto en el caos cuando dos paquetes muy populares fueron intencionalmente rotos por su creador: [Faker.js and colors.js sabotaged](https://www.theregister.com/2022/01/10/npm_fakerjs_colorsjs/).

La fragilidad del ecosistema quedó demostrado de nuevo cuando {lerna}, una herramienta muy conocida para mono-repos dejó de tener mantenimiento...hasta que Nrwl, la compañía detrás de {nx}, anunció que se encargaría de ella.

JavaScript continúa arrasando, quizás hayas oído hablar de esta profecía del 2009: 

> Cualquier aplicación que pueda ser escrita en JavaScript, será escrita en algún momento en JavaScript

..._o en TypeScript_ podríamos añadir 13 años después, ya que TypeScript se ha convertido en el estándar a la hora de escribir JavaScript (soporte por defecto en {deno}, {bun}, Next.js, Vite...)  

El lugar tomado por JavaScript y sus herramientas también tiene sus problemas, tanto para desarrolladores como para los usuarios finales:

- los tiempos de build se disparan en grande proyectos
- el tamaño del código JavaScript continúa creciendo llevándonos a un deterioro de rendimiento

En 2022, vimos grandes innovaciones para resolver esto dos tipos de problemas.

La herramientas mejoraron con las siguientes soluciones:

- {bun}, el campeón del año, toma un enfoque radical mejorando la velocidad de instalación y build.
- {rome} es ahora un linter y formatter que intenta ser una sola herramienta para manejar aplicaciones escritas en JS/TS.
- {vite} ha tenido dos lanzamientos importantes este año ([v3 en julio](https://vitejs.dev/blog/announcing-vite3.html) y [v4 en diciembre](https://vitejs.dev/blog/announcing-vite4.html)), que potencia proyectos como SvelteKit, Qwik, {vitest}... proporcionando un gran DX.

Para mejorar el rendimiento en el navegador, hay diferentes patrones compitiendo:

- Frameworks "Zero baseline JavaScript" que intentan proveer prácticamente nada de JS al navegador ({qwik} lidera este frente)
- [Partial hydration](https://ajcwebdev.com/2021/11/22/what-is-partial-hydration-and-why-is-everyone-talking-about-it/) proporcionando interactividad a páginas estáticas ({astro})
- React Server Components (implementado en {nextjs} 13 y {gatsby}) para delegar más peso en el lado servidor.
- La arquitectura [Progressively Enhanced Single Page Apps](https://www.epicweb.dev/the-webs-next-transition) implementada por {remix} proporciona tanto una gran experiencia de desarrollo como buen rendimiento en el navegador sin comprometer ningún comportamiento dinámico.

No hay una fórmula mágica para resolver estos problemas, ya que el espectro entre páginas estáticas y completamente dinámicas es amplio. Tenemos muchas ganas de conocer que será lo siguiente en llegar, ¿qúe nos deparará el 2023?

