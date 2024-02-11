---
id: react
language: ko
---

2023년에는 React Server Components의 등장으로 React가 세 번째 시대를 맞이했습니다.

React core 팀과 Vercel은 협력하여 최초의 안정적인 구현인 [Next.js 13.4 App Router](https://nextjs.org/blog/next-13-4)를 출시했습니다. 흥미진진한 혁신을 주도하고 그에 따른 리소스를 배포했음에도 불구하고, Vercel은 React core 팀과의 특권적 관계와 실험 기능에 대한 조기 접근으로 상당한 비판을 받았습니다. 2023년 초, Next.js 문서에서 새로운 React 기능이 먼저 문서화되는 것을 흔히 볼 수 있었습니다. 커뮤니티는 [[fetch()' API의 extension](https://nextjs.org/docs/app/api-reference/functions/fetch), 에서 [현재 역추적 중]](https://twitter.com/leeerob/status/1733154383410684148) 와 같은 특정 설계 결정에 감사하지 않았습니다. App Router의 안정성과 개발 서버의 성능에 대한 불만도 흔하게 볼 수 있었습니다. 그럼에도 불구하고 React Server Components 얼리 어답터들은 번들 크기가 더 작고 코드가 크게 간소화되는 등 많은 유망한 이점을 보고했습니다.

리액트 팀 [새로운 실험 기능에 대한 위치 및 롤아웃 전략을 clarified합니다] (https://react.dev/blog/2023/05/03/react-카나리). 프레임워크가 카나리아 버전을 채택해도 무방하며, 이 버전의 변경 사항은 문서화됩니다. 또한 문서화도 따라잡았고, 훌륭한 [리액트 문서 업데이트] (https://github.com/reactwg/server-components/discussions/7), 최신 API([useFormState])(https://react.dev/reference/react-dom/hooks/useFormState), [[형태]](https://react.dev/reference/react-dom/compon/ents/form], [[사용 서버]](https://react.dev/reference/reference/react-dom/usage-server)로 한 해를 마무리했습니다.

또한 [Next.js 14](https://nextjs.org/blog/next-14), 에서 안정적으로 구현된 새로운 React 코어 기능인 [Server Actions](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-act)의 등장도 보았습니다. 서버 Actions는 Remix의 철학과 유사하게 [progress적 향상](https://react.dev/reference/react-dom/form-submission-error-with-with-with-server-script)을 염두에 두고 설계되었습니다.

2024년에는 다른 프레임워크에서 React Server Components를 채택하는 것을 볼 수 있습니다. 특히 다음과 같습니다:

- Remix 추가 [Relact Server Components to the Roadmap] (https://twitter.com/ryanflorence/status/1729274387671760936)
- Expo 서버측 기능 소개 및 [크로스 플랫폼 유니버설 리액트 서버 컴포넌트 지원 계획 공개] (https://blog.expo.dev/expo-router-v3-beta-is-ab52baf1e3e)
- Redwood는 [React Server Components에 올인]을 걸고 있습니다. (https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc)
- Waku는 새로운 [React Server Components를 지원하는 minimal React 프레임워크] (https://waku.gg/blog/introducing-waku)
- Docusaurus는 [build time에서 static React Server Components render](https://github.com/facebook/docusaurus/issues/9089) 를 계획하고 있습니다

[곧] (https://twitter.com/acdlite/status/1719474730363662473) 가 될 리액트 19를 간절히 기다리고 있습니다.
