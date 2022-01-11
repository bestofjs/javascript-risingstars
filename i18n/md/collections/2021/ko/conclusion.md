---
id: conclusion
language: ko
---

현대적인 사이트 제작은 이제 메타 프레임워크의 시대로 돌입한 것 같습니다.
Next.js, Nuxt, SvelteKit 그리고 새로운 {remix} 등이 준비되어 있습니다.

JavaScript 커뮤니티의 유명한 사람들은 다양한 해결책에 임하기 위해서 기술기업에 들어갔습니다.

- Kent C. Dodds는 Remix 팀에 들어갔습니다.
Remix를 "우수한 사용자 체험과 코드에 만족한다."며 가능성이 높게 평가했습니다.

- Vercel은 많은 사람을 고용했습니다.
{svelte}의 개발자 Rich Harris, React 코어 팀의 Sebastian Markbåge, Jared Palmer 그리고 {turborepo}...마치 갈락티코 같네요!

도구에 눈을 돌리면, 대부분이 속도를 위해 JavaScript에서 Rust, Go를 이동하고 있습니다.

Lee Robinson 씨가 [Rust는 JavaScript 인프라의 미래다](https://leerob.io/blog/rust) 몇 번이나 역설했습니다.

- {tauri}은 Rust로 만들었습니다.
- [Rome](https://rome.tools/)은 JavaScript에서 [Rust로 다시 쓴다](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust) 했습니다.
- Next.js의 새 버전인 버전 12에는 Rust로 만들어진 {swc} 컴파일러가 동봉되어 있습니다.

swc은 2020년 랭킹에서 우승한 서버사이드 런타임 {deno}에도 사용되고 있습니다.
거기에 [Deno는 당시보다 진화](https://blog.bitsrc.io/is-deno-still-a-thing-a-look-at-the-status-of-the-node-killer-884d47981d09)되었습니다.
[Deno Deploy](https://deno.com/deploy/docs)가 공개되었으며, 서버리스로 deploy할 수 있습니다.

서버리스라 하니, 엣지 컴퓨팅도 2021년의 중요한 주제였습니다.
[Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), [CloudFlare Workers](https://workers.cloudflare.com/), [Netlify Edge](https://www.netlify.com/products/edge/edge-handlers/) 같이 사용자 곁에서 백엔드 코드를 실행하는 해결책이 여럿 등장했습니다.
Next.js, Remix 같이 메타 프레임워크는 엣지 컴퓨팅을 활용하여, 백엔드 코드와 React 애플리케이션의 통합을 용이하게 했습니다.

2022년, 우리는 JavaScript 풀스택 애플리케이션 황금시대에 돌입한 것은 아닐까요?