---
id: nodejs-framework
language: en
---

A newcomer wins the backend/fullstack category! {motia} represents a paradigm shift in backend engineering, unifying what traditionally required multiple separate frameworks into a single system. Instead of juggling different tools for APIs, background jobs, queues, workflows, streams, and AI agents, Motia provides one framework for your entire backend.

At its core, Motia uses a primitive called [Steps](https://www.motia.dev/docs/concepts/steps), a single abstraction that defines how code runs, when it runs, where it runs, and what it does. Each Step has a config (defining triggers, paths, schedules) and a handler (your business logic). Change the Step type, and the same pattern works for different use cases: API endpoints, event handlers, or cron jobs.

Steps can be written in TypeScript or Python. It also comes with built-in observability through the Workbench, a visual control panel to manage, debug, and observe runs, plus built-in state management and streaming capabilities.

The next four projects are the same as in 2024, besides Hono and Astro swapping positions.

{payload}, number one last year, is an hybrid between headless CMS and admin panel for Next.js. The biggest news is the [acquisition by Figma](https://payloadcms.com/posts/blog/payload-is-joining-figma), the ultimate goal being to lower the gap between design and code.

At #2, Next.js 16 introduced the [cached components](https://nextjs.org/blog/next-16#cache-components) to make caching more explicit and flexible. Developers can create static page shells that include dynamic content streaming from the server.

At #3, {astro} keeps shining as a versatile framework to build content-heavy applications (like your beloved JS Rising Stars!) with a great developer experience and a focus on performance.

At #4, {hono} became a standard for modern web servers (even if {express} is still a thing!), thanks to its lightweight core that runs anywhere (Node.js runtimes, Cloudflare workers...) and a rich eco-system of handlers and middlewares. Read about [the story of Hono](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/).

The biggest change in the category of the meta frameworks is the rise of [Tanstack Start](https://tanstack.com/start/latest), as one of the best alternatives to Next.js if you want to build a full-stack application on top of React.
