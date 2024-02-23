---
id: react
language: ko
---

2023년에는 React Server Component의 등장으로 리액트는 세 번째 부흥기를 맞이했습니다.

React 코어 팀과 Vercel은 협력하여 처음으로 안정적인 [Next.js 13.4 App Router](https://nextjs.org/blog/next-13-4)를 배포했습니다. 흥미진진한 혁신을 주도하고 그에 따른 리소스를 배포했음에도 불구하고, Vercel은 React 코어 팀과의 특권적 관계와 실험에 대한 조기 접근으로 상당한 비판을 받았습니다. 2023년 초, Next.js 문서에서 새로운 리액트 기능이 먼저 문서화되는 것을 흔히 볼 수 있었습니다. 커뮤니티는 [fetch()' API의 extension](https://nextjs.org/docs/app/api-reference/functions/fetch)에서와 같은 특정 설계 결정에 감사하지 않았습니다([현재 백트래킹 중](https://twitter.com/leeerob/status/1733154383410684148)). App Router의 안정성과 개발 서버의 성능에 대한 불만도 흔하게 볼 수 있었습니다. 그럼에도 불구하고 React Server Component 얼리 어답터들은 번들 크기가 더 작고 코드가 크게 간소화되는 등 많은 발전들도 이야기 하고 있습니다.

[React 팀은 새로운 실험적 기능에 대한 롤아웃 전략을 분명히 했습니다](https://react.dev/blog/2023/05/03/react-카나리). 프레임워크가 카나리 버전을 채택하는 것에 대해 큰 단점은 없으며, 이 버전의 변경 사항은 문서화됩니다. 훌륭한 [React 문서 업데이트](https://github.com/reactwg/server-components/discussions/7), 최신 API([useFormState](https://react.dev/reference/react-dom/hooks/useFormState), [use server](https://react.dev/reference/reference/react-dom/usage-server))로 한 해를 마무리했습니다.

또한 [Next.js 14](https://nextjs.org/blog/next-14)에서 안정적으로 구현된 새로운 React 코어 기능인 [Server Actions](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-act)의 등장도 있었습니다. Server Actions는 Remix의 철학과 유사하게 [진보적 향상](https://react.dev/reference/react-dom/form-submission-error-with-with-with-server-script)을 염두에 두고 설계되었습니다.

2024년에는 다른 프레임워크에서 React Server Component를 채택하는 것을 볼 수 있습니다:

- [Remix가 로드맵에 React Server Component를 추가 했습니다.](https://twitter.com/ryanflorence/status/1729274387671760936)
- Expo의 서버측 기능 소개 및 [React Server Component 지원 계획 공개](https://blog.expo.dev/expo-router-v3-beta-is-ab52baf1e3e)
- [Redwood는 React Server Components에 올인을 했습나다.](https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc)
- Waku는 새로운 React Server Component를 지원하는 [미니멀 React 프레임워크](https://waku.gg/blog/introducing-waku) 입니다.
- Docusaurus는 [정적 React Server Component를 빌드 타임에 렌더링](https://github.com/facebook/docusaurus/issues/9089)하는 계획을 가지고 있습니다.

[곧 배포될](https://twitter.com/acdlite/status/1719474730363662473) React 19을 간절히 기다리고 있습니다.
