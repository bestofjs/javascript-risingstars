---
id: framework
language: zh
---

{react}从{htmx}手中重新夺回了桂冠，htmx在2024年位居该类别榜首。

关于React的年龄以及{solid}或{svelte}等替代方案是否更适合新项目的争论，因LLM被训练使用React代码库而变得更加复杂，这使得替代方案更难获得势头。参见[React是如何默认获胜的](https://www.lorenstew.art/blog/react-won-by-default/)。

[React 19](https://react.dev/blog/2025/10/01/react-19-2)引入了重大改进，包括`Activity` API和用于管理用户事件的增强钩子。

说到副作用，[发生了一次中断](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/)，Cloudflare因为仪表板上的一个`useEffect`无限调用他们的API而对自己进行了DDoS攻击。

React通过React服务器组件向服务器端转移，标志着近年来最大的变化，但这伴随着巨大的力量和风险，如[React2Shell](https://react2shell.com/)等关键漏洞所示，这是React服务器组件中的一个远程代码执行(RCE)漏洞，需要紧急补丁发布。（[2025年12月3日](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)，[2025年12月11日](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)）

排名第2的是{Ripple}，这是TOP 5中的新面孔。这是一个全新的UI框架，结合了React、Solid和Svelte的最佳特性。它具有响应式原语、基于组件的架构和模板语法。

目前处于早期开发阶段。React有Next.js，Vue.js有Nuxt，Svelte有SvelteKit，Solid有SolidStart……Ripple会有自己的元框架来处理服务器端渲染吗？

{svelte}连续第三年排名第三。Svelte 5的[Runes](https://svelte.dev/docs/svelte/what-are-runes)响应式系统($state, $derived, $effect)已成为建模状态的标准方式。