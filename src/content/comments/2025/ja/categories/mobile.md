---
id: mobile
language: ja
---

#### 初登場のフレームワーク

10年以上にわたるJavaScript Rising Starsの歴史において、React Nativeおよびその主要なメタフレームワークである{expo}が、モバイル部門のトップにランクインしないのは今回が初めてです。代わりに、両者はSnap（Snapchatの親会社）の社内フレームワークである{valdi}と、ByteDance（Tiktokの親会社）の社内フレームワークである{lynx}という、2つの新興フレームワークに取って代わられました。

{valdi}と{lynx}はReact Native開発者にとって馴染みのあるものでしょう。どちらもWebにインスパイアされており、ネイティブビューをレンダリングしつつ、TypeScript、JSX、flexboxレイアウト、ホットリロード、CSSをサポートしています。Valdiのコンポーネントは[Reactクラスコンポーネントを彷彿とさせます](https://github.com/Snapchat/Valdi/blob/main/docs/docs/core-component.md)が、Lynxは命令型APIと本格的な[React抽象化](https://lynxjs.org/guide/start/quick-start?ios-simulator-platform=macos-arm64&explorer-platform=ios-simulator)（デフォルトで推奨）の両方をサポートしています。

これらが差別化されるのは、最適化されているビジネス要件においてです。Valdiは、パフォーマンスへの大きな影響なく、画面単位での[オプトイン採用](https://github.com/Snapchat/Valdi/blob/main/docs/docs/faq.md#why-did-snap-create-this)を可能にするため、軽量、遅延ロード、スケーラビリティを考慮して設計されました。Lynxは、[デュアルスレッドアーキテクチャ](https://lynxjs.org/next/blog/lynx-unlock-native-for-more#use-the-main-thread-responsibly-for-interactivity)を採用し、単一スレッドでのボトルネックなしにWebのような抽象化を提供することで、リッチなインタラクティビティを実現するように設計されています。

しかし、React Nativeを退けた新顔はこれだけではありません。4位の{dioxus}は、「[より優れたFlutter](https://dioxuslabs.com/learn/0.7/#what-is-dioxus)」をWeb技術に基づいて提供することを目指す野心的なフレームワークですが、フル機能のWebビューの重さを伴いません。現時点ではシステムWebビューを使用するのがデフォルトですが、長期的にはネイティブグラフィックAPI（VulcanやMetalなど）を[wgpu](https://github.com/gfx-rs/wgpu)経由で使用して描画する軽量Webレンダラーである[Blitz](https://github.com/DioxusLabs/blitz)を安定させることを目指しています。現在、DioxusアプリはRustのみでスクリプト化されていますが、将来的にはより多くの言語をサポートする計画があります。

#### 既存技術

まずは、説明不要の既存技術についてです。React Native は今年も素晴らしいパフォーマンスを示し、待望のバージョン 1 に向けて着実に進歩しました。

*   バージョン [0.77](https://reactnative.dev/blog/2025/01/21/version-0.77) では **Web への適合性**が向上しました。
*   バージョン [0.78](https://reactnative.dev/blog/2025/02/19/react-native-0.78) では **React 19** のサポートが導入されました。
*   バージョン [0.80](https://reactnative.dev/blog/2025/06/12/moving-towards-a-stable-javascript-api) からは、**安定した JavaScript API** および **厳格な TypeScript API** への移行が開始されました。
*   バージョン [0.81](https://reactnative.dev/blog/2025/08/12/react-native-0.81) では、**プリビルドされた iOS バイナリ**が導入され ([CocoaPods から Swift Package Manager への移行](https://github.com/react-native-community/discussions-and-proposals/issues/587#issuecomment-3200592526)への道が開かれました)。
*   バージョン [0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82) では、旧アーキテクチャが廃止され、**Hermes V1** のオプトインサポートが追加されました。
*   バージョン [0.83](https://reactnative.dev/blog/2025/12/10/react-native-0.83) では、**史上初の非破壊リリース**が提供されました。

この驚異的な勢いと、今年設立された [React Foundation](https://react.dev/blog/2025/10/07/introducing-the-react-foundation) による長期的な保証により、React Native は引き続きクロスプラットフォーム技術スタックにおいて確実な選択肢であり続けます。

<!-- MORE -->

{expo} は、もちろんこれらの改善すべてを享受しています。今年は、[SDK 53](https://expo.dev/changelog/sdk-53) と [SDK 54](https://expo.dev/changelog/sdk-54) (機能が多すぎてすべてを挙げることはできません) をリリースしました。

*   アプリ開発および配布プロセスのあらゆる部分を合理化する [EAS Workflows](https://expo.dev/services/workflows) を作成しました。
*   CI 時間を短縮するための [ビルドキャッシュプロバイダー](https://expo.dev/blog/build-cache-providers-in-expo) を導入しました。
*   完全にネイティブな (かつ Liquid Glass 対応の) インターフェースを可能にする [Expo UI](https://docs.expo.dev/versions/v53.0.0/sdk/ui/) をリリースしました。
*   アプリをこれまで以上に迅速に App Store に公開するための [Expo Launch](https://expo.dev/blog/introducing-expo-launch) を開発しました。

現在、Expo は [数千](https://evanbacon.dev/blog/expo-apps) ものトップチャートアプリで使用されており、Evan Bacon 氏が React Conf 2025 で行った [ライブデモ](https://www.youtube.com/live/p9OcztRyDl0?t=21364s) でその可能性が示されたように、バイブコーダーにとって人気のフレームワークであることが証明されています。

{capacitor} は、これまで通りトップ 10 に位置しており、バージョン [7](https://ionic.io/blog/capacitor-7-has-hit-ga) と [8](https://ionic.io/blog/announcing-capacitor-8) をリリースしました。どちらもメンテナンスアップデートに重点が置かれており、具体的には Swift Package Manager への移行と Android Edge-to-Edge のサポート追加が含まれます。アップデートの面では比較的静かな一年でしたが、Web ビューを使用してモバイルアプリを構築することへの継続的な意欲を示しています。

残りの既存技術はすべて React Native のコンポーネントおよびスタイリングフレームワークです。{react-native-reusables} はこの分野で 2 年連続トップの座を維持しており、{gluestack-ui} と {Nativewind} は両方とも {tamagui} を追い抜きました。この健全な競争は、React Native において UI がまだまだ解決されていない問題であることを示しています。これらの選択肢により、Web との相互運用性、SSR サポート、実行時パフォーマンス、コンポーザビリティ、テーマ設定、アクセシビリティなど、重視する要件に応じて最適化することができます。

#### 全体を通しての考察

これらを総合すると、React Native は10年以上の使用を経ても、なお人気を高め、活発な開発を継続しています。一方、Expo はそのエコシステムへの主要な入り口として、誇り高く（そして当然ながら）位置づけられています。React Native は今年、初めて 3 つの側面から強力な新たな競争に直面しましたが、これらを存続を脅かすような存在として捉える必要はありません。例えば Lynx は、今年 React Native と共にカンファレンスで温かく迎えられ、[「デュアルスレッド React」](https://www.youtube.com/watch?v=-uUcYrl51JM)のような示唆に富むアイデアは、両者がどのように共進化できるかについて健全な議論を巻き起こしました。

これらの結果から見えてくる全体的な傾向は、ウェブに対する揺るぎない愛情です。新旧を問わず、これらのトップモバイルフレームワークはすべてウェブプラットフォームの慣習から恩恵を受けています。開発者はウェブ技術が本当に大好きです。それらは非常に生産的で使いやすいため、たとえどんな困難があろうとも、エコシステムからエコシステムへと、ウェブ技術を共に持ち運ばずにはいられません。

また、機会も見出せます。Valdi と Lynx は今年、多くの注目を集めました。他の巨大テック企業も、まだ公開されていない社内フレームワークを抱えているのでしょうか？そして、React Native 向けの UI フレームワークがこれほど競合している状況を見ると、どんな新しいアイデアでもユーザーを獲得できる可能性があり、この分野ではまだすべてがこれからだと言えるでしょう。

では、2026 年には何が期待できるでしょうか？モバイルフレームワークは多くの側面で既に成熟していますが、開発者体験という点ではウェブプラットフォームにまだ大きく遅れをとっていると考えています。そのため、このギャップを埋める方向への自然な勢いが生まれるでしょう。これを実現するには、ビルドの高速化、デプロイプロセスの円滑化、高度な UI の作成の容易化、そして抽象化レイヤー間の摩擦の低減が必要です。今年はこれらの点すべてにおいて多くの活動が見られましたが、まだ多くの「取りやすい果実（low-hanging fruit）」が残されていると信じており、次の収穫がどのようなものになるか、楽しみにしています。
