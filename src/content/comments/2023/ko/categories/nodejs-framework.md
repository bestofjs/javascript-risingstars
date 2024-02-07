---
id: nodejs-framework
language: ko
---

This year too {nextjs} is the leading project in the backend/fullstack category.

The [version 14](https://nextjs.org/blog/next-14) focuses on improving server actions and introduces a new Partial Preview rendering mode.

With React Server Components, developers can build web applications with new paradigms that can simplify drastically the code: fetching data directly from a component that is made `async` and mutating data by binding forms to server actions.

A lot has been said about [this presentation](https://www.youtube.com/watch?v=9CN9RCzznZc&t=0s) that showcases making an SQL request directly from a component, but people may have missed the point: React Server Components can behave like self-contained components that can be dropped any where in your application, without any tedious wiring, the video does a great job to help building the new mental model made possible by RSC, showing a mix of server and client components that work seamlessly.

At two, {astro} keeps climbing the rankings. Besides the original concept (generate ultra fast static sites that run without JavaScript and add interactivity with islands using the UI framework of your choice) it can be used to generate pages dynamically too.

I was impressed by the simplicity the templating system of `.astro` files (very close to JSX) and by the great DX (the CLI is a beauty!).

[Version 4](https://astro.build/blog/astro-4/) introduces a new toolbar for development, automatic i18n routing and a new View Transition API to improve the UX.
