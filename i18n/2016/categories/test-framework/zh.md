相比于流行了很久的测试框架 {jasmine} 和 {mocha}，2016 年出现了 2 个更新的、并有很多人使用的测试框架：{ava} 和 {jest}。

#### {ava}

{ava} 由非常高产的 [Sindre Sorhus](https://github.com/sindresorhus) 开发和维护，其标榜的重点是性能和 ES6，能够并行的运行测试。AVA 的语法非常类似 {tape} 和 {node-tap}。

#### {jest}

{jest}，又一个 Facebook 开源项目，最近几个月引起了大量的开发者注意，在 React 社区更加流行，并且越来越多的人开始迁移到 Jest，可以阅读这个[故事](https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e#.z9x53j1ea)，2017 年 Jest 极有可能成为最受欢迎的测试框架。

Jest 内置了非常强大的 Mock 特性，而其他的测试框架通常需要依赖第三方的 Mock 包，比如 {sinonjs}.
