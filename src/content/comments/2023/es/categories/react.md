---
id: react
language: es
---

En 2023, vimos a React adentrarse en su tercera era con la llegada de los React Server Components.

Los equipos principales de React y Vercel colaboraron para lanzar la primera implementación estable: [Next.js 13.4 App Router](https://nextjs.org/blog/next-13-4). A pesar de liderar una innovación emocionante y desplegar los recursos necesarios, Vercel recibió críticas por su relación privilegiada con el equipo principal de React y el acceso temprano a funciones experimentales. A principios de 2023, era común ver nuevas características de React documentadas inicialmente en la documentación de Next.js. La comunidad no apreció ciertas decisiones de diseño, como la [extensión de la API `fetch()`](https://nextjs.org/docs/app/api-reference/functions/fetch), sobre la cual [ahora están retrocediendo](https://twitter.com/leeerob/status/1733154383410684148). También era común ver quejas sobre la estabilidad del App Router y el rendimiento de su servidor de desarrollo. Sin embargo, los primeros usuarios de React Server Components informaron muchos beneficios prometedores, como tamaños de paquete más pequeños y código considerablemente simplificado.

El equipo de React [aclaró su postura y estrategia del lanzamiento de sus nuevas funciones experimentales](https://react.dev/blog/2023/05/03/react-canaries). Siempre está bien que los frameworks adopten versiones canary, cuyos cambios que rompan compatibilidad con versiones anteriores se documenten. También se pusieron al día con la documentación, finalizando el año con una excelente [Actualización de la Documentación de React](https://github.com/reactwg/server-components/discussions/7), documentando exhaustivamente las API más recientes ([useFormState](https://react.dev/reference/react-dom/hooks/useFormState), [<form>](https://react.dev/reference/react-dom/components/form), [‘use server’](https://react.dev/reference/react/use-server) ...).

También presenciamos la llegada de [Server Actions](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action), una nueva funcionalidad troncal de React que fue implementada por primera vez de forma estable en [Next.js 14](https://nextjs.org/blog/next-14), permitiendo llamadas RPC sin problemas para envíos de formularios y mutaciones. Muy parecida a la filosofía de Remix, Server Actions están diseñadas con [mejora progresiva en mente](https://react.dev/reference/react-dom/components/form#display-a-form-submission-error-without-javascript).

En 2024, será emocionante ver cómo otros frameworks adoptan React Server Components, especialmente:

- Remix añadió [React Server Components a su roadmap](https://twitter.com/ryanflorence/status/1729274387671760936)
- Expo está introduciendo funciones del lado del servidor y [revelando su plan para soportar React Server Components universales multiplataforma](https://blog.expo.dev/expo-router-v3-beta-is-now-available-eab52baf1e3e)
- Redwood apuesta [todo a React Server Components](https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc)
- Waku es un [nuevo framework React minimalista que admite React Server Components](https://waku.gg/blog/introducing-waku)
- Docusaurus planea [renderizar React Server Components estáticos en tiempo de compilación](https://github.com/facebook/docusaurus/issues/9089)

Estamos esperando con muchas ganas React 19, que debería [llegar pronto](https://twitter.com/acdlite/status/1719474730363662473).
