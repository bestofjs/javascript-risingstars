In 2016 it has never been easier to create and deploy a node.js application with solutions like:

* [Now](https://zeit.co/now)
* [Webtask.io](https://webtask.io/)
* [Stdlib](https://stdlib.com/)

Projects like [Glitch](https://glitch.com/) (previously called _Gomix_) even lowered the barrier to the node.js world, making easy to anyone to **write** and **share** node.js code in a few clicks, right from the browser.

So if you have to build a web application, which framework to choose?

#### {express}

When you build a web application with node.js, {express} is often considered as the de-facto web server.
Its philosophy (a minimalistic core that you can extend using middleware packages) is familiar to most of node.js developers.

#### {koa}

{koa} philosophy is close to {express} but it's built using ES6 generators to avoid a problem sometimes called _[ Callback Hell](https://www.sitepoint.com/saved-from-callback-hell/)_.

#### {feathers}

{feathers} is a very flexible solution to create a "service oriented" architecture, it's a good fit to create node.js microservices.

#### {nodal}

{nodal} framework targets stateless and distributed services connected to PostgreSQL databases.

#### {keystone}

{keystone} is one of the best solutions I know to get an admin client up and running, in order to manage the content coming from a MongoDB database.
The Admin UI is automatically generated from the models, has all CRUD actions and nice filters.

#### {sails}

{sails} is a full MVC framework, very inspired by Ruby on Rails (hence the name **S**ails!). It has been around for a long time. It can play with any kind of database, SQL or non-SQL.

#### {loopback}

{loopback} is another mature framework with a lot of built-in features, including authentication with token and connectors to any kind of database.

The killer feature is the **API explorer** that lets developers check all API end-points in an intuitive way, with the ability to check any user's token.
It's definitively a good choice if you have to build an API.
