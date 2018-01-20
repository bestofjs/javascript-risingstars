构建工具分类中的排行冠军是 {parcel}，这或许是今年最大的惊喜，作为一个 8 月份才在 GitHub 上发布的新项目却已达到 14K 个 star 的关注度。

{parcel} 不仅提供现代前端开发所需的各种功能，还有个碾压性的优势：零配置！这是它与依靠大量 "loaders" 的 {webpack} 最大区别。

请别误解数字，{webpack} 依然是最流行的构建应用，它在 GitHub 上 有 35K 的 star 和超 500 人的贡献者。目前有许多项目使用了它，包括今年最流行的两个项目：{create-react-app} 和 {gatsby}。

{webpack} 不断在迭代更新，2.0 版本可以让开发者通过动态加载的方式轻松实现“代码分割”的功能。

{webpack} 与 {parcel} 同时定位于构建 **WEB 应用**，而 {rollup} 则定位于**库**的构建，它专注于 ES6 模块的性能提升上。

{rollup} 已被一些主流的库使用，值得一提的是 {react} 团队也在 2017 年把它们的构建系统从 {browserify} 切换到了 {rollup}。

在 [React 博客](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html)中提到

> Rollup 可以预编译并且集成到应用中，能与 React 之类相似的库做到完美配合。

{poi} 与 {parcel} 有同样的目标：一款现代网络应用构建工具，它默认零配置但你可以通过使用 preset 来扩展。
