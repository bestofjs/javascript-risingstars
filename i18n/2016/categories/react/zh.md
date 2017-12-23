React 是非常棒的 UI 库，但是基于现代 WEB 应用开发工作流创建 React 应用时仍然需要大量的配置，才能把所有的部分拼凑到一起，如何创建一个“真实”的 React 应用呢？各种 React 项目模板（boilerplates）和启动工具箱（starter kits）就是来解决这个问题的，典型的有下面几个：

#### {create-react-app}

Facebook 开源的，轻量级的解决方案，使用 {create-react-app} 创建 React 应用非常的简单。{create-react-app} 的作者 [Dan Abramov](https://github.com/gaearon) (也是 Redux 的作者，目前供职于 Facebook) 在功能丰富和简单可靠之间取得了很好的平衡，没有酷炫的样式解决方案 (仅需要纯粹的 CSS) ，没有服务端渲染，但是 React 应用开发的其他方面都浑然一体，开发者体验也非常棒。

相比于同类工具，如果你使用了 {create-react-app}，它会成为你项目的依赖，所有的黑科技都是不可见的，你只能看到你自己的应用代码，你可以随时更新这个依赖。

#### {react-boilerplate}

{react-boilerplate} 则包含了 React 应用所需的一切，包括 {redux} 以及基于 Web Worker 实现的离线功能。使用它可以创建“渐进式 Web 应用”（亦称“PWA”），如果想了解更多 PWA 的知识，可以阅读 Nicolás Bevacqua 的 [这篇文章](https://ponyfoo.com/articles/progressive-app-serviceworker)。

#### {nextjs}

{nextjs}, 由来自 [Zeit](https://zeit.co/) 的 busy folks 创建，支持服务端渲染，可以用来创建 **universal** 应用（或者“同构应用”），直白的说，这种应用的前后端可以运行相同的代码。
