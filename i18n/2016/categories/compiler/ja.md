AltJS 群などの言語から JavaScript のコードを生成するコンパイラ（トランスパイラ）についてです。
それらのコンパイラはブラウザや node.js で実行できる "standard JavaScript" を生成することができるため、
ブラウザがサポートしているかどうかを気にせず、ES6などの最新の JavaScript でコードを書くことができます。

#### {typescript}

最も流行っていたトランスパイラーは {typescript} で、 Web の開発者が Java や C# のような静的型付けで実装できるようになりました。
実際 {angular-2} は本体やサンプルコードが TypeScript で書かれており、その普及に貢献しました。

Javascript で型を利用するのにはメリットとデメリットがあり、下記の２つの記事に目を通して採用するかどうかの判断材料にしてください。


* [You Might Not Need TypeScript](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.1pn05vlis)

* [TypeScript: the missing introduction](https://toddmotto.com/typescript-the-missing-introduction)

#### {babel}

{babel} は、よく Webpack と共に利用され、ES6 で書かれたコードや standard JavaScript で書かれた React (JSX) などのライブラリのテンプレートをコンパイルする際のほぼ標準となっています。

初期の頃は ES6 をコンパイルするためによく利用されていましたが、Plugin 形式で様々なコードを変換できることから、より一般的なツールになりました。


#### {flow}

{flow} はコンパイラではありませんが、処理を解析して型を推測したりコメントに書いた期待する型を元にチェックする静的な型チェッカーです。（Flow の使い方に関しては [こちら](http://javascriptplayground.com/blog/2017/01/npm-flowjs-javascript/)）。


元は Facebook の内部プロジェクトで使われていました。{react}, {react-native}, {flux}, {immutable}, {jest} など、Facebook がオープンソースの世界で貢献しているものは多いです。


#### {coffeescript}

Python と Ruby のシンタックスにインスパイアされた {coffeescript} はここ数年最も人気なコンパイラでしたが、2016年では下火となり大半の開発者は CoffeeScript から Babel を使って ES6 を書くスタイルへと移行していきました。
