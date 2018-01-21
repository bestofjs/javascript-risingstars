Here we talk about languages that compile to regular JavaScript code.

You may need such a compiler in your building workflow for 2 reasons:

* You want to enjoy all the features of the latest version of the JavaScript language (ES7) while making your code compatible with a maximum of Web browsers. This feature made the success of {babel}, which a lot of projects depend on.
* You want to add new features to the language... such as "type checking".

One of the hottest questions that divide developers is: types or not types?

JavaScript has basic dynamic types but not static types. A lot of developers feel like they need types in their code, especially in big code base, to make it more robust and easier to read/understand.

And then, if you think you need types, the 2 main contenders are: {typescript}, provided by Microsoft and {flow}, provided by Facebook (and used on their main projects: {react}, {react-native}, {jest}...)

Read this article from [James Kyle](https://github.com/thejameskyle) to understand the difference: [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51)
