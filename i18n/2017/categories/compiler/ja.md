ここではコンパイラについてみていきましょう。

アプリケーションのビルドにおいてコンパイラが必要となるのは、つぎの２つの理由からではないでしょうか。

* JavaScript (ES7) の最新ヴァージョンの機能をフルに堪能したいが、可能な限り多様なブラウザに対応させたい。これを実現したのが {babel} で、現在では多くのプロジェクトに採用されています。
* 型判定のような新しい機能を追加したい。

いま、デべロッパーを二分するもっとも熱い議論のひとつが「型は必要か？」です。

JavaScript は動的型付けであり、静的型付けではありません。しかし、デベロッパーの多くは自分の書くコードに型は必要だと感じています。特にコードベースが肥大化してくると、堅牢性と可読性を配慮してなおさらそう感じるでしょう。

型が必要だと感じているデベロッパーが現在注目しているのは、Microsoft の {typescript} と Facebook の {flow} です（{flow} は Facebook のメインプロジェクトである {react}, {react-native}, {jest} などで使われています）。

{typescript} と {flow} の違いを知りたい向きには、[James Kyle](https://github.com/thejameskyle) の [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51) をお薦めしておきます。
