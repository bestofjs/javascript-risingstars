It's maybe the biggest surprise of the year, the trendiest building tool is {parcel}, a brand new project that gathered more than 14,000 stars since the project was launched on GitHub in August.

构建工具排行冠军是{parcel}，这或许是今年最大的惊喜，一个8月份才在GitHub上发布的崭新项目却已经得到了14,000个star的关注度。

{parcel} offers all the goodies of modern web development with a killer feature: zero configuration!

{parcel}提供了现代浏览器开发所有的优点并杀手级的应用：零配置！

That's the main difference with {webpack}, that relies on a whole ecosystem of plugins called "loaders".

这是它与{webpack}最大的区别，that relies on a whole ecosystem of plugins called "loaders"。

Do not misunderstand the numbers, {webpack} is still the most popular bundler for modern applications, with a total of 35,000 stars on GitHub and more than 500 contributors.

请别误解数字，{webpack}依然是最流行的构建应用，它在Github上有35,000 stars总数和超500人的贡献者。

A lot of projects use it under the hood, including {create-react-app} and {gatsby}, 2 of the most popular projects of the year.

目前有许多项目使用了它，包括今年最流行的两个项目：{create-react-app}和{gatsby}。

{webpack} keeps on evolving, the version 2 lets developers implement features like "code splitting" very easily, through dynamic imports.

{webpack}继续迭代更新, 在新的2.0版本中通过动态载入的方式，开发者可以十分容易地实现“代码分解”这样的功能。

While {webpack} and {parcel} both target the building process of web **applications**, {rollup} targets **libraries**. It focuses on performance by taking advantage of ES6 modules.

正当{webpack}与{parcel}同时定位于网络构建服务的**应用**时, {rollup} 则定位于 **库**。它专注于ES6模块的性能提升上。


{rollup} is used by some major libraries and it's worth to mention that the {react} team migrated their build system from {browserify} to {rollup} in 2017.

{rollup}已被一些主流的库使用，并且值得一提的是{react}团队也在2017年把它们的构建系统从{browserify}切换到了{rollup}。


From the [React blog](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html)

在[React博客](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html)中提到

> Rollup is a perfect fit for libraries like React that can be pre-built and then integrated into apps.
> Rollup 可以预编译并且集成到应用中，是可以与类似React的库做到完美配合。

{poi} has the same goal as {parcel}: a build tool for modern web applications, but its scope is limited to {react}, {preact} and {vuejs} projects.

{poi} 与{parcel}有同样的目标: 一款现代网络应用构建工具，但它的领域仅限于{react}, {preact}与{vuejs}项目。
