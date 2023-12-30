---
id: react
language: ja
---

まもなくReact18がリリースされます。
既に[RC版](https://github.com/reactwg/react-18/discussions/9)を触ることは可能で、[Automatic Batchingによるレンダリング削減](https://github.com/reactwg/react-18/discussions/21)や、[SSRのSuspenseサポート](https://github.com/reactwg/react-18/discussions/22)など、すぐに利用できる改善がいくつもあります。

React18は待望のConcurrent Renderingが実装され、大きな破壊的変更なしに[Suspense](https://github.com/reactwg/react-18/discussions/47#discussioncomment-847004)が刷新されました。
[startTransition](https://github.com/reactwg/react-18/discussions/41)など一部の機能は18.0リリース当初から使用可能になる予定です。
しかし、[昨年のRising Star](https://risingstars.js.org/2020/en#section-react)で紹介した[Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)等については、もう少し待つ必要がありそうです。

Reactはブラウザでもサーバでも進化を続けており、[React Nativeのプラットフォーム構想](https://reactnative.dev/blog/2021/08/26/many-platform-vision)も進行中で、ますますユビキタスな存在になろうとしています。
