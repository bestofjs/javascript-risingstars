---
id: framework
language: ko
---

#### React

React는 2023년에도 자바스크립트 생태계에서 선두주자의 위치를 유지하고 있으며, 이는 2021년과 2022년에도 지속되고 있는 추세입니다.

10주년을 맞이한 리액트는 [다큐멘터리](https://www.youtube.com/watch?v=8pDqJVdNa44)를 통해서 그 인기에 대한 비결을 알려주고 있습니다!

그러나 React에 회의론자가 없는 것은 아닙니다. 일부에서는 React를 과거의 유물로 보기도 하며, 이는 이 [기사](https://joshcollinsworth.com/blog/antiquated-react)에서 전문적으로 탐구한 감정이며, 또한 대안적 해결책을 탐구합니다. 반대로 지지자들은 React의 놀라운 적응력과 재창조 능력을 높게 평가합니다.

한 가지 쟁점은 {solid} 또는 {preact}와 같은 라이브러리에서 사용하는 반응성 처리 메커니즘인 "signal"의 부재를 중심으로 다루지만, 리액트 유저들은 데이터 흐름이 제공하는 예측 가능성을 높이 평가합니다.

[트위터](https://twitter.com/devongovett/status/1629540226589663233)에서 Parcel의 제작자인 Devon Govett은 신호에 대해 다음과 같이 밝혔습니다:

> 상태 함수로서 UI의 단순성은 업데이트가 예측 불가능하게 흘러갈 때 상실됩니다.

시그널에 대해 더 알고 싶다면 [시그널의 진화](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)에서 포괄적인 탐구를 읽어주시기 바랍니다.

#### htmx

{htmx}에는 HTML 페이지에 상호작용성을 제공하기 위해 다른 접근 방식을 취하는 라이브러리가 있습니다. 개발자는 여러 줄의 자바스크립트 코드를 작성하는 대신 특정 속성을 가진 HTML을 향상시켜 실시간 상호작용성과 동적 업데이트를 가능하게 합니다.

클라이언트에서 JSON을 처리하는 대신 HTML의 일부 블록을 서버에 전송하도록 요청하는 방식이 추세의 일부이기 때문에 파일 크기가 작고 기존 서버 측 프레임워크와 원활하게 통합된다는 점에서 찬사를 받았습니다.

{alpinejs}는 같은 공간의 "태깅 라이브러리"에서 인기 있는 솔루션입니다(올해 13위).

#### Svelte

Svelte의 인기는 계속 증가하고 있고 종종 React의 현대적인 대안으로 여겨집니다.
상태 반응성을 다룰 때 "pain 포인트"를 일부 해결하기 위해 [runes](https://svelte.dev/blog/runes)를 도입하는 등 "프로젝트 역사상 가장 기대되는 릴리스"인 Svelte 5는 큰 변화를 불러들이고 있습니다. 이 짧은 [영상](https://www.youtube.com/watch?v=RVnxF3j3N8U)에는 룬에 의해 해결된 문제를 잘 설명합니다.

Svelte는 올해에 수 많은 논쟁을 일으켰습니다(예: [Hacker News](https://news.ycombinator.com/item?id=35892250)). Svelte 팀은 타입스크립트와 관련된 추가적인 복잡성과 단점을 방지하면서도 타입스크립트의 장점을 제공하기 위해 타입스크립트 대신 JSDoc 주석이 포함된 자바스크립트를 사용하기로 결정했습니다.

#### Other frameworks updates

- [Million v3](https://www.builder.io/blog/qwik-v1)은 React 컴포넌트를 초기 자바스크립트의 속도로 실행할 수 있도록 지원하는 가벼운 라이브러리입니다.
- [Angular 17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)은 대폭적인 성능 향상, 새로워진 문서화, 새로운 브랜딩을(로고에 적합한 색상 포함) 소개합니다.
- [Qwik](https://www.builder.io/blog/qwik-v1)이 v1에 도달한 것은 지난 4월 입니다. 제로 JS(initially)를 제공하는 동시에 즉각적으로 상호작용하는 HTML을 제공해 "재사용 가능한" 앱을 구축하는 프레임워크 입니다.
