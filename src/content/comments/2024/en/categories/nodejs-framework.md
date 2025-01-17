---
id: nodejs-framework
language: en
---

At number one, **{Payload}** is a versatile open-source CMS that installs directly into any Next.js app. The tight integration with the Next.js App Router makes it easy to set up an admin panel directly inside an existing app, without having to create a new app for admin users.

Originally made for MongoDB, it now supports Postgres and SQLite thanks to {drizzle-orm} integration under the hood. It provides its own ORM used to set up the data structure and access-control rules at a higher level, and it includes powerful features such as bulk upload of media files. Check the announcement about [Payload 3](https://payloadcms.com/blog/payload-30-the-first-cms-that-installs-directly-into-any-nextjs-app) for more details.

At two, **{nextjs}** remains the most popular full-stack framework. The [version 15](https://nextjs.org/blog/next-15) release supports React 19 and brings performance improvements, leveraging the new Cache API, as well as enhanced developer experience (DX) thanks to the full adoption of Turbopack as the build tool.

The newcomer in the category is the web server **{Hono}**, taking the third spot. It can be seen as a modern replacement for {Express} (ranked 13th despite being 15 years old!) and is capable of running in multiple JavaScript runtimes: Node.js, of course, but also Deno, Bun, and serverless environments like Lambda or Cloudflare Workers. It stands out for its incredibly small footprint. Read [the story from its creator](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/).

At four, **{astro}** has become a versatile solution for building content-heavy applications. The [version 5](https://astro.build/blog/astro-5/) release introduced a new Content Layer, enabling type-safe data fetching from any source—whether it’s from the file system or external APIs.

I’ve used Astro to build this site, and I’m impressed by the DX (the CLI that calls you an astronaut is so cute!) and the exceptional web performance it delivers.
