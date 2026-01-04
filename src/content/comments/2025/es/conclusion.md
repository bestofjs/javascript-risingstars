---
id: conclusion
language: es
---

Una de las mayores noticias del año es [la adquisición de Bun](https://bun.com/blog/bun-joins-anthropic) por parte de Anthropic, la empresa detrás de Claude Code y de la familia de LLMs Claude.

{bun}, el runtime JavaScript todo en uno, fue nuestro campeón en 2022. Resulta interesante ver cómo el auge repentino de los LLMs provocó un cambio de visión: de construir un producto en la nube (similar a lo que ofrece Deno con [Deno Deploy](https://deno.com/deploy)) a impulsar agentes de IA.

> Las herramientas de programación con IA están mejorando muy rápido y están usando ejecutables de Bun para distribuir CLIs y agentes que funcionan en cualquier entorno.

Otra noticia relevante para la comunidad JS: [Lee Robinson](https://x.com/leerob), que fue durante años la cara visible de Next.js (y nuestro autor invitado en 2020), se unió a Cursor, donde aporta contenido educativo sobre IA para desarrolladores; echa un vistazo a su [curso](https://www.cursor.com/learn/), excelente para principiantes.

Siguiendo con caras conocidas de la comunidad open source, Anthony Fu ({vite}, {vitest} y muchos otros proyectos), Daniel Roe y Sébastien Chopin ({nuxt}) se unieron a Vercel. Parece una buena señal para la diversidad de frameworks, teniendo en cuenta que la compañía es conocida por su fuerte enfoque en Next.js y React.

El anuncio de [Remix 3](https://github.com/remix-run/remix/blob/main/README.md#welcome-to-remix-3) fue un movimiento atrevido, ya que los creadores de Remix (también creadores de React Router) decidieron abandonar React, apostando más que nunca por los estándares de la web.
Esto no significa que los usuarios de Remix vayan a perder su framework favorito: Remix 2 ha evolucionado y se ha convertido en el framework React Router.

Un artículo muy interesante sobre cómo [React y Remix eligen futuros diferentes](https://laconicwit.com/react-and-remix-choose-different-futures/).

> React sigue el camino de la estabilidad, incluso si eso implica añadir complejidad, mientras que Remix elige la simplicidad como objetivo principal.

El lanzamiento oficial de Remix 3 será, sin duda, uno de los grandes hitos de 2026.

Hablando de React, el patrón de directivas generó bastante controversia este año. El patrón de directivas comenzó hace mucho tiempo con `use strict`, incluso antes de que existiera React, y el tema se ha vuelto especialmente candente recientemente.

- Los React Server Components (RSC) introdujeron `use client` para indicar al compilador que un componente es solo del lado cliente.
- `use server` expone funciones como endpoints HTTP llamados Server Actions.
- `use cache`, introducido por Next.js 16, configura el cacheo a nivel de página, componente o función.
- El nuevo proyecto [Workflow](https://useworkflow.dev/) (creado hace apenas dos meses) lleva el concepto de directivas un paso más allá con `use workflow` y `use step`, que tienen impacto en la capa de infraestructura y permiten crear potentes flujos de trabajo asíncronos que pueden ejecutarse durante largos periodos de tiempo.

Estas directivas se basan en convenciones en tiempo de compilación y no en contratos explícitos en tiempo de ejecución, lo que ha generado interesantes debates sobre el futuro de un lenguaje que ya tiene 30 años.
Puedes leer más sobre ello en [Directives and the Platform Boundary](https://tanstack.com/blog/directives-and-the-platform-boundary#when-directives-look-like-the-platform-developers-treat-them-like-the-platform), de Tanner Linsley (la mente detrás de TanStack).

2025 no fue todo optimismo e innovación. Ya hemos mencionado la vulnerabilidad React2Shell descubierta a finales de año, pero todo el ecosistema npm estuvo bajo ataque con el ["Shai-Hulud", un "supply chain attack"](https://socket.dev/blog/ongoing-supply-chain-attack-targets-crowdstrike-npm-packages), una campaña sofisticada que comprometió miles de paquetes npm y repositorios de GitHub. Este ataque puso de manifiesto la fragilidad de nuestro ecosistema de dependencias y la necesidad crítica de mejorar las prácticas de seguridad, la auditoría de dependencias y la protección de la cadena de suministro.

¿Qué podemos esperar de 2026? Que dominemos los flujos de trabajo con agentes parece una habilidad imprescindible para los desarrolladores, pero al mismo tiempo no queremos ceder todo el control a la IA ni comprometer la calidad y el buen código.
¡Encontrar el equilibrio adecuado será la clave!