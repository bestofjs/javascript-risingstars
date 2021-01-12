---
id: react  
language: en
---

React is a great UI library but using React and the modern web development workflow tools require a lot of configuration.
So how to start creating a real-world application?

It's the answer provided by the React "boilerplates" and other "starter kits"...

#### {create-react-app}

Facebook addressed the need by providing a lighter approach called {create-react-app} that is a very convenient way to start a new React project.

[Dan Abramov](https://github.com/gaearon) (the creator of Redux, now working for Facebook) did a great job, finding the right balance between simplicity and features. For example there is no fancy styling solution (just plain CSS), no server-side rendering, but everything is well packaged and the developer experience is really good.

The main difference with its contenders is that if you use {create-react-app}, it becomes a dependency of your project, all the magic is hidden and what you see is only **your** application code. You can upgrade the dependency at any time, it's not just a starting point.

#### {react-boilerplate}

The well named {react-boilerplate} has everything you need, including {redux} and some nice offline features, taking advantage of the web workers technology.

It lets developers create what is called *Progressive Web Applications* (or *PWA*): web applications that run offline, using a technology called Service Worker, for more information you can read [this article](https://ponyfoo.com/articles/progressive-app-serviceworker) from Nicolás Bevacqua.

#### {nextjs}

{nextjs}, created by the busy folks from [Zeit](https://zeit.co/), has a server-side rendering feature that can be used to create *universal* applications (or *isomorphic* applications, as we used to say in 2015), that is to say applications that run more or less with the same code client AND server-side.

