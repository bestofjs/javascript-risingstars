---
id: framework
language: en
---

In 2023, React maintains its position as a frontrunner in the JavaScript ecosystem, a trend persisting from 2021 and 2022, despite occasional criticism and controversies.

Celebrating its 10th anniversary, React earned a documentary (watch it [here](https://www.youtube.com/watch?v=8pDqJVdNa44)); it says a lot about its popularity!

However, React is not without its skeptics. Some view it as a relic of the past, a sentiment expertly explored in [this article](https://joshcollinsworth.com/blog/antiquated-react), which also delves into alternative solutions. On the flip side, proponents laud React for its remarkable adaptability and capacity for reinvention.

One point of contention revolves around the absence of "signals", a reactivity handling mechanism employed by libraries such as {solid} or {preact}, while React enthusiasts appreciate the predictability offered by React's data flow.

From [a tweet](https://twitter.com/devongovett/status/1629540226589663233) by Devon Govett, the creator of Parcel, about signals: 

> The simplicity of UI as a function of state is lost when updates flow unpredictably.

To know more about signals, read [The Evolution of Signals](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob), a comprehensive exploration of one of the year's buzzwords.

At two {htmx} is a library that takes a different approach to provide interactivity to HTML page: rather than writing several lines of JavaScript code, developers enhance HTML with specific attributes to enable real-time interactivity and dynamic updates.

It was lauded for its small file size and seamless integration with existing server-side frameworks, as it's part of the trend "send HTML over the wire": ask the server to send partial blocks of HTML instead of handling JSON in the client.

In the same space of "tagging libraries", {alpinejs} is a popular solution (number 13 this year).

At three, Svelte popularity keeps growing. It's often seen as a modern alternative ot React.
A big change is coming soon with Svelte 5, "the most anticipated release in the project's history", that introduces [runes](https://svelte.dev/blog/runes) to address some of the "pain points" when handling state reactivity. [This short video](https://www.youtube.com/watch?v=RVnxF3j3N8U) from Rich Harris does a great job of explaining the problems fixed by the runes.

One of the stories of the year is related to Svelte and caused a lot debates (E.g. [Hacker News](https://news.ycombinator.com/item?id=35892250)): the Svelte team has chosen to use JavaScript with JSDoc annotations instead of TypeScript, to avoid the additional complexity and drawbacks associated with TypeScript, while still providing the benefits of type safety.


