---
id: nodejs-framework
language: en
---

The boundary between front-end and backend frameworks is a bit blurry as there is a strong trend to do more things on the server (including rendering and routing) compared to the SPA approach, where the backend is only responsible for the API. So this section includes full-stack frameworks, meta frameworks and backend frameworks.

#### Next.js

Like last year, {nextjs} leads the rankings, the version 13 brought big features including the React Server Components and a new filesystem structure using the `app` folder that lets developers colocate their code related to their features and handle nested routes in a powerful way.

#### tRPC

The biggest change is the rise of {trpc}, in second.
Forget about REST versus GraphQL: there is also the [JSON RPC 2.0 protocol](https://en.wikipedia.org/wiki/JSON-RPC) that powers {trpc}.
It really shines with its feature to import the types defined in the server from the client, to provide "end-to-end type safety".

It's worth mentioning the project {t3-stack} that combines tRPC, Next.js and {tailwind-css} in a popular boilerplate (number 16 in the overall rankings).

#### Astro

In third {astro} burst into the scene in 2021 as a static site generator and made the concept of partial hydration popular.

The Astro team's meticulous attention to creating smooth developer experiences is highlighted with [the release of Astro 1.0](https://astro.build/blog/astro-1/).

The "baked-in" integration of the new SSR support with any frontend tool (like React and SCSS) makes web app development feel too crisp!

#### Remix

In fourth, {remix} keeps growing at a fast pace. It was open sourced in 2021 and just one year later it was [acquired by Shopify](https://remix.run/blog/remixing-shopify).

In the blog post [The Web Next Transition](https://www.epicweb.dev/the-webs-next-transition) Kent C. Dodds did a great job to explain the patterns that makes Remix special.

Instead of relying on static generation of pages, Remix leverages distributed computing and native browser features to deliver great performance in the browser and an amazing Developer Experience.
