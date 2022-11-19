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

## Lesson 03 (18.11.2022):
- Instead of using the `props.myProp` syntax inside of a component, you can also use **Object destructuring** inside of the Component parameters.
```jsx
function Greeter({name, location}) {
  return (
    <h1>Hello, {name} from {location}!</h1>
  );
}
```
- Using this syntax also allows to set **default values** for each prop individually, when they are not passed in:
```jsx
function Greeter({name, location = "Hamburg"}) {
  return (
    <h1>Hello, {name} from {location}!</h1>
  );
}
```
- You can conditionally render some parts of your components by using the **logical OR**, **logical AND** and **ternary operator**:
```jsx
function Greeter({myBooleanCondition, myProperty}) {
  return (
    <>
      {/* Logical AND: Render something ONLY when another variable is truthy */}
      {myBooleanCondition && <h1>Hello</h1>}
      {/* Logical OR: Render something ONLY when it is truthy OTHERWISE use a fallback value */}
      {myProperty || "Fallback value"}
      {/* Ternary Operator: Render A or B, depending on a condition (like if/else) */}
      {myBooleanCondition ? <h2>If true, this headline will appear</h2>:<p>If false, this paragraph will render</p>}
    </>
  );
}
```
- You can attach event handlers just like you do in regular HTML (but the event names are camelCased):
```jsx
{/* You can pass a reference to a function that you defined somewhere else */}
<MyComponent onClick={onClickHandler} />
{/* You can also define an arrow function right here */}
<MyComponent onClick={() => {console.log("I was clicked!")}} />
```
- When you want to store data inside of a React component in a persistent way (across rerenders), we need to store it in the **state** of our component.
- In React, we can access and modify the **state** of a component with the `useState()` **hook function**. `useState()` takes a single parameter, which is the default/starting value of your state variable. The hook function returns two things: the actual state variable (which we can use to access/read the state) and a function to change the state variable (to modify the value).
```jsx
const [counterValue, setCounterValue] = useState(123);
```