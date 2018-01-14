As we predicted [last year](/2016/en#test-framework) (it's the first time we predicted something right!), {jest} became the trendiest testing framework in 2017.

It was first created by Facebook to run tests for React components, but its evolution has been very fast over the last months (already 22 majors versions released!) and it can be used to write tests for front-end and back-end code.

Jest shines because of several points:

* No configuration needed, the defaults settings match the usually needs
* Great developer experience (intelligent watch mode, very nice error reporting...)
* Syntax close to {mocha}, a lot of developers are familiar with `describe` and `it` keywords
* No extra library required to make assertions, it's "battery included".
* Features a unique "snapshot" mode that records automatically the response expected for future tests.

{ava}, number one last year, has still a lot of traction.

It has been created by [Sindre Sorhus](https://github.com/sindresorhus) who uses it on all his projects... and that means a lot of great projects!

It emphasizes on speed by running tests in parallel, it has a smaller footprint and is closer to testing standards, with a syntax close to test frameworks like {tape}.
