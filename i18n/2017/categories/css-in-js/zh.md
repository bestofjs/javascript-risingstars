There is still no consensus about the best way to style React components.
目前仍然没有对React组件样式进行有效管理的最佳实践。

You can use a ready-made component toolkit like {material-ui} or {ant-design} if your needs are pretty "standard" and you don't need too much customization.
如果只是想要无需太多自定义的标准样式，可以用{material-ui}或{ant-design}这样现成的组件工具包。

Or, if you need more flexibility, you can do it the "old way", using global CSS styles from a popular CSS toolkit like {bootstrap} or {bulma}, and assigning appropriate `className`s to your components. But then your component is not  self-contained anymore, since its style is being managed elsewhere.
或者，如果需要更高度灵活的自定义，你仍然能使用传统方式：用一个像{bootstrap}或{bulma}这样的全局CSS样式，通过修改组件的 `className`属性来达到目的。这样做缺点是你的组件无法进行自我配置管理，需在其它地方进行设置。

To address this issue, the "CSS in JavaScript" category has emerged
本类别"CSS in JavaScript"的出现即是为了解决上述问题，

The concept is simple: with React you already manage **both** your component logic and its template using JavaScript. Why not go further and encapsulate the styles in your components, using JavaScript for styling too?
概念本身很简单：在React中你己能通过JavaScript来**同时**控制逻辑和模板部分。既然如此，为不再进一步，连样式也一起管理了呢？

{styled-components} was by far the trendiest project in this category this year. It lets developers include regular CSS syntax inside the React components, using a recent addition to the JavaScript language: tagged template literals.
{styled-components}是今年本类别的冠军。它利用JavasScript最近新加入的模板字符串特性，让开发者在React组件中使用标准的CSS语法。

{css-modules}, number 2 in this category, adopts a more hybrid approach. It lets developers write styles in the language of their choice (regular CSS, Sass, {less}, {stylus}), using files that are located next to the related components and that are **imported** into the components
{css-modules}, 作为本类别的亚军, 则采用了混合的解决方案。 它让开发者自己挑选(标准CSS, Sass, {less}, {stylus})，再以文件的方式**导入**到组件中

[Mark Dalgleish](http://markdalgleish.com/), one of the authors of {css-modules}, wrote one of the most interesting articles about the CSS-in-JavaScript approach: [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660). This article is highly recommended for people who might be somewhat skeptical about this new technique.
[Mark Dalgleish](http://markdalgleish.com/), {css-modules}的作者, 写了一篇有意思的文章来阐述CSS-in-JavaScript解决方案: [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660). 如果你对CSS-in-Javascript解决方案持怀疑态度的话，那此文不容错过。
