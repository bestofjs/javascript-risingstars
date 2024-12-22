---
id: framework
language: en
---

Number two in 2023, {htmx} reaches the top of the frontend framework category.

It's often considered a library rather than a framework, but the boundary is blurry. Check this article explaining [why htmx is another framework](https://htmx.org/essays/is-htmx-another-javascript-framework/).

It's a great choice if you need to enhance a static site with some interactivity: using only a combination of HTML `hx-*` attributes, you can implement features involving data fetching without a single line of JavaScript.

Want to see it in action? This site "Rising Stars" is built with Astro, and htmx powers three features:

- The drop-down menu and the Previous/Next buttons to switch between years inside a given category
- The loading of extra projects when clicking on the "SHOW MORE" button inside a category
- The lazy loading of extra categories when you scroll down
