---
id: build  
language: en
---

It's maybe the biggest surprise of the year, the trendiest building tool is {parcel}, a brand new project that gathered more than 14,000 stars since the project was launched on GitHub in August.

{parcel} offers all the goodies of modern web development with a killer feature: zero configuration!

That's the main difference with {webpack}, that relies on a whole ecosystem of plugins called "loaders".

Do not misunderstand the numbers, {webpack} is still the most popular bundler for modern applications, with a total of 35,000 stars on GitHub and more than 500 contributors.

A lot of projects use it under the hood, including {create-react-app} and {gatsby}, 2 of the most popular projects of the year.

{webpack} keeps on evolving, the version 2 lets developers implement features like "code splitting" very easily, through dynamic imports.

While {webpack} and {parcel} both target the building process of web **applications**, {rollup} targets **libraries**. It focuses on performance by taking advantage of ES6 modules.

{rollup} is used by some major libraries and it's worth to mention that the {react} team migrated their build system from {browserify} to {rollup} in 2017.

From the [React blog](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html)

> Rollup is a perfect fit for libraries like React that can be pre-built and then integrated into apps.

{poi} has the same goal as {parcel}: a build tool for modern web applications and libraries, it's zero-config by default but gives you the ability to extend via presets.

