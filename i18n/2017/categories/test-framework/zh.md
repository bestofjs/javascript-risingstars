As we predicted [last year](/2016/en#test-framework) (it's the first time we predicted something right!), {jest} became the trendiest testing framework in 2017.
正如我们[去年](/2016/en#test-framework)预计的一样 (这是我们第一次预测成功!), {jest}成为了今年测试框架类别里最强王者。

It was first created by Facebook to run tests for React components, but its evolution has been very fast over the last months (already 22 majors versions released!) and it can be used to write tests for front-end and back-end code.
它最初是被Facebook用来测试React组建的目的而开发的，但最近几个月革命性地变更（发布了22个大版本）使得它现在能用于测试前端与后端的代码。

Jest shines because of several points:
Jest有几个大的闪光点：

* No configuration needed, the defaults settings match the usually needs
* 无需配置, 默认地设定已经满足通常需求
* Great developer experience (intelligent watch mode, very nice error reporting...)
* 强大的开发者体验 (智能观察模式, 直观的错误报告...)
* Syntax close to {mocha}, a lot of developers are familiar with `describe` and `it` keywords
* 语法上与{mocha}很接近, 许多程序员熟悉`describe` 和 `it` 这样的关键词
* No extra library required to make assertions, it's "battery included".
* 不需要额外库来创建assertions, 已全部内置其中。
* Features a unique "snapshot" mode that records automatically the response expected for future tests.
* 独特的"快照"模式可以自动地记录返回的界面。

{ava}, number one last year, has still a lot of traction.
{ava}, 去年的第一名，仍然有许多吸引人的特点。

It has been created by [Sindre Sorhus](https://github.com/sindresorhus) who uses it on all his projects... and that means a lot of great projects!
它有[Sindre Sorhus](https://github.com/sindresorhus)创建，并且在他所有的项目中使用……这意味着非常多伟大的项目！

Compared to Jest, it emphasizes on speed by running tests in parallel, it has a smaller footprint and is closer to testing standards, with a syntax close to test frameworks like {tape}.
相较于Jest，ava更强调在并行测试方面上的速度，它也越来越像是一种测试标准，语法上与测试框架{tape}十分相近。
