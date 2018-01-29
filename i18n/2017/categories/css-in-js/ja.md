React コンポーネンをどうスタイル（style）するか、そのコンセンサスはいまだ存在していません。

わりと「標準」なのがお望みで、それほどカスタマイズの必要がないなら、{material-ui} や {ant-design} といった出来合いのコンポーネントツールキットが利用できるでしょう。

もうすこし柔軟性が必要で「古いやり方」に抵抗がないなら、{bootstrap} や {bulma} のような CSS ツールキットでグローバルな CSS スタイルを使い、適切な `className` をコンポーネントに割り当てることができます。しかしそうすると、コンポーネントはもはや自己完結せず、コンポーネントのスタイルは外部から管理されることになります。

こうした課題に焦点を当てるべく「CSS in JavaScript」カテゴリを追加しました。

コンセプトはいたってシンプルです。React コンポーネントのロジックとテンプレートの**双方**を JavaScript で管理しているなら、さらに進んで、スタイリングも JavaScript でコンポーネントにカプセル化してみては？ということです。

2017年、このカテゴリでもっとも人気のあったプロジェクトは {styled-components} です。ECMAScript 6 で追加された「タグ付きテンプレートリテラル」("Tagged Template Literals") を利用して、標準的な CSS シンタックスを React コンポーネントに埋め込めむことが可能になります。

次点は {css-modules} でした。{styled-components} と比較すると、よりハイブリッドなアプローチを採用しています。スタイルの記述はデベロッパの嗜好（標準CSS, Sass, {less}, {stylus}）に委ねています。スタイルを記述したファイルを関連すコンポーネントと並べて配置することで、コンポーネントにスタイルを**インポート**することができます。

{css-modules} のクリエータのひとり [Mark Dalgleish](http://markdalgleish.com/) は、CSS-in-JavaScript なアプローチに関して非常に興味深い記事 [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) を書いています。この分野の技術に少々懐疑的な方に特にお薦めの記事です。
