Here we talk about languages that compile to regular JavaScript code.

在这里我们将讨论那些编译到标准JavaScript代码的语言。

You may need such a compiler in your building workflow for 2 reasons:

通常，在你的构建工作流(building workflow)中需要编译器可能有2个原因：

* You want to enjoy all feature of the latest version of the JavaScript language (ES7) while making your code compatible with a maximum of Web browsers. This feature made the success of {babel}, which a lot of projects depend on.
* 你想享受到最新JavaScript(ES7标准)的特性，并把它应用到尽可能多的网页浏览器中。这个需求让{babel}获得了成功，很多项目都依赖于它。

* You want to add new features to the language... such as "type checking".
* 你想为语言添加新的特性……比如“类型检查(type checking)”。

One of the hottest questions that divide developers is: types or not types?

有一个很热门的问题可以来区分程序员： 你用类型的，还是不用类型的？

JavaScript has basic dynamic types but not static types. A lot of developers feel like they need types in their code, especially in big code base, to make it more robust and easier to read/understand.

JavaScript本身带有基本的动态类型，但缺乏静态类型。不过很多开发者喜欢在代码中使用类型，尤其在大型项目中，这样可以让代码变得更为健壮（robust）且易于阅读和理解。

And then, if you think you need types, the 2 main contenders are: {typescript}, provided by MicroSoft and {flow}, provided by Facebook (and used on their main projects: {react}, {react-native}, {jest}...)

如果你需要类型，有两个主流可选项：微软的{typescript}和Facebook的{flow}（Facebook在它们的主要项目{react}, {react-native}, {jest}...中有使用)

Read this article from [James Kyle](https://github.com/thejameskyle) to understand the difference: [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51)

你可以从[James Kyle](https://github.com/thejameskyle)的文章来感受两者的区别: [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51)
