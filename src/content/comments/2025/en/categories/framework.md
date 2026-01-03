---
id: framework
language: en
---

{react} regained its crown from {htmx}, which had topped the category in 2024.

Debates about React's age and whether alternatives like {solid} or {svelte} are better for new projects are complicated by LLMs being trained on React codebases, making it harder for alternatives to gain traction. See [how React won by default](https://www.lorenstew.art/blog/react-won-by-default/).

[React 19](https://react.dev/blog/2025/10/01/react-19-2) introduced significant improvements, including the `Activity` API and enhanced hooks for managing user events.

Speaking of effects, [an outage occurred](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/) when Cloudflare DDoS'd themselves because of a `useEffect` making infinite calls to their API from their dashboards.

React's shift to the server with React Server Components marks the biggest change in recent years, but it comes with great power and risks, as seen with critical vulnerabilities like [React2Shell](https://react2shell.com/), a remote code execution (RCE) vulnerability in React Server Components that required urgent patch releases. ([December 3, 2025](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components), [December 11, 2025](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components))
At #2, {Ripple} is the newcomer in the TOP 5. It's a brand new UI framework that combines the best of React, Solid, and Svelte. It has reactive primitives, a component-based architecture, and a template syntax.

Currently in early development. React has Next.js, Vue.js has Nuxt, Svelte has SvelteKit, Solid has SolidStart... will Ripple have its own meta framework to handle server-side rendering?

{svelte} is at #3 for the third year in a row. Svelte 5’s [Runes](https://svelte.dev/docs/svelte/what-are-runes) reactivity system ($state, $derived, $effect) became the standard way to model state.
