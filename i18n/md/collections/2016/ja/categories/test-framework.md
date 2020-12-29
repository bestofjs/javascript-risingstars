---
id: test-framework  
language: ja
---

最も有名なテスティングフレームワークといえば {jasmine} と {mocha} ですが、2016年には新たなプロジェクトがこのカテゴリで多くの支持を獲得しました。{ava} と {jest} です。

#### {ava}

{ava} は多産で知られる [Sindre Sorhus](https://github.com/sindresorhus) がクリエーターのテスティングフレームワークです。パフォーマンス（並列テスト）とES6 サポートが売りです。AVA のシンタックスは標準的なテスティングフレームワークである {tape} や {node-tap} に近いものになっています。

#### {jest}

{jest} はFacebookのプロジェクトであり、ここ数週間で多くの支持を獲得しています。Reactコミュニティでは当初からよく知られていましたが、じわじわとユーザを獲得していきました（例えば[この記事](https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e#.z9x53j1ea)を参考）。2017年には、最も人気の高いテスティングフレームワークになっているかもしれません。

大抵のテスティングフレームワークでは、{sinonjs} などの外部ライブラリに依存することの多いMockの実装ですが、Jestには優れたMock関数がビルトインされています。

