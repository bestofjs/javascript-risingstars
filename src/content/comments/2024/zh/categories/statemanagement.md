---
id: statemanagement
language: zh
---

{zustand} 继续迅速崛起，成为 React 以及 React Native 等的首选状态管理库。Zustand 是 “基本” 状态管理库，很明显，人们渴望它。

如果我们按状态管理的风格来看结果，就会出现一些有趣的模式。Zustand、{pinia} 和 {redux} 以及 {boardgame} 是单向的，你可以定义你的状态和改变它的操作。使用 {jotai}、{nano-stores} 和 {Legend-State}，您可以将状态定义为原子，并创建依赖于其他原子的计算原子。{valtio} 是一个双向状态管理库。X-State 是一个状态机库。

我们可以从这些结果中得出的结论是，正式的 Redux 风格的状态管理（尽管不是 Redux 库本身）仍然是最流行的状态管理风格。虽然原子模型也取得了长足的进步（最初的原子库 Recoil 刚刚排在前十名之外）。

不过，{XState} 也不容忽视。当涉及到复杂的应用程序时，状态机是一个不错的选择，因为它们将您的应用程序建模为一系列严格的状态和状态之间的转换。如果您还没有尝试过，那么 X-State 的交互式编辑器和模拟器是必看的。

{Boardgame} 和 {Tinybase} 是前十名中非常有趣的补充。Boardgame 专门用于构建游戏。而 Tinybase 则专注于本地优先数据存储，并将该数据与后端服务同步。这两个库都是高度垂直化的，这可能表明一种趋势。将本地优先数据与后端服务同步等问题是一个复杂的问题，因此拥有专门关注此目的的库（如 Tinybase 和 Legend State）是一件好事。

我在这个列表中没有看到的一件事是信号。我不确定这是因为人们正在等待 TC39 提案最终确定并被广泛采用，还是因为它已经融入到 {Solid}、{Svelte} 和 {Qwik} 等框架中。Signals 可能没有进入前十名，但它们仍然是高效建模状态的出色方式。

未来几年将是 React、Vue、JavaScript 等状态管理的激动人心的时刻。
