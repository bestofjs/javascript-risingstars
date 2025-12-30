---
id: conclusion
language: en
---

One of the biggest news of the year is [the acquisition of Bun](https://bun.com/blog/bun-joins-anthropic) by Anthropic, the company behind Claude Code and the Claude family of LLMs.

{bun} the one-in-all Javascript runtime was our champion in 2022. It's interesting to see how the sudden rise of LLMs caused the shift of the vision from building a cloud product (similar to what Deno offers with [Deno Deploy](https://deno.com/deploy)) to powering AI agents.

> AI coding tools are getting really good, really fast and they're using Bun's single-file executables to ship CLIs and agents that run everywhere.

Another news that matters for the JS community: [Lee Robinson](https://x.com/leerob) who was the face of Next.js for years (and our Guest Writer in 2020!) joined Cursor, providing educational content about AI to developers; see his [Learning Path](https://www.cursor.com/learn/), excellent for beginners.

Speaking of familiar faces in the Open-source community, Anthony Fu ({vite}, {vitest} and so many projects!), Daniel Roe and Sébastien Chopin ({nuxt}) joined Vercel, it looks like a good sign for the diversity of the frameworks considering the company is known for its focus on Next.js and React.

The announcement of [Remix 3](https://github.com/remix-run/remix/blob/main/README.md#welcome-to-remix-3) was a bold move as Remix creators (also the creators of React Router) decided to ditch React, betting more than ever on the web platform.
It does not mean Remix users will lose their favorite framework, Remix 2 has morphed into React Router framework.

An interesting inside article about how [React and Remix Choose Different Futures](https://laconicwit.com/react-and-remix-choose-different-futures/).

> React is following a path of stability, even if it means sacrificing complexity, while Remix is choosing simplicity as their primary goal.

The official release of Remix 3 will be a highlight of 2026, for sure.

Speaking of React, the directive pattern caused some controversy this year. Directive pattern started with `use strict` a long time ago, way before React was born and the topic became hot recently.

- React Server Components (RSC) introduced `use client` to tell the compiler a component is client-side only.
- `use server` exposes functions as HTTP end-points called Server Actions
- `use cache`, introduced by Next.js 16, sets up caching at the page, component or function level
- The brand new [Workflow](https://useworkflow.dev/) project (created two months ago) takes directive to the next level with `use workflow` and `use step` that have an impact in the infra layer, allowing the creation of powerful async workflows that can run for long periods of time.

These directives rely on build-time conventions and not explicit runtime contracts, generating interesting discussions about the future of the language that is now 30 years old!
Read about [Directives and the Platform Boundary](https://tanstack.com/blog/directives-and-the-platform-boundary#when-directives-look-like-the-platform-developers-treat-them-like-the-platform) from Tanner Linsley (the man behind the TanStack!)

What to expect in 2026? Mastering agent workflows seems to be a must-have skill for developers, in the same time we don't want to surrender all control to AI and compromise with quality and clean code.
Finding the right balance will be the key!
