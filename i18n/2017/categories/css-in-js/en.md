There is still no consensus about the best way to style React components.

You can either use a component toolkit like {material-ui} or {ant-design} if your needs are pretty "standard", if you don't need too much customization.

Or you can do it the "old way", using some global CSS styles from a popular CSS toolkit like {bootstrap} and {bulma}, and assigning appropriate `className`s to your components. But then you lose something, your component is no more self contained, its styling is managed elsewhere.

To address these issues, the "CSS in JavaScript" category has emerged.

The concept is simple: with React you manage **both** your component logic and its template using JavaScript. Why not go further and encapsulate the styles in your components, using JavaScript too?

{styled-components} was by far the trendiest project in this category. It lets developers include regular CSS syntax inside the React components, using a recent addition to the JavaScript language: tagged template literals.

{css-modules}, number 2 in this category, is a kind of hybrid approach. It lets developers write styles in the language of their choice (regular CSS, Sass, {less}, {stylus}), using files that are located next to the related components and that are **imported** into the components

One of the most interesting articles about the CSS in JavaScript approach is from [Mark Dalgleish], one of the author of {css-modules}: [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660). This article is highly recommended for people for are skeptical about the interest of "CSS in JavaScript".
