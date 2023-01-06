---
id: conclusion
language: en
---

2022 started with the chaos when two very popular packages were intentionally broken by their creator: [Faker.js and colors.js sabotaged](https://www.theregister.com/2022/01/10/npm_fakerjs_colorsjs/).

The fragility of the huge eco-system was demonstrated again when {lerna} a popular tool for mono-repos was declared as un-maintained... until Nrwl, the company behind {nx}, announced it was taking over stewardship of Lerna.

JavaScript is eating the world, you may have heard of this prophecy from 2009:

> Any application that can be written in JavaScript, will eventually be written in JavaScript

..._or in TypeScript_ we could add 13 years later as TypeScript is becoming the de-facto standard to write JavaScript (first class support by {deno} and {bun}, default setup of Next.js, out of the box support by Vite...).

The place taken by JavaScript in the code base and the tooling comes with some issues, for both developers and end-users:

- build times go out of control in large code bases
- the average size of JavaScript keeps increasing leading to poor performance

In 2022, we saw great innovations to solve these two types of problem at different layers of the stack.

The tooling improved with these solutions:

- {bun}, the champion of the year takes a drastic approach to speed installations and build times
- {rome} is now a linter and a formatter that aims to be the single tool to manage applications written in JS/TS.
- The building tool {vite}

For the performance in the browser, different patterns compete:

- Zero baseline JavaScript frameworks to deliver nearly no JS to the browser ({qwik} is leading the charge)
- [Partial hydration](https://ajcwebdev.com/2021/11/22/what-is-partial-hydration-and-why-is-everyone-talking-about-it/) to provide islands of interactivity to static pages ({astro})
- React Server Components (implemented by {nextjs} 13 and {gatsby}) to delegate more work on the server side.
- The [Progressively Enhanced Single Page Apps](https://www.epicweb.dev/the-webs-next-transition) architecture implemented by {remix} provides both great DX and performance in the browser without compromising any dynamic behavior

There is no silver bullet to solve these issue as the spectrum from static "pages" to fully dynamic "apps" is large.

The JavaScript landscape was once very fragmented: multiple browsers on one side, Node.js with its own CommonJS module system and its own APIs on the other side.

With the rise of the edge computing, there is now a strong trend to use everywhere the same subset of standardized APIs (fetch, HTTP Request and Response...).

Our guest writer Lee Robinson wrote a great summary of this trend in the article [Why I'm optimistic about JavaScripts](https://leerob.substack.com/p/why-im-optimistic-about-javascripts).

And we share the optimism of his conclusion!

> What an incredible time to be a web developer.


