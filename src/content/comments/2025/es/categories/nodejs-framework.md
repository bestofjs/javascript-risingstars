---
id: nodejs-framework
language: es
---

¡Un recién llegado gana la categoría backend/fullstack! {motia} representa un cambio de paradigma en la ingeniería backend, unificando en un único sistema lo que tradicionalmente requería múltiples frameworks separados. En lugar de tener que lidiar con distintas herramientas para APIs, background jobs, colas, flujos de trabajo, streams y agentes de IA, Motia ofrece un solo framework para todo tu backend.

En su núcleo, Motia utiliza una primitiva llamada [Steps](https://www.motia.dev/docs/concepts/steps), una única abstracción que define cómo se ejecuta el código, cuándo se ejecuta, dónde se ejecuta y qué hace. Cada Step tiene una configuración (que define disparadores, rutas y programaciones) y un handler (tu lógica de negocio). Cambias el tipo de Step y el mismo patrón sirve para distintos casos de uso: endpoints de API, manejadores de eventos o tareas cron.

Los Steps pueden escribirse en TypeScript o Python. Además, incluye observabilidad integrada a través del Workbench, un panel de control visual para gestionar, depurar y observar las ejecuciones, junto con gestión de estado y capacidades de streaming integradas.

Los cuatro proyectos siguientes son los mismos que en 2024, salvo que Hono y Astro intercambian posiciones.

{payload}, número uno el año pasado, es un híbrido entre un CMS headless y un panel de administración para Next.js. La mayor novedad es su [adquisición por Figma](https://payloadcms.com/posts/blog/payload-is-joining-figma), cuyo objetivo final es reducir la brecha entre diseño y código.

En el puesto #3, Next.js 16 introdujo los [componentes cacheados](https://nextjs.org/blog/next-16#cache-components) para hacer el cacheo más explícito y flexible. Los desarrolladores pueden crear esqueletos de páginas estáticas que incluyen contenido dinámico transmitido desde el servidor.

En el puesto #4, {astro} sigue brillando como un framework versátil para construir aplicaciones con mucho contenido (como tu querido JS Rising Stars) con una excelente experiencia de desarrollo y un fuerte enfoque en el rendimiento.

En el puesto #5, {hono} se ha convertido en un estándar para servidores web modernos (aunque {express} siga existiendo), gracias a su núcleo ligero que puede ejecutarse en cualquier entorno (runtimes de Node.js, Cloudflare Workers...) y a un rico ecosistema de handlers y middlewares. Puedes echas un vistazo a [la historia de Hono](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/).

El mayor cambio en la categoría de meta-frameworks es el auge de [TanStack Start](https://tanstack.com/start/latest), como una de las mejores alternativas a Next.js si quieres construir una aplicación fullstack sobre React.
