## Lesson 01 (14.11.2022):
- React is the most popular frontend framework
- React is maintained and funded by Facebook
- React was built in JavaScript
- React runs in the Browser
- React is no black magic. Everything React does can also be done without React (it's just a lot harded to do so)
- `create-react-app` is a **scaffolding tool** – it helps us to set up React projects. Just run `npx create-react-app MyAppName` and you will have a new project.
- React comes together with **JSX** – which looks like its HTML inside of React
- React helps us to better structure and reuse code by using **Components**
- A component is just a function that returns JSX
```jsx
function MyComponent() {
  return (
    <>
      <h1>Hello this is JSX</h1>
      <AnotherComponent />
    </>
  );
}
```
- A component must always have a **single top-level element**
```jsx
// THIS WILL NOT WORK - NO SINGLE TOP-LEVEL ELEMENT
function MyComponent() {
  return (
    <h1>Hello this is JSX</h1>
    <AnotherComponent />
  );
}
```
- If you want to have a single top-level element without any semantic meaning, you can use a **Fragment**: `<>` and `</>`
