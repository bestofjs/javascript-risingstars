2016 年“构建过程”似乎成了 WEB 项目的标配，如果一个 WEB 应用没有构建过程是难以想象的事情，在构建过程中通常你需要做编译模板、静态资源合并压缩之类的事情，以为生产环境做好准备。

#### {webpack}

{webpack} 是构建单页应用（SPA）的主要工具，它和 React 生态结合的非常好，最新发布的 Webpack 2 带来了不少非常有前景的改进，具体可以阅读[这里](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.7wyiawc0o)。

#### {gulp}

{gulp} 是一个通用的任务运行工具，可以在任何和文件系统打交道的自动化流程中使用，可以认为它并不是 {webpack} 和 {browserify} 的直接竞争者。

和 {grunt} 类似，Gulp 的主要角色是任务管理，你可以让它压缩合并代码，但是它不会帮你处理 JS 模块化问题，而 {webpack} 和 {browserify} 是可以的。

当然了，Gulp 可以和 Webpack 结合起来使用，即使开发者倾向于使用 npm script 也是可以的，实际上很多开发者就是这么做的。

#### {browserify}

{browserify} 因为非常简单，在 Node.js 工程师群体中比较受欢迎。简单来说，它把多个 Node.js 的包作为输入，然后输出单个编译后的文件。相比而言，{webpack} 在 WEB 应用打包方面考量更多，更适合现代的 WEB 开发工作流。

#### 展望未来...

2017 年需要留意的模块打包工具是 {rollup}，它强调的是性能，基于 ES6 的模块规范，并且支持 **Tree Shaking** 这种黑科技，构建产生的结果只包含实际业务逻辑用到的代码，而不是简单的文件合并。
