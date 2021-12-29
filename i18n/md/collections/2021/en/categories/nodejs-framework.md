---
id: nodejs-framework
language: en
---

To build resilient and performant applications, the main UI frameworks have their own "meta framework" to build modern web applications, providing features like routing, server-side rendering, static generation of pages ahead of time, optimized builds for production...

- React has {nextjs}, number 1 of the category, that can be considered as a pioneer in this space
- Vue.js has {nuxt}, now split between versions for Vue.js v2 and v3
- Svelte has {sveltekit}

{remix}, a full stack framework to build React applications, is the newcomer of the category. It's one of the biggest stories of the year. It was created by the authors of [React Router](https://reactrouter.com/) and it was only available to paying supporters until October.

The project got a lot of traction (and $3M in seed funding too) since it was made public. Its motto is clear: "Web Fundamentals, Modern UX" as its APIs follow as much as possible the web standards (HTTP responses, form submissions...). It handles nested routes in a very smart way, being able to load data needed by all the components on a give page in an efficient way, instead of generating a waterfall of HTTP calls that often leads to a lot of spinner indicators on the screen.

Besides these meta frameworks, at the position number 2, {nest} is the leader of the more conventional server-side Node.js frameworks, not tight to any UI library.

At the position number 3, {strapi} is the leader of the "headless CMS", those applications that provide a rich dashboard to let users manage data and a modern API to let developers build anything from data. The latest version (4) provides a design system built on top of a React components library.
