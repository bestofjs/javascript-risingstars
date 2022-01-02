---
id: all
language: en
---

### The TOP 3

The trendiest project of the year is {zx}, a brand new tool by Google to write simple Command Line scripts in JavaScript or TypeScript.

Basically it lets you embed any bash expression (`ls`, `cat`, `git`... anything!) in your code and `await` for the result using [JavaScript template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

It includes utilities provided by several popular packages:

- [node-fetch](https://github.com/node-fetch/node-fetch) to make HTTP requests using the same API as `fetch` in the browser
- [fs-extra](https://github.com/jprichardson/node-fs-extra) to handle file system operations
- [globby](https://github.com/sindresorhus/globby) to match file names given user-friendly patterns

At position number 2, {vite} is a building tool that uses {esbuild} compiler to provide great performance. At the beginning it was linked to the Vue.js community but now it has setups for the main UI frameworks: {react}, {svelte}, {lit}.

At position number 3, {nextjs} keeps its position of leading "meta framework" for the React world.

### Tauri

At position 5, {tauri} is a solution to build desktop applications using web technologies.

Compared to {electron} it's written in Rust and it does not ship Node.js runtime with every application. The version 1.0 was [released in beta in May](https://dev.to/tauri/announcing-tauri-beta-more-efficient-crossplatform-apps-with-better-features-1nbd).

### Special pick

It's not in the TOP 10 but {astro} is one of the projects of the year. Astro is a tool to build web sites that load faster because they ship less JavaScript.

The concept is close to static site generation (SSG) but the big difference is that Astro lets you include dynamic pieces of interactivity in your pages called "islands".

Different strategies can be applied to render dynamic components in the client-side:

- when the page loads
- when the page is idle if it's a low priority component (think tracking.)
- when the component is visible using the browser [Intersection Observer API](https://devdocs.io/dom/intersection_observer_api)

The best is that Astro pages can be built with a combination of HTML and components written with any framework: React, Vue.js or Svelte...
