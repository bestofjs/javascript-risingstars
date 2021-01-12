---
id: react
language: en
---

At positions 1 and 5, {ant-design} and {material-ui} projects were the most popular sets of components and widgets for React.

At the position 2 {create-react-app} is still the de-facto standard to create a new React application. A major update this year: {typescript} is now supported.

The biggest change in the React world was the introduction of the [hooks](https://reactjs.org/docs/hooks-intro.html) pattern.

React being only the view layer, the question about how to share logic between components has always been controversial.
It seems there is an evolution that can be described in 4 steps:

- 2013: Mixins to share functionalities between React classes
- 2015: Higher Order Components to inject props into React components
- 2017: Render prop pattern
- 2019: Hooks to write functional components everywhere

This year we have seen a lot of libraries that leverage the power offered by the hooks to solve problems related to:

- state management: [Redux](https://redux.js.org) now provides hooks to easily interact with the central store
- routing: {react-router} provides hooks to access the browser history
- form validation: [React Hook Form](https://react-hook-form.com/) has a unique way of handling form validation using "uncontrolled" form controls

Are hooks the final step of the evolution?
