---
id: react
language: ko
---

In 2023, we saw React enter its third era with the advent of React Server Components.

The React core team and Vercel collaborated to release the first stable implementation: [Next.js 13.4 App Router](https://nextjs.org/blog/next-13-4). Despite leading an exciting innovation and deploying consequent resources, Vercel received its fair share of criticism for its privileged relationship with the React core team and early access to experimental features. In early 2023, it was common to see new React features being documented first on the Next.js documentation. The community didn’t appreciate certain design decisions, such as the [extension of the `fetch()` API](https://nextjs.org/docs/app/api-reference/functions/fetch), on which they are [now backtracking](https://twitter.com/leeerob/status/1733154383410684148). It was also common to see complaints about the stability of the App Router, and the performance of its development server. Nevertheless, React Server Components early adopters reported many promising benefits, such as smaller bundle sizes and greatly simplified code.

The React team [clarified its position and rollout strategy for its new experimental features](https://react.dev/blog/2023/05/03/react-canaries). It is fine for frameworks to adopt canary versions, whose breaking changes will be documented. They have also caught up with documentation, ending the year with a great [React Docs Update](https://github.com/reactwg/server-components/discussions/7), thoroughly documenting the newest APIs ([useFormState](https://react.dev/reference/react-dom/hooks/useFormState), [<form>](https://react.dev/reference/react-dom/components/form), [‘use server’](https://react.dev/reference/react/use-server) ...).

We also saw the advent of [Server Actions](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action), a new React core feature first implemented as stable in [Next.js 14](https://nextjs.org/blog/next-14), enabling seamless RPC calls for form submissions and mutations. Similar to the philosophy of Remix, Server Actions are designed with [progressive enhancement in mind](https://react.dev/reference/react-dom/components/form#display-a-form-submission-error-without-javascript).

In 2024, it will be exciting to see other frameworks adopt React Server Components, notably:

- Remix added [React Server Components to its roadmap](https://twitter.com/ryanflorence/status/1729274387671760936)
- Expo introducing server-side features and [unveiling its plan to support cross-platform Universal React Server Components](https://blog.expo.dev/expo-router-v3-beta-is-now-available-eab52baf1e3e)
- Redwood is betting [All In on React Server Components](https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc)
- Waku is a new [minimal React framework supporting React Server Components](https://waku.gg/blog/introducing-waku)
- Docusaurus plans to [render static React Server Components at build time](https://github.com/facebook/docusaurus/issues/9089)

We are eagerly waiting for React 19, which should be [coming soon](https://twitter.com/acdlite/status/1719474730363662473).
