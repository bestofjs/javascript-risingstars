---
id: framework
language: ja
---

{react}は、2024年に同部門でトップだった{htmx}から王座を奪還しました。

Reactの歴史の長さや、新規プロジェクトには{solid}や{svelte}のような代替案の方が優れているのではないかという議論は、LLMがReactのコードベースで学習されているため複雑化しており、代替案が勢いを増すのを難しくしています。この件については、[Reactがデフォルトで勝利した理由](https://www.lorenstew.art/blog/react-won-by-default/)をご参照ください。

[React 19](https://react.dev/blog/2025/10/01/react-19-2)は、`Activity` APIやユーザーイベント管理のための強化されたフックなど、大幅な改善を導入しました。

エフェクトといえば、Cloudflareのダッシュボードから`useEffect`がAPIへの無限呼び出しを行ったことが原因で、[Cloudflare自身がDDoS攻撃を受けてしまうという障害が発生しました](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/)。

ReactのReact Server Componentsによるサーバーサイドへの移行は、近年最大の変化ですが、React Server Componentsにおけるリモートコード実行（RCE）の脆弱性である[React2Shell](https://react2shell.com/)のように、深刻な脆弱性も伴います。この脆弱性により、緊急のパッチリリースが必要となりました。（[2025年12月3日](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components), [2025年12月11日](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)）

2位の{Ripple}は、TOP 5への新参者です。React、Solid、Svelteの長所を組み合わせた全く新しいUIフレームワークです。リアクティブプリミティブ、コンポーネントベースのアーキテクチャ、テンプレート構文を備えています。

現在は開発初期段階です。ReactにはNext.js、Vue.jsにはNuxt、SvelteにはSvelteKit、SolidにはSolidStartがありますが、Rippleはサーバーサイドレンダリングを処理するための独自のメタフレームワークを持つのでしょうか？

{svelte}は3年連続で3位です。Svelte 5の[Runes](https://svelte.dev/docs/svelte/what-are-runes)リアクティビティシステム（$state、$derived、$effect）が、状態をモデル化する標準的な方法となりました。
