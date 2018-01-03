The "front-end framework" category has been a battlefield for a while, but it seems that things are finally calming down, with 3 big players dominating the game.

前端框架方面向来是兵家必争之地，不过如今已呈三家鼎足分立，大局尘埃落定之势。

### The Big-3: Vue, React and Angular
### Vue、React、Angular三足鼎立

Without surprise, the 3 most popular UI frameworks are {vuejs}, {react} and {angular-2}

毫不奇怪，目前三大UI框架分别是{vuejs}, {react}和{angular-2}。

It's common to call these _frameworks_ but, to be more accurate, the only framework is {angular-2}, and we should call {vuejs} and {react} _libraries_.

我们习惯称之为_框架_，但准确地讲，只有{angular-2}是 _框架_， {vuejs}和{react}应归类为 _库_。

We talked previously about the success of {vuejs} and its integrated approach.

前文中，我们已经分析了{vuejs}的成功因素和它的集成方案。

By opposition, the {react} landscape is still fragmented, and developers have to make more deliberate choices about all the things that go around the view layer:

与Vue.js相对应的，{react}方面却依然处于碎片化的状态，开发者需要根据自身项目的情况，进行技术选型：

* Routing between pages.
* 在页面间的路由切换问题。
* How to fetch data.
* 如何获取数据。
* How to bind forms to data.
* 如何把数据绑定到表单。
* How store the state of the application.
* 如何存储应用的状态。

On the contrary, the {angular-2} ecosystem is more controlled, more stable. There is an _Angular Way_ to do things.

相反，{angular-2}生态圈则更可控也更稳定。还有一种叫_Angular准则_ 的最佳实践用来指导开发。

That's probably partly why {angular-2} has a more "corporate" image. And this image has been emphasized with the usage of static types using {typescript}, which resonates with backend developers familiar with types from languages like C# or Java.

这可能给人一种{angular-2}对于多人协同工作更友好的印象。此外，随着支持静态类型的{typescript}加入，{angular-2}也势必能得到更多熟悉C#或Java的后端开发人员人观注与青睐。

## Less is more
## 少即是多

Behind the Big-3, it's very interesting to notice that {preact} is number 4.

在三巨头之后，有趣地注意到第四名 {preact}.

{preact} is a smaller alternative to {react}: the same API, but in less than 3KB.

{preact}是一个{react}的小型替代解决方案：有同样的API，却只有3KB的大小。

Similar, most other contenders in this category emphasize a small footprint that leads to better performance in the browser in order to differentiate themselves from the big 3. 

类似的还有许多竞争者，为了区别于三巨头，它们更多地在浏览器的性能上下功夫，做出自己的特色。
