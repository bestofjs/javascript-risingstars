---
id: react
language: zh
---

第 1 名的 {ant-design} 和第 5 名的 {material-ui} 是 React 最受欢迎的组件和小部件类库项目。

第 2 名的 {create-react-app} 依然是创建新 React 应用的事实标准。它今年的主要更新是支持了 {typescript}。

React 世界中最大的变化是引入了 [Hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html) 模式。

React 只是一个视图层，如何在组件之间共享逻辑一直是一个争议。
事实上这个问题的发展历程可以大致描述成 4 个阶段：

- 2013：使用 Mixin 在 React class 之间共享功能逻辑
- 2015：高阶组件将 props 注入进 React 组件
- 2017：Render props 模式
- 2019：到处都在用 Hooks 写函数式组件

今年，我们已经看到了众多发挥 Hooks 威力的库，它们能够解决以下类型的衍生问题：

- 状态管理：[Redux](https://redux.js.org) 现在也提供了 Hooks 的方式，可以方便地与中心化 store 进行交互
- 路由：{react-router} 提供了 Hooks 用于访问浏览器历史记录
- 表单验证：[React Hook Form](https://react-hook-form.com/) 用独特的方式完成表单验证，它使用非受控表单控制进行实现

Hooks 会是演进的终点吗？