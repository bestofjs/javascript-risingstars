In 2016, it's difficult to imagine a web application without any kind of building process.
You usually need a building process to compile templates and optimize assets in order to ship your web application in production.

#### {webpack}

{webpack} is the main tool used to build a single-page application, it plays well with the React eco-system. The newly released version 2 comes with some promising enhancements (check this [introduction](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.7wyiawc0o))

#### {gulp}

{gulp} is a generic a task runner that can be used for any kind of automatic process involving the file system, so it's not a direct contender of Webpack or Browserify.

Like {grunt}, Gulp works by aggregation: you can ask it to minify and concatenate a list of assets but it does not deal with modular JavaScript by itself, as {webpack} or {browserify} do.

Nevertheless it can play well with webpack even if developers tend to use npm scripts instead.

#### {browserify}

{browserify}, because of its simplicity is usually loved by node.js developers.

Basically it takes several node.js packages as an input and generates one single "build" file for the browser as an output. But it seems that a more opinionated tool like {webpack} is a a better fit to web application workflows.

#### Looking forward...

A module bundler to follow in 2017, that emphasizes on performance: {rollup}.

It uses ES6 modules with a feature called *Tree shaking* to create bundles that include only functions you use in your code, instead of shipping the full library.
