---
id: framework
language: es
---

{react} arrebató la corona a {htmx}, que había encabezado la categoría en 2024.

Los debates sobre la edad de React y sobre si alternativas como {solid} o {svelte} son mejores para nuevos proyectos se ven complicados por el hecho de que los LLMs estén entrenados sobre bases de código en React, lo que dificulta que las alternativas ganen tracción. Puedes leer [cómo React ganó por defecto](https://www.lorenstew.art/blog/react-won-by-default/).

[React 19](https://react.dev/blog/2025/10/01/react-19-2) introdujo mejoras significativas, incluyendo la API `Activity` y hooks mejorados para gestionar eventos de usuario.

Hablando de efectos, este año [se produjo una importante caída](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/) cuando Cloudflare se lanzó un ataque DDoS a sí misma debido a un `useEffect` que realizaba llamadas infinitas a su API desde sus paneles de control.

El giro de React hacia el servidor con React Server Components marca el mayor cambio de los últimos años, pero conlleva un gran poder y también grandes riesgos, como se vio con vulnerabilidades críticas como [React2Shell](https://react2shell.com/), una vulnerabilidad de ejecución remota de código (RCE) en React Server Components que obligó a publicar parches urgentes. ([3 de diciembre de 2025](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components), [11 de diciembre de 2025](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components))

En el puesto #2, {Ripple} es el recién llegado al TOP 5. Es un framework de UI completamente nuevo que combina lo mejor de React, Solid y Svelte. Cuenta con primitivas reactivas, una arquitectura basada en componentes y una sintaxis de plantillas.

Actualmente se encuentra en una fase temprana de desarrollo. React tiene Next.js, Vue.js tiene Nuxt, Svelte tiene SvelteKit, Solid tiene SolidStart...¿tendrá Ripple su propio meta-framework para gestionar el renderizado del lado del servidor?

{svelte} se mantiene en el puesto #3 por tercer año consecutivo. El sistema de reactividad [Runes](https://svelte.dev/docs/svelte/what-are-runes) de Svelte 5 ($state, $derived, $effect) se convirtió en la forma estándar de modelar el estado.