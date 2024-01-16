---
id: react
language: zh
---

2023 年，随着 React Server Components 的出现，React 进入了第三个时代。

React 核心团队与 Vercel 合作发布了第一个稳定版本： [Next.js 13.4 App Router](https://nextjs.org/blog/next-13-4)。尽管引领了令人兴奋的创新并投入了大量资源，但 Vercel 因其与 React 核心团队的特殊关系以及对实验性功能的早期访问而受到了一些批评。2023 年初，经常可以看到新的 React 功能首先在 Next.js 文档中记录。社区对某些设计决策并不满意，例如 [拓展 `fetch()` API](https://nextjs.org/docs/app/api-reference/functions/fetch), 但是他们 [正在回溯](https://twitter.com/leeerob/status/1733154383410684148)。也经常看到对 App Router 的稳定性和其开发服务器性能的抱怨。尽管如此，React Server Components 的早期采用者报告了许多有希望的好处，例如更小的打包体积和大大简化的代码。

React 团队 [阐明了其对新实验性功能的立场和推出策略](https://react.dev/blog/2023/05/03/react-canaries)。框架可以采用 canary 版本，框架突破性的变更会被记录下来。他们也赶上了文档更新，以 [React Docs Update](https://github.com/reactwg/server-components/discussions/7) 结束了这一年, 彻底记录了最新的 API ([useFormState](https://react.dev/reference/react-dom/hooks/useFormState), [<form>](https://react.dev/reference/react-dom/components/form), [‘use server’](https://react.dev/reference/react/use-server) ...).

我们还看到了 [Server Actions](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action)的出现，这是 React 核心的一个新功能，首次在 [Next.js 14](https://nextjs.org/blog/next-14)中实现为稳定版本，为表单提交和突变实现了无缝的 RPC 调用。类似于 Remix 的理念，Server Actions 设计时考虑到了 [渐进式增强](https://react.dev/reference/react-dom/components/form#display-a-form-submission-error-without-javascript).

2024 年，我们将很兴奋的看到其他框架将采用 React Server Components ，尤其是：

- Remix 已将 [React Server Components 添加到其路线图](https://twitter.com/ryanflorence/status/1729274387671760936)
- Expo 引入了服务器端功能，并 [公布了其支持跨平台通用 React Server Components 的计划](https://blog.expo.dev/expo-router-v3-beta-is-now-available-eab52baf1e3e)
- Redwood 正在 [全力以赴使用 React Server Components](https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc)
- Waku 是一个新的 [支持 React Server Components 的最小 React 框架](https://waku.gg/blog/introducing-waku)
- Docusaurus 计划 [在构建时渲染静态 React Server Components](https://github.com/facebook/docusaurus/issues/9089)

我们热切地等待着 React 19，它应该很快就会 [发布](https://twitter.com/acdlite/status/1719474730363662473)。
