---
id: framework
language: en
---

React is still the King in 2022 but Vue.js is close in terms of popularity if you consider that Vue.js stars are split between v2 and v3 repositories.

The main change is the raise of {qwik} at the position 2. Qwik is similar to React, it also uses components written in JSX for templates but the main difference is the focus on shipping the least amount of JavaScript in the browser.

It's part of the trend of "Zero baseline JavaScript" frameworks. Sites and applications are often bloated with heavy JavaScript assets that affect the performance in the browser: even if the page is rendered on the server, users have to wait until JavaScript is loaded, parsed and executed to be able to interact with the page.

Instead of relying on [hydration](https://www.builder.io/blog/hydration-is-pure-overhead) to bring interactivity to pages generated on the server, Qwik uses a technique called resumability to deliver HTML that is instantly interactive. It works by serializing in the HTML itself the state of the application.

The project is led by [Miško Hevery](https://twitter.com/mhevery), the creator of AngularJS whose slogan was "HTML enhanced for web apps" while Qwik is "the HTML-first framework"... somehow the same intention of building apps on top of the good old HTML.
