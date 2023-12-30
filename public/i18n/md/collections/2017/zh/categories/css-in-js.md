---
id: css-in-js  
language: zh
---

目前 React 社区仍然没有就如何有效管理组件样式这个问题达成共识，即没有标准的解决方案。

如果无需太多自定义的标准样式，可以用 {material-ui} 或 {ant-design} 这样现成的组件工具包。如果需要更高度灵活的自定义，你仍然能使用传统方式：用一个像 {bootstrap} 或 {bulma} 这样的全局 CSS 样式，通过修改组件的 `className` 属性来达到目的。这样做缺点是组件无法进行自我样式管理，因为样式分布在单独的文件中。

CSS in JavaScript 概念的出现即是为了解决上述问题。

概念本身很简单：既然我们在 React 中己能通过 JavaScript 来**同时**控制逻辑和模板部分，何不再进一步，连样式也一并管理了呢？

{styled-components} 是今年本类别的冠军，它利用 JavasScript 最近新加入的模板字符串特性，让开发者在 React 组件中直接使用标准的 CSS 语法编写样式。

{css-modules}，作为本类别的亚军，则采用了混合的解决方案。它让开发者自己挑选诸如标准 CSS, SASS, {Less}, {Stylus}等方式编写样式，再以文件的方式**导入**到组件中。

[Mark Dalgleish](http://markdalgleish.com/)，{css-modules} 的作者，写了一篇有意思的文章来阐述 CSS-in-JavaScript 解决方案：[A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)。如果你对 CSS-in-Javascript 解决方案仍持怀疑态度的话，那此文绝对不容错过。

