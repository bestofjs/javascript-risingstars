构建工具分类中的排行冠军是 {parcel} ，这或许是今年最大的惊喜，作为一个8月份才在 GitHub 上发布的崭新项目却已得到了14,000个 star 的关注度。

{parcel} 提供了现代浏览器开发所有的优点并杀手级的应用：零配置！

这是它与 {webpack} 最大的区别，that relies on a whole ecosystem of plugins called "loaders"。

请别误解数字， {webpack} 依然是最流行的构建应用，它在 Github上 有35,000 stars 总数和超500人的贡献者。

目前有许多项目使用了它，包括今年最流行的两个项目：{create-react-app} 和 {gatsby}。

{webpack} 继续迭代更新, 在新的2.0版本中通过动态载入的方式，开发者可以十分容易地实现“代码分解”这样的功能。

正当 {webpack} 与 {parcel} 同时定位于网络构建服务的**应用**时, {rollup} 则定位于 **库**。它专注于ES6模块的性能提升上。

{rollup} 已被一些主流的库使用，并且值得一提的是 {react} 团队也在2017年把它们的构建系统从 {browserify} 切换到了 {rollup} 。

在[ React 博客](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html)中提到

> Rollup 可以预编译并且集成到应用中，能与 React 之类相似的库做到完美配合。

{poi} 与 {parcel} 有同样的目标: 一款现代网络应用构建工具，但它的领域仅限于 {react} , {preact} 与 {vuejs} 项目。
