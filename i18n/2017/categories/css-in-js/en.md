There is still no consensus about the best way to style React components.

You can use a ready-made component toolkit like {material-ui} or {ant-design} if your needs are pretty "standard" and you don't need too much customization.

Or, if you need more flexibility, you can do it the "old way", using global CSS styles from a popular CSS toolkit like {bootstrap} or {bulma}, and assigning appropriate `className`s to your components. But then your component is not self-contained anymore, since its style is being managed elsewhere.

To address this issue, the "CSS in JavaScript" category has emerged.

The concept is simple: with React you already manage **both** your component logic and its template using JavaScript. Why not go further and encapsulate the styles in your components, using JavaScript for styling too?

{styled-components} was by far the trendiest project in this category this year. It lets developers include regular CSS syntax inside the React components, using a recent addition to the JavaScript language: tagged template literals.

{css-modules}, number 2 in this category, adopts a more hybrid approach. It lets developers write styles in the language of their choice (regular CSS, Sass, {less}, {stylus}), using files that are located next to the related components and that are **imported** into the components

[Mark Dalgleish](http://markdalgleish.com/), one of the authors of {css-modules}, wrote one of the most interesting articles about the CSS-in-JavaScript approach: [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660). This article is highly recommended for people who might be somewhat skeptical about this new technique.
