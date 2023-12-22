---
id: all
language: en
---

The hottest project of the year is `shadcn/ui` a set of UI components, written in React whose styling can be customized using TailwindCSS.

It's built on top {radix} a set of headless components that provide the primitives to handle concerns such as accessibility, keyboard interactions...

What makes it unique compared to the other popular libraries (such as MUI, ChakraUI, React Spectrum...) is the fact that it's not a library you download by using `npm install`. No, you copy-paste the code, so that you own the code! To be more accurate, you integrate a given `shadcn/ui` component by running a Command Line that will install the underlying dependencies (Radix and some other robust headless solutions, depending on the component) and copy the source code of the component in your code base.

It seems that almost all new React projects were using `shadcn/ui`. Among many other projects, it was picked by Kent C. Dodds for his brand new [Epic Stack](https://www.epicweb.dev/epic-stack).

Its success is highly correlated to the popularity of TailwindCSS and the fact it plays well with React Server Components. Not to mention a great documentation.

Check this article for a deep analysis: [The anatomy of shadcn/ui](https://manupa.dev/blog/anatomy-of-shadcn-ui).
