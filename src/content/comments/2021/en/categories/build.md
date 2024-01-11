---
id: build
language: en
---

In 2021, the already existing trends have strengthened.

Native ES modules adoption continues. {vite} has been widely adopted (faster than {snowpack}), leading to a new ecosystem of tools (like {vitest}, a modern ES-based test framework) ES modules are also adopted in the Node.js ecosystem, but it's not always easy. TypeScript even [delayed ES modules support in Node.js](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#esm-nodejs).

More frontend tools than ever are being built in other languages (see [awesome-js-tooling-not-in-js](https://github.com/RobinCsl/awesome-js-tooling-not-in-js)), mostly for performance reasons.

Lee Robinson wrote that [Rust Is The Future of JavaScript Infrastructure](https://leerob.io/blog/rust). Rust is particularly interesting because of its great performances and interoperability with JavaScript. [NAPI-RS](https://napi.rs/) allows JavaScript and Rust to communicate with each other without any serialization cost. Next.js is [betting on SWC](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler), an extensible Rust compiler that allows them to port the most popular Babel plugins to Rust.

{parcel} 2 has been [released with a new Rust compiler](https://parceljs.org/blog/v2/). The {rome} toolchain is also [being rewritten in Rust](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust), but one of its founders [Jamie Kyle just left the company](https://twitter.com/buildsghost/status/1471523960479121408) without much information.

Rust is clearly the leading non-JS language, but it's not the only one offering great performance: [Bun](http://bun.sh/) is written in Zig. {turborepo} and {esbuild} are written in Go. Note that [Evan Wallace left Figma](https://twitter.com/evanwallace/status/1475685056454836229): it may give him more time to work on esbuild.

In the monorepo space, [Lerna](https://github.com/lerna/lerna) remains widely used but is not very well maintained. [Nx](https://nx.dev/), a monorepo tool that helps reduce build time significantly, has been [growing fast](https://twitter.com/victorsavkin/status/1476618225551036427). Its newer competitor {turborepo} has benefited from great marketing after [being acquired by Vercel](https://vercel.com/blog/vercel-acquires-turborepo).
