---
id: all  
language: zh
---

由于很多原因 2020 年成为非常特殊的一年。其中最重要的一个原因是：这是五年来 _Rising Stars_ 的冠军第一次不再是 {vuejs} 而是 {deno}。是不是很惊喜？

Deno 是 Node.js 的作者 Ryan Dahl 创建的一个 Javascript 的运行时环境。

它经常被认为是 Node.js 的继任者，因为它基于 Node.js 这10年的使用和迭代经验，对很多地方做了修改和改进。

包含的主要特性：

- 默认包含 Typescript 编译器（当然，你可以使用普通的 Javascript 编程）
- 没有集中的包管理器，任何 Javascript 的依赖都可以通过 URL 加载
- “标准库” 可以为一般的需要在 Node.js 中安装包的需求提供解决方案
- Deno 尽可能多的使用 web 标准， 比如 Fetch API
- 使用 ECMAScript 的模块引入文件
- 内建的测试运行器和调试器

虽然 [Deno 的生态系统](https://deno.land/x/) 非常年轻，但是我们期望它能对围绕它的质疑，作出更大的改变。

Deno 的成功证实了两大趋势：

- 在前端和客户端上，Typescript 都在兴起
- [Snowpack](https://www.snowpack.dev/) 这种解决 ES6 模块动态导入的解决方案也在兴起，请查看 “构建工具” 部分的新内容