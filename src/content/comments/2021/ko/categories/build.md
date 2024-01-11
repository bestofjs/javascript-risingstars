---
id: build
language: ko
---

2021년은 기존의 경향이 강화된 해였습니다.

네이티브 ES modules를 선택하는 일이 계속되었습니다, {vite}가({snowpack}보다 빠름) 널리 선택되었습니다, Node.js 에코시스템에서도 {vitest} 같은 ES modules 프레임워크가 만들어졌습니다만 그리 순탄치는 않습니다.
TypeSciprt에서는 [ES modules 대응을 연기했다](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#esm-nodejs)할 정도입니다.

JavaScript 이외 언어로 만들어진 프론트엔드 도구가 [늘어가고 있습니다](https://github.com/RobinCsl/awesome-js-tooling-not-in-js), 이들은 주로 성능을 위함입니다.

Lee Robinson 씨가 [Rust는 JavaScript 인프라의 미래다](https://leerob.io/blog/rust) 글을 썼는데, Rust의 흥미로운 점은 우수한 성능과 JavaScript와 친화성입니다.
[NAPI-RS](https://napi.rs/)은 serialization(직렬화) 없이 JavaScript와 Rust 간의 통신을 할 수 있도록하며, Next.js는 [SWC에 걸었다](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler) 할 정도입니다.

{parcel}2는 [Rust 컴파일러를 얹어 출시](https://parceljs.org/blog/v2/)했습니다.

{rome}도 [Rust로 다시 쓴다](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust)했습니다만, 창립멤버중 하나인 [Jamie Kyle 씨가 아무 정보도 없이 회사를 떠났습니다](https://twitter.com/buildsghost/status/1471523960479121408).

Rust는 비JS 언어의 대표주자입니다만, 결코 유일한 것은 아닙니다.
우수한 성능을 발휘할 수 있는 언어는 다른 언어도 있으며, [Bun](http://bun.sh/)은 Zig로 쓰여져 있고. {turborepo}, {esbuild}는 Go로 쓰여져있습니다.

그러고보니 [Evan Wallace 씨가 Figma를 떠난](https://twitter.com/evanwallace/status/1475685056454836229)것 은, esbuild 개발에 시간을 더 할애하기 위함일 수도 있습니다.

monorepo 분야에는 [Lerna](https://github.com/lerna/lerna)가 가장 많이 사용중입니다만, 꽤 보수되지 않고 있습니다.
다음을 노려볼 만한 것으로, 빌드시간을 크게 단축해주는 모노레포 도구 [Nx](https://nx.dev/)가 [급성장중입니다](https://twitter.com/victorsavkin/status/1476618225551036427).
거기에 경쟁자라 볼 수 있는 {turborepo}가 [Vercel에 인수되어](https://vercel.com/blog/vercel-acquires-turborepo) 더욱 활발해 질 것입니다.