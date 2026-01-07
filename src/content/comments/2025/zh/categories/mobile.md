---
id: mobile
language: zh
---

#### 新秀项目

在JavaScript Rising Stars十多年的悠久历史中，首次出现了React Native及其主要元框架{expo}都没有出现在移动部分顶部的情况。取而代之的是两个新晋项目，{valdi}和{lynx}——分别是Snap（Snapchat背后的公司）和字节跳动（Tiktok背后的公司）的内部框架。

对于React Native开发者来说，{valdi}和{lynx}看起来并不陌生。它们都受到Web启发，渲染原生视图，同时支持TypeScript、JSX、flexbox布局、热重载和CSS。Valdi组件看起来[很像](https://github.com/Snapchat/Valdi/blob/main/docs/docs/core-component.md)React类组件，而Lynx支持命令式API和一个完整的[React抽象](https://lynxjs.org/guide/start/quick-start?ios-simulator-platform=macos-arm64&explorer-platform=ios-simulator)（它默认推荐使用）。

它们的区别在于它们优化的业务需求。Valdi被设计为轻量级、懒加载和可扩展的，以便能够逐屏[选择性采用](https://github.com/Snapchat/Valdi/blob/main/docs/docs/faq.md#why-did-snap-create-this)，而不会带来显著的性能成本。Lynx被设计为提供丰富的交互性，采用[双线程架构](https://lynxjs.org/next/blog/lynx-unlock-native-for-more#use-the-main-thread-responsibly-for-interactivity)来提供类似Web的抽象，而不会在单一线程上形成瓶颈。

但它们并不是唯一取代React Native的新晋项目。排在第四位的{dioxus}是一个雄心勃勃的框架，旨在基于Web技术提供一个"[更好的Flutter](https://dioxuslabs.com/learn/0.7/#what-is-dioxus)"，但又没有全功能Web视图的重量。虽然目前它确实默认使用系统Web视图，但长期目标是稳定[Blitz](https://github.com/DioxusLabs/blitz)，他们使用原生图形API（例如Vulcan和Metal）通过[wgpu](https://github.com/gfx-rs/wgpu)进行绘制的轻量级Web渲染器。目前，Dioxus应用完全使用Rust编写脚本，但计划在未来支持更多语言。

#### 元老项目

接下来是元老们，它们无需介绍。React Native今年再次表现出色，朝着期待已久的1.0版本迈出了更大的步伐。它在[0.77](https://reactnative.dev/blog/2025/01/21/version-0.77)中**改进了Web兼容性**；在版本[0.78](https://reactnative.dev/blog/2025/02/19/react-native-0.78)中引入了对**React 19**的支持；从[0.80](https://reactnative.dev/blog/2025/06/12/moving-towards-a-stable-javascript-api)开始向**稳定的JavaScript API**和**严格的TypeScript API**迈进；在[0.81](https://reactnative.dev/blog/2025/08/12/react-native-0.81)中引入了**预构建的iOS二进制文件**（[铺平道路](https://github.com/react-native-community/discussions-and-proposals/issues/587#issuecomment-3200592526)以**从CocoaPods迁移到Swift包管理器**）；在[0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82)中删除了旧架构并添加了对**Hermes V1**的可选支持；并在[0.83](https://reactnative.dev/blog/2025/12/10/react-native-0.83)中发布了**首个非破坏性版本**。以如此不可阻挡的速度，以及今年成立[React基金会](https://react.dev/blog/2025/10/07/introducing-the-react-foundation)带来的长期保证，React Native在任何跨平台技术栈中都仍然是可靠的赌注。

<!-- MORE -->

{expo}当然，享受了所有这些改进。今年，它发布了[SDK 53](https://expo.dev/changelog/sdk-53)和[SDK 54](https://expo.dev/changelog/sdk-54)（功能太多无法一一提及）。它创建了[EAS工作流](https://expo.dev/services/workflows)以简化应用开发和分发过程的每个部分；引入了[构建缓存提供者](https://expo.dev/blog/build-cache-providers-in-expo)以减少CI时间；发布了[Expo UI](https://docs.expo.dev/versions/v53.0.0/sdk/ui/)以实现完全原生（和Liquid Glass就绪）的界面；并开发了[Expo Launch](https://expo.dev/blog/introducing-expo-launch)以帮助比以往更快地将应用上架到App Store。如今，Expo被用于[数千个](https://evanbacon.dev/blog/expo-apps)排行榜上的应用，并且被证明是氛围编码者的流行框架，Evan Bacon在2025年React Conf上的[现场演示](https://www.youtube.com/live/p9OcztRyDl0?t=21364s)展示了可能性。

{capacitor}一如既往地保持在前十名的位置，发布了版本[7](https://ionic.io/blog/capacitor-7-has-hit-ga)和[8](https://ionic.io/blog/announcing-capacitor-8)，每个版本都专注于维护更新——即迁移到Swift包管理器并添加对Android Edge-to-Edge的支持。虽然在更新方面相对安静的一年，但它显示了继续使用Web视图构建移动应用的持续意愿。

其余的元老都是React Native的组件和样式框架。{react-native-reusables}连续第二年在这一堆中名列前茅，{gluestack-ui}和{Nativewind}都超过了{tamagui}。这种健康的竞争表明，在React Native中，UI远非一个已解决的问题。这些选项允许您根据需要优化要求，取决于您重视的Web互操作性、SSR支持、运行时性能、可组合性、主题性、可访问性等。

#### 这意味着什么呢？

综合来看，React Native在流行度方面继续增长，并且在使用十年后仍保持高速开发，而Expo则自豪地（也当之无愧地）作为其生态系统的首要入口。今年首次，React Native在一年内从前三个方向收到了引人注目的新竞争——但这不必被视为生存威胁。例如，Lynx今年在与React Native一起的会议上受到热烈欢迎，富有启发性的想法如[双线程React](https://www.youtube.com/watch?v=-uUcYrl51JM)激发了关于两者如何共同发展的健康讨论。

我在这些结果中看到的总体模式是对Web的响亮热爱。新旧框架，所有这些顶级移动框架都借鉴了Web平台的惯例。开发者只是_热爱_Web技术。它们如此高效且实用，以至于我们忍不住将它们从一个生态系统拖到另一个生态系统，无论需要移动多少大山。

我也看到了机会。Valdi和Lynx今年吸引了大量关注——还有其他大型科技公司拥有尚未公开的内部框架吗？看看所有这些React Native的UI框架竞争——似乎任何新想法都可能捕获用户，并且在这个领域仍然有大量机会。

那么我对2026年有什么期待？我认为，虽然移动框架在许多方面已经相当成熟，但在开发者体验方面仍然远远落后于Web平台，因此自然会形成缩小这一差距的势头。这样做需要加快构建速度、简化部署过程、更容易创建高级UI，并减少抽象层之间的摩擦。我们肯定看到了今年在所有这些点上的大量活动，但我相信仍有许多尚未采摘的低垂果实，所以迫不及待地想看看下一次收获会带来什么。