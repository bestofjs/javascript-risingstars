---
id: framework
language: zh
---

在 2022 年，React 仍然是冠军，但如果考虑到 Vue.js 的星星在 v2 和 v3 版本的仓库中被分割，那么 Vue.js 的受欢迎程度也很接近了。

主要的变化是 {qwik} 跃升至第 2 位。Qwik 与 React 类似，它也使用 JSX 编写模板组件，但主要的区别是专注于在浏览器中执行最少的 JavaScript。

它是 “零基线 JavaScript” 框架趋势的一部分。网站和应用程序经常被繁重的 JavaScript 资产所臃肿，影响了浏览器的性能：即使页面在服务端渲染，用户也必须等待 JavaScript 被加载、解析和执行，才能与页面互动。

Qwik 没有依靠 [hydration](https://www.builder.io/blog/hydration-is-pure-overhead) 为服务端生成的页面增加互动性，而是使用一种叫做 resumability 的技术来提供即时互动的 HTML。它的原理在 HTML 中序列化应用程序的状态。

该项目由 [Miško Hevery](https://twitter.com/mhevery) 领导，他是 AngularJS 的创建者，AngularJS 的口号是 “为 Web 应用增强 HTML”，而Qwik是 "HTML 优先框架"...不知为何，它们在良好的古老 HTML 之上构建应用的意图是一样的。
