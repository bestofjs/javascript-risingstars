2016 年创建和部署 Node.js 应用变得空前的容易，比如下面这些解决方案：

* [Now](https://zeit.co/now)
* [Webtask.io](https://webtask.io/)
* [Stdlib](https://stdlib.com/)

类似于 [Glitch](https://glitch.com/) 的项目则把 Node.js 的门槛降到不能再低，只需要通过浏览器简单的点击拖拽就都能轻而易举的**编写**和**分享** Node.js 代码。

那么，如果想创建一个 WEB 应用，我们该选哪个框架呢？

#### {express}

{express} 已经成为开发 Node.js WEB 应用的标准框架，大多数工程师都很熟悉他的设计思想（极简的内核，但能让你用各种中间件来扩展他的功能）。

#### {koa}

{koa}，设计思想非常类似 {express}，区别在于它是使用 ES6 中的 generator 编写的，这种写法解决了大家所熟知的[回调地狱](https://www.sitepoint.com/saved-from-callback-hell/) 问题。

#### {feathers}

{feathers}，是用来实现面向服务架构的一种灵活的解决方案，非常适合创建 Node.js 微服务。

#### {nodal}

{nodal}，用来创建基于 PostgreSQL 的无状态的、分布式的服务。

#### {keystone}

{keystone}，是我所知的快速搭建基于 MongoDB 的管理后台的最佳解决方案，Keystone.js 基于数据模型的定义即可自动生成后台界面，支持常见的增删改查操作和灵活的数据过滤。

#### {sails}

{sails}，是一个全能的 MVC 框架，主要是受到 Ruby on Rails 启发，他已经存在很长时间，支持各种数据库，不管是 SQL 还是 No-SQL。

#### {loopback}

{loopback}，内置了很多特性的成熟框架，支持基于 token 的认证，支持各种数据库。 loopback 的“杀手锏”功能是 **API 浏览器**，该功能能让开发者用非常直观的方式查看所有的 API 接口，如果你需要创建 API 服务的话，它无疑是个很好的选择。
