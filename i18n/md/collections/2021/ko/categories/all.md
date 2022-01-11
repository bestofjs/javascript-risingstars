---
id: all
language: ko
---

### 상위 3위

2021년 가장 유행했던 프로젝트는 {zx}입니다, Google에서 새롭게 만든 도구로 JavaScript나 TypeScript로 간단하게 커맨드 라인 스크립트를 적을 수 있습니다.

기본적인 사용 방법은 코드에 bash 커맨드 (`ls`, `cat`, `git` 등등... 이런 것들!)을 넣어 쓸 수 있습니다. [JavaSciprt 템플릿 리터럴](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)를 이용해서 `await` 할 수도 있습니다.

또한, 유명한 패키지도 여러개 포함되어 있습니다.

- [node-fetch](https://github.com/node-fetch/node-fetch) 브라우저 feach API와 같은 것이 가능합니다
- [fs-extra](https://github.com/jprichardson/node-fs-extra) 파일 시스템 조작이 가능합니다.
- [globby](https://github.com/sindresorhus/globby) 유저 친화적인 패턴매칭이 가능한 glob입니다.

2위는 {vite}입니다.
{esbuild} 컴파일러를 사용하였으며, 우수한 성능을 보이는 빌드 도구입니다. 애초에 Vue.js 전용으로 만들어졌지만, 지금은 {react}, {svelte}, {lit} 등 주요한 프레임워크에도 사용할 수 있습니다.

3위는 {nextjs}입니다.
React 생태계의 "메타 프레임워크"에서 선도하는 위치를 유지중입니다.

### Tauri

5위 {tauri}는 Web 기술을 사용해 데스크탑 애플리케이션을 만드는 도구입니다.

{electron}와 달리, Rust로 적혀있어 실행할 때 Node.js가 필요하지 않은 것이 특징입니다.
5월에 버전 1.0 [베타가 출시됐습니다](https://dev.to/tauri/announcing-tauri-beta-more-efficient-crossplatform-apps-with-better-features-1nbd).

### 볼만한 것들

상위 10위에 포함되어있지 않지만, {astro}는 주목받은 프로젝트 중 하나입니다.
더 적은 JavaScript로 더 빠른 로딩을 실현할 수 있는 도구입니다.

개념은 SSG에 가깝지만, Astro는 "islands"라는 것으로 동적인 부분을 페이지에 포함할 수 있는 것이 특징입니다.
또한, 클라이언트에서 동적 컴포넌트를 렌더링할 때, 다양한 전략을 선택할 수 있습니다.

- 페이지가 읽힐 때
- 우선순위가 낮은 컴포넌트인 경우, idle 상태일 때(추적 고려)
- [Intersection Observer API](https://devdocs.io/dom/intersection_observer_api)를 사용하여 감시

그리고 Astro 최대 특징은 React, Vue.js, Svelte 등 어떤 프레임워크와도 조합할 수 있다는 것입니다.
