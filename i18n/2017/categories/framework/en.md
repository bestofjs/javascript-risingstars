The "front-end framework" category has been a battlefield for a while, but it seems that things are finally calming down, with 3 big players dominating the game.

### The Big-3: Vue, React and Angular

Without surprise, the 3 most popular UI frameworks are {vuejs}, {react} and {angular-2}

It's common to call these _frameworks_ but, to be more accurate, the only framework is {angular-2}, and we should call {vuejs} and {react} _libraries_.

We talked previously about the success of {vuejs} and its integrated approach.

By opposition, the {react} landscape is still fragmented, and developers have to make more deliberate choices about all the things that go around the view layer:

* Routing between pages.
* How to fetch data.
* How to bind forms to data.
* How store the state of the application.

On the contrary, the {angular-2} ecosystem is more controlled, more stable. There is an _Angular Way_ to do things.

That's probably partly why {angular-2} has a more "corporate" image. And this image has been emphasized with the usage of static types using {typescript}, which resonates with backend developers familiar with types from languages like C# or Java.

## Less is more

Behind the Big-3, it's very interesting to notice that {preact} is number 4.
{preact} is a smaller alternative to {react}: the same API, but in less than 3KB.

Similar, most other contenders in this category emphasize a small footprint that leads to better performance in the browser in order to differentiate themselves from the big 3.

The best example about this motto is {hyperapp}, a very hot project over the last weeks. It mixes the functional approach and the JSX syntax from {react} **and** a state management system inspired by {redux}... In less than 1 KB!
