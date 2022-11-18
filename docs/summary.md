## Lesson 01 (14.11.2022):
- React is the most popular frontend framework
- React is maintained and funded by Facebook
- React was built in JavaScript
- React runs in the Browser
- React is no black magic. Everything React does can also be done without React (it's just a lot harder to do so)
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

## Lesson 02 (16.11.2022):
- React components can define properties (**Props**):
```jsx
function Greeter(props) {
  return (
    <h1>Hello, {props.name} from {props.location}!</h1>
  );
}
```
- Passing something to these properties looks like using regular HTML attributes (like `src`, `href`, etc.)
```jsx
<Greeter name="Maria" location="Berlin" />
```
- There is a special prop called `children`, which automatically contains everything that's been nested inside of a React component.
```jsx
function Greeter(props) {
  return (
    <div>
      <h1>Hello, {props.name} from {props.location}!</h1>
      <div>{props.children}</div>
    </div>
  );
}
```
- Using/passing children to a component looks like this:
```jsx
<Greeter name="Maria" location="Berlin">
  <>
    <h2>More content goes here</h2>
    <p>All this content will be passed to the component.</p>
  </>
</Greeter>
```