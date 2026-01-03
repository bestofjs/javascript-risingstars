---
id: framework
language: en
---

{react} regained its crown from {htmx}, which had topped the category in 2024.

There were interesting debates about the fact that React is 12 years old and whether more modern alternatives like {solid} or {svelte} may be suitable for new projects. The fact that LLMs are trained with React codebases creates a situation that makes the emergence of alternative frameworks more difficult. Check out [how React won by default](https://www.lorenstew.art/blog/react-won-by-default/).

Nevertheless, great improvements came with React 19, which brings many new features such as the `Activity` API and better hooks to manage events triggered by the user.

Speaking of effects, [an outage occurred](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/) when Cloudflare DDoS'd themselves because of a `useEffect` making infinite calls to their API from their dashboards.

React started as a UI library, but the move to the server and the adoption of React Server Components is the biggest change over the previous years.

It comes with great power but also great responsibility and risks, as we have seen with several critical vulnerabilities such as [React2Shell](https://react2shell.com/), a critical remote code execution (RCE) vulnerability in React Server Components that required urgent patch releases of React. ([December 3, 2025](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components), [December 11, 2025](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components))

At #2, {Ripple} is the newcomer in the TOP 5. It's a brand new UI framework that combines the best of React, Solid, and Svelte. It has reactive primitives, a component-based architecture, and a template syntax.

Currently in early development. React has Next.js, Vue.js has Nuxt, Svelte has SvelteKit, Solid has SolidStart... will Ripple have its own meta framework to handle server-side rendering?

{svelte} is at #3 for the third year in a row. Svelte 5’s [Runes](https://svelte.dev/docs/svelte/what-are-runes) reactivity system ($state, $derived, $effect) became the standard way to model state.
