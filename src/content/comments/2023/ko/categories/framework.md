---
id: framework
language: ko
---

#### React

리액트는 2023년에도 자바스크립트 생태계에서 선두주자의 위치를 유지하고 있으며, 이는 2021년과 2022년에도 지속되고 있는 추세입니다.

10주년을 맞이한 리액트는 [다큐멘터리](https://www.youtube.com/watch?v=8pDqJVdNa44)에서 인기에 대해 많은 것을 알려줍니다!

그러나 리액트에 회의론자가 없는 것은 아닙니다. 일부에서는 리액트를 과거의 유물로 보기도 하며, 이는 [이 기사](https://joshcollinsworth.com/blog/antiquated-react), 에서 전문적으로 탐구한 감정이며, 이는 또한 대안적 해결책을 탐구합니다. 반대로, 지지자들은 리액트의 놀라운 적응력과 재창조 능력에 대해 칭찬합니다.

한 가지 쟁점은 {solid} 또는 {preact}와 같은 라이브러리에서 사용하는 반응성 처리 메커니즘인 "signal"의 부재를 중심으로 다루지만, React 애호가들은 React의 데이터 흐름이 제공하는 예측 가능성을 높이 평가합니다.

[a tweet](https://twitter.com/devongovett/status/1629540226589663233) 에서 Parcel의 제작자인 Devon Govett은 신호에 대해 다음과 같이 밝혔습니다:

> 상태 함수로서의 UI의 단순성은 업데이트가 예측 불가능하게 흘러갈 때 상실됩니다.

신호에 대해 더 알고 싶다면 [신호의 진화](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob), 올해의 유행어 중 하나에 대한 포괄적인 탐구를 읽으십시오.

#### htmx

두 {htmx}에는 HTML 페이지에 상호작용성을 제공하기 위해 다른 접근 방식을 취하는 라이브러리가 있습니다. 개발자는 여러 줄의 자바스크립트 코드를 작성하는 대신 특정 속성을 가진 HTML을 향상시켜 실시간 상호작용성과 동적 업데이트를 가능하게 합니다.

클라이언트에서 JSON을 처리하는 대신 HTML의 일부 블록을 서버에 전송하도록 요청하는 "무선으로 HTML을 전송"하는 추세의 일부이기 때문에 파일 크기가 작고 기존 서버 측 프레임워크와 원활하게 통합된다는 점에서 찬사를 받았습니다.

{alpinejs}는 같은 공간의 "태깅 라이브러리"에서 인기 있는 솔루션입니다(올해 13위).

#### Svelte

세 살 때 스벨테의 인기는 계속 증가하고 있습니다. 그것은 종종 리액트의 현대적인 대안으로 여겨집니다.
상태 반응성을 다룰 때 "pain 포인트"를 일부 해결하기 위해 [runes](https://svelte.dev/blog/runes)를 도입하는 "프로젝트 역사상 가장 기대되는 릴리스"인 스벨테 5를 통해 큰 변화가 다가오고 있습니다. [이 짧은 비디오](https://www.youtube.com/watch?v=RVnxF3j3N8U) 는 룬에 의해 해결된 문제를 잘 설명합니다.

올해의 이야기 중 하나는 Svelte와 관련이 있으며 많은 논쟁을 일으켰습니다(예: [Hacker News](https://news.ycombinator.com/item?id=35892250)). Svelte 팀은 TypeScript와 관련된 추가적인 복잡성과 단점을 방지하면서도 TypeScript의 장점을 제공하기 위해 TypeScript 대신 JSDoc 주석이 포함된 자바스크립트를 사용하기로 결정했습니다.

#### Other frameworks updates

- [Million v3](https://백만.dev/blog/백만-3)은 "React Components를 원시 자바스크립트의 속도로 실행할 수 있도록 지원하는 경량 라이브러리입니다
- [Angular 17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b) 대폭적인 성능 향상, 새로워진 문서화, 새로운 브랜딩(로고에 적합한 색상 포함) 소개
- [Qwik이 v1에 도달한 것은 지난 4월.](https://www.builder.io/blog/qwik-v1) 제로 JS(initially)를 제공하는 동시에 즉각적으로 상호작용하는 HTML을 제공하는 "재사용 가능한" 앱을 구축하는 프레임워크.
