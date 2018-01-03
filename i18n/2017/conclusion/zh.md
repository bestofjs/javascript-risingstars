Let's finish this 2017 roundup by picking the stories of the year...

让我们挑选关键事件来结束2017年的回顾。

### The Facebook license drama
### Facebook许可协议事件

2016 drama was the ["Leftpad Gate"](http://developer.telerik.com/featured/left-pad-indicative-fragile-javascript-ecosystem/), when a lot of projects "break" after a popular module was removed from NPM.

2016的["Leftpad门"](http://developer.telerik.com/featured/left-pad-indicative-fragile-javascript-ecosystem/)事件删除了NPM里许多常用的包, 一度让当时许多项目“中断”了。

In 2017, we talked a lot about the fact that Facebook used to protect some of its more popular open source projects, including {react} and {flow}, with a unique license called "BSD + Parents" that was saying, very roughly, that if you pursue Facebook or one of its affiliates, you will lose the right to use React.

在2017年, 我们讨论了诸多Facebook为了保护自己开源项目的因素， 其中有{react}和 {flow}, 用了一种叫“BSD+Parents”的独特许可协议。大致意思是一旦被许可人对Facebook及其子公司甚至关联公司提出直接的或间接专利诉讼，该协议授予用户的专利权利（使用React）即刻自动终止。


Actually the problem was not new, back to October 2016, [a lawyer analyzed the Facebook license](https://www.elcaminolegal.com/single-post/2016/10/04/Facebook-Reactjs-License), concluding that React is **not** open source.

事实上这不是一个新闻, 回到2016十月, [一位律师分析Facebook的许可协议](https://www.elcaminolegal.com/single-post/2016/10/04/Facebook-Reactjs-License)就已经给出了React**不是**开源项目的结论。

It led to strong reactions against the React ecosystem from some developers. Many people were worried, thinking it could be a good reason to ditch React in a company (especially in a big company!).

这让一些开发者开始了对React生态圈强烈抵制。许多人也为此担心，这会成为公司丢弃React的一个好借口（尤其在大公司）。

First Facebook reacted by explaining on their [official blog](https://code.facebook.com/posts/112130496157735/explaining-react-s-license/) how the "BSD + Parents" helps them contribute to open source.

首先Facebook在[官方博客](https://code.facebook.com/posts/112130496157735/explaining-react-s-license/)上解释了"BSD + Parents"协议是如何帮助他们为开源事业做贡献的。

Last September, the concerns were so loud that Facebook addressed the problem and changed several licenses to MIT.

接着在去年9月份，迫于强大的压力Facebook最终把协议变成了MIT来彻底解决这个问题。

First by [Relicensing React, Jest, Flow, and Immutable.js](https://code.facebook.com/posts/300798627056246).

先是[Relicensing React, Jest, Flow, and Immutable.js](https://code.facebook.com/posts/300798627056246)修改了协议。

Later it was [GraphQL specification turn](https://medium.com/@leeb/relicensing-the-graphql-specification-e7d07a52301b).

接下来是 [GraphQL specification turn](https://medium.com/@leeb/relicensing-the-graphql-specification-e7d07a52301b)也该了协议。


This story story denotes how much Facebook became one of the main actors of the JavaScript scene over the last years.

从这件事中也可以看出Facebook近些年已在JavaScript领域中占据了举足轻重的地位。

We already mentioned {react}, {react-native}, {flow} and {jest} projects, all from Facebook.

我们已说过{react}, {react-native}, {flow} 和 {jest} 项目皆来自Facebook。

We could also mention {reason}, a new object-functional programming language that compiles to JavaScript, as explained in the [What is ReasonML?](http://2ality.com/2017/11/about-reasonml.html) article from Dr. Axel Rauschmayer.

我们也可以关注{reason}, 这是一门编译到JavaScript的对象-函数式编程语言(object-functional programming language), 详情可以阅读Dr. Axel Rauschmayer的文章[什么是ReasonML?](http://2ality.com/2017/11/about-reasonml.html) 


### Web Assembly: the next revolution?
### Web Assembly: 接下来的革命？

Over the years, the web browser became an ubiquitous tool with a lot of capabilities: it can play audio or video, performs heavy calculations in the background using Service Workers.

经过多年的发展，网络浏览器己在不少领域成为通用工具：它能播放音频或视频，在后台服务器端进行密集计算的工作。

But one of the oldest and hardest obstacles to progress is the performance of the JavaScript programming language itself.

但JavaScript本身有一个历史已久的难点：性能。

Web Assembly is a new web standard that optimizes things so that code can be read and executed faster.

Web Assembly是一个新的网络标准，它能优化代码的读取和执行速度。


As Lin Clark explains in this [Cartoon Introduction](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/), WebAssembly is a way of taking code written in programming languages other than JavaScript and running that code in the browser.

正如Lin Clark在[Cartoon Introduction](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/)的解释, WebAssembly是能在浏览器里不写JavaScript，而能使用其它编程语言的一种方法。

To add Web Assembly to your web page, you need to compile it into a `.wasm` file.
And then you will have to load this `.wasm` in the browser and it will run super-fast!

想要在网页中使用Web Assembly，你需要编译成一个`.wasm`文件。
然后在浏览器中加载这个`.wasm`，你便会发现它能运行得飞快！


In August, Sean Lark announced that {webpack} project was [awarded $125,000 By Mozilla](https://medium.com/webpack/webpack-awarded-125-000-from-moss-program-f63eeaaf4e15) implement first-class support for WebAssembly.

在八月份, Sean Lark宣布{webpack}项目得到了Mozilla项目125，000美元[awarded $125,000 By Mozilla](https://medium.com/webpack/webpack-awarded-125-000-from-moss-program-f63eeaaf4e15)的赞助来实现对WebAssembly头等支持。

Mozilla Firefox, Google Chrome, Apple Safari, and Microsoft Edge all provide support for WebAssembly in their most recent versions.

Mozilla Firefox, Google Chrome, Apple Safari, 和Microsoft Edge都表示会在最近的版本中对WebAssembly支持。

[High-Performance Applications in Your Browser](https://spectrum.ieee.org/computing/software/webassembly-will-finally-let-you-run-highperformance-applications-in-your-browser) is really promising, will it be the next revolution?

[在你的浏览器中运行高性能的应用](https://spectrum.ieee.org/computing/software/webassembly-will-finally-let-you-run-highperformance-applications-in-your-browser)，看了后期待满满，它真的会是下一个革命？

## Node.js growing up
## 仍在快速成长的Node.js

{nodejs} keeps evolving at a fast pace. The biggest change is the adoption, since the release 7.6 of the [`async await` pattern](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9).
This pattern makes asynchronous code easier to read and to write: no more callback, no more promise chain.

{nodejs}继续保持了快速前进的步伐。最大的变化是易用性上，7.6版本加入了[`async await` 模式](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)。
这个模式可以让异步的代码容易阅读和书写：不再需要回调，不再需要promise链。


It can make easier the onboarding of backend developers coming from other backgrounds.

这让那些后台开发转过来的开发者能更容易上手。

It's good to know that, under the hood, this pattern uses the `Promise` specification.

值得注意的是，从底层原理上来讲，这个模式其实是使用了`Promise` 规范。

The `async await` pattern comes from the ECMAScript 2017 specification. Node.js made a lot of progress to include natively a lot of these modern features, a compiler like {babel} is no more needed to write modern JavaScript backend code。

`async await` 模式来自ECMAScript 2017规范。Node.js做了非常大的努力来导入这些新特性，所以在写后端代码时，像{babel}这样的编译器已经不再是必要的了。

The next step coming soon is the adoption of [ES6 modules](http://2ality.com/2014/09/es6-modules-final.html).

下一步将是[ES6 modules]模块的采用。


The point number 2 showing Node.js maturity is {npm}, the Node.js Package Manager

第二点变化是Node.js的包管理{npm}也更加成熟了。

In 2016, {yarn} emerged as one of the _Rising Stars_ of 2016 (the project number 3 overall). It was an attempt from Facebook to fix some of the npm flaws by:

在2016年，{yarn}一鸣惊人地出现在了2016年_明星项目_榜单中(排名第3)。Facebook做了如下工作去试图填补npm的缺陷：

* Improving install performance
* 改进安装时的性能
* Making install results more predictable, using a file that locks the exact version of all installed packages.
* 通过锁住己安装包的版本号来让结果更加可以预测。

{yarn} is so popular that a lot of project documentation pages explain that you can start the installation process using either `npm install` or `yarn add` command.

广受欢迎的{yarn}甚至让许多项目在自己的文档中提到你可以同时使用 `npm install` 或 `yarn add` 命令来进行安装.

But {npm} made a lot of progresses since the release of the version 5, addressing the two issues mentioned above and making {yarn} less relevant than before.

不过{npm}在第5个版本中进行了大量的改进，解决了上面提到的两个问题，使得{yarn}不再具有这方面的优势。

Among other improvements, we could also mention `npx` a tool that lets developers run locally installed packages easily, as explained here: [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

在其中诸多改进中, 我们也要提及`npx`这个工具， 它可以让开发者更容易地在本地运行已经安装的包, 这里有注解: [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

---

Thank you for your attention, feel free to share this article or to reach us on [Github](https://github.com/bestofjs/javascriptrisingstars)!
感谢你的阅读, 请自由分享此篇文章或者在[Github](https://github.com/bestofjs/javascriptrisingstars)上联系我们!
