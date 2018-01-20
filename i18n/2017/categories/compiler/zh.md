这里我们将讨论那些编译到标准 JavaScript 代码的语言。

通常情况下，在搭建自己的构建工作流时需要编译器可能有 2 个原因：

* 想立即使用最新的 JavaScript 语言特性，并把它应用到尽可能多的浏览器中，这类需求让 {babel} 获得了成功，很多项目都依赖于它；
* 想为语言添加新的特性，比如“类型检查”；

对 Javascript 程序员进行分类有个热门的问题是：你是用类型的，还是不用类型的？

JavaScript 本身带有基本的动态类型，但缺乏静态类型。而很多开发者倾向于在代码中使用类型，尤其在大型项目中，因为这样可以让代码变得更为健壮且易于阅读和理解。

如果你需要类型，有两个主流可选项：微软的 {typescript} 和 Facebook 的 {flow}（Facebook 在自己的主要项目 {react}，{react-native}，{jest} 中都有使用)

你可以从 [James Kyle](https://github.com/thejameskyle) 的文章来感受两者的区别: [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51)。
