Let's finish this 2017 roundup by picking the stories of the year...

### The Facebook license drama

2016 drama was the ["Leftpad Gate"](http://developer.telerik.com/featured/left-pad-indicative-fragile-javascript-ecosystem/), when a lot of projects "break" after a popular module was removed from NPM.

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

Over the years, the web browser became an ubiquitous tool with a lot of capabilities: it can play audio or video, performs heavy calculations in the background using Service Workers.

But one of the oldest and hardest obstacles to progress is the performance of the JavaScript programming language itself.

Web Assembly is a new web standard that optimizes things so that code can be read and executed faster.

As Lin Clark explains in this [Cartoon Introduction](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/), WebAssembly is a way of taking code written in programming languages other than JavaScript and running that code in the browser.

To add Web Assembly to your web page, you need to compile it into a `.wasm` file.
And then you will have to load this `.wasm` in the browser and it will run super-fast!

In August, Sean Lark announced that {webpack} project was [awarded $125,000 By Mozilla](https://medium.com/webpack/webpack-awarded-125-000-from-moss-program-f63eeaaf4e15) implement first-class support for WebAssembly.

Mozilla Firefox, Google Chrome, Apple Safari, and Microsoft Edge all provide support for WebAssembly in their most recent versions.

[High-Performance Applications in Your Browser](https://spectrum.ieee.org/computing/software/webassembly-will-finally-let-you-run-highperformance-applications-in-your-browser) is really promising, will it be the next revolution?

---

Thank you for your attention, feel free to share this article or to reach us on [Github](https://github.com/bestofjs/javascriptrisingstars)!
