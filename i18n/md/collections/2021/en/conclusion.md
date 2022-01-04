---
id: conclusion
language: en
---

To build modern sites and applications, it seems we have entered the era of the meta frameworks: Next.js, Nuxt, SvelteKit... and the promising newcomer {remix}.

Famous members of the JavaScript community joined tech companies to work on these solutions:

- Kent C. Dodds joined the Remix team and speaks highly about how it enables him to "build amazing user experiences and still be happy with the code".
- It seems Vercel hired everyone else: Rich Harris, the creator of {svelte}, Sebastian Markbåge from the React core team and Jared Palmer and its now open source solution to manage monorepos ({turborepo})... it looks like a Dream Team!

About the tooling, the need for speed led to a shift towards languages like Rust and Go instead of JavaScript.

Lee Robinson made a strong statement: [Rust Is The Future of JavaScript Infrastructure](https://leerob.io/blog/rust) and we mentioned the rise of Rust language several times:

- {tauri} is built in Rust
- The project {rome} made a strong move [from JavaScript to Rust](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust)
- Next.js latest version (12) includes {swc} compiler, written in Rust

SWC is also used by {deno}, the server-side runtime that was the winner in 2020. And we can tell that [Deno is still a thing](https://blog.bitsrc.io/is-deno-still-a-thing-a-look-at-the-status-of-the-node-killer-884d47981d09)! It keeps receiving enhancements and [Deno Deploy](https://deno.com/deploy/docs) was made public: it's a solution to build and deploy serverless functions that run at the "edge", close to the users.

Speaking of serverless functions, edge computing was also an important theme in 2021. We have solutions like [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), [CloudFlare Workers](https://workers.cloudflare.com/) or [Netlify Edge](https://www.netlify.com/products/edge/edge-handlers/) to run backend code close to the users. Meta frameworks like Next.js or Remix take advantage of edge computing, making the integration of backend code in React applications a breeze.

Are we going to enter the Golden Age of JavaScript full-stack applications in 2022?
