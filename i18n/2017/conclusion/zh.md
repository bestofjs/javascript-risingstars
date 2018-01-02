Let's finish this 2017 roundup by picking the stories of the year...


### The Facebook license drama
### Facebook证书drama

2016 drama was the ["Leftpad Gate"](http://developer.telerik.com/featured/left-pad-indicative-fragile-javascript-ecosystem/), when a lot of projects "break" after a popular module was removed from NPM.
2016的["Leftpad门"](http://developer.telerik.com/featured/left-pad-indicative-fragile-javascript-ecosystem/)事件删除了NPM里许多常用的包, 一度让当时许多项目“中断”了。

In 2017, we talked a lot about the fact that Facebook used to protect some of its more popular open source projects, including {react} and {flow}, with a unique license called "BSD + Parents" that was saying, very roughly, that if you pursue Facebook or one of its affiliates, you will lose the right to use React.

Actually the problem was not new, back to October 2016, [a lawyer analyzed the Facebook license](https://www.elcaminolegal.com/single-post/2016/10/04/Facebook-Reactjs-License), concluding that React is **not** open source.

It led to strong reactions against the React ecosystem from some developers. Many people were worried, thinking it could be a good reason to ditch React in a company (especially in a big company!).

First Facebook reacted by explaining on their [official blog](https://code.facebook.com/posts/112130496157735/explaining-react-s-license/) how the "BSD + Parents" helps them contribute to open source.

Last September, the concerns were so loud that Facebook addressed the problem and changed several licenses to MIT.

First by [Relicensing React, Jest, Flow, and Immutable.js](https://code.facebook.com/posts/300798627056246).

Later it was [GraphQL specification turn](https://medium.com/@leeb/relicensing-the-graphql-specification-e7d07a52301b).

This story story denotes how much Facebook became one of the main actors of the JavaScript scene over the last years.

We already mentioned {react}, {react-native}, {flow} and {jest} projects, all from Facebook.
We could also mention {reason}, a new object-functional programming language that compiles to JavaScript, as explained in the [What is ReasonML?](http://2ality.com/2017/11/about-reasonml.html) article from Dr. Axel Rauschmayer.

### Web Assembly: the next revolution?
### Web Assembly: 接下来的革命？

Over the years, the web browser became an ubiquitous tool with a lot of capabilities: it can play audio or video, performs heavy calculations in the background using Service Workers.

But one of the oldest and hardest obstacles to progress is the performance of the JavaScript programming language itself.

Web Assembly is a new web standard that optimizes things so that code can be read and executed faster.

As Lin Clark explains in this [Cartoon Introduction](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/), WebAssembly is a way of taking code written in programming languages other than JavaScript and running that code in the browser.

To add Web Assembly to your web page, you need to compile it into a `.wasm` file.
And then you will have to load this `.wasm` in the browser and it will run super-fast!

In August, Sean Lark announced that {webpack} project was [awarded $125,000 By Mozilla](https://medium.com/webpack/webpack-awarded-125-000-from-moss-program-f63eeaaf4e15) implement first-class support for WebAssembly.

Mozilla Firefox, Google Chrome, Apple Safari, and Microsoft Edge all provide support for WebAssembly in their most recent versions.

[High-Performance Applications in Your Browser](https://spectrum.ieee.org/computing/software/webassembly-will-finally-let-you-run-highperformance-applications-in-your-browser) is really promising, will it be the next revolution?

## Node.js growing up
## 仍在快速成长的Node.js

{nodejs} keeps evolving at a fast pace. The biggest change is the adoption, since the release 7.6 of the [`async await` pattern](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9).
This pattern makes asynchronous code easier to read and to write: no more callback, no more promise chain.

It can make easier the onboarding of backend developers coming from other backgrounds.

It's good to know that, under the hood, this pattern uses the `Promise` specification.

The `async await` pattern comes from the ECMAScript 2017 specification. Node.js made a lot of progress to include natively a lot of these modern features, a compiler like {babel} is no more needed to write modern JavaScript backend code.

The next step coming soon is the adoption of [ES6 modules](http://2ality.com/2014/09/es6-modules-final.html).

The point number 2 showing Node.js maturity is {npm}, the Node.js Package Manager

In 2016, {yarn} emerged as one of the _Rising Stars_ of 2016 (the project number 3 overall). It was an attempt from Facebook to fix some of the npm flaws by:

* Improving install performance
* Making install results more predictable, using a file that locks the exact version of all installed packages.

{yarn} is so popular that a lot of project documentation pages explain that you can start the installation process using either `npm install` or `yarn add` command.

But {npm} made a lot of progresses since the release of the version 5, addressing the two issues mentioned above and making {yarn} less relevant than before.

Among other improvements, we could also mention `npx` a tool that lets developers run locally installed packages easily, as explained here: [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

---

Thank you for your attention, feel free to share this article or to reach us on [Github](https://github.com/bestofjs/javascriptrisingstars)!
感谢你的阅读, 请自由分享此篇文章或者在[Github](https://github.com/bestofjs/javascriptrisingstars)上联系我们!
