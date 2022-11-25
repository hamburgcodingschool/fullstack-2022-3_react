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

## Lesson 04 (21.11.2022):
- "Where" you put your state in your React application is very important (and can be tricky): It should be as "low" as possible (in your component tree). Don't put ALL your state into the top-level component.
- To use forms and inputs, we need to "wire them up" to the React world. We need to turn them into "**controlled components**" (controlled means, that React is controlling this input). This happens by moving the form/input value into state and then forwarding **two** props to the component: The actual value itself and a handler that updates the state variable, when we type/click into our input.
```jsx
function ControlledInput() {
  const [myStateValue, setMyStateValue] = useState("");

  function onTypeHandler(event) {
    setMyStateValue(event.target.value);
  }

  return(
    <input value={myStateValue} onChange={onTypeHandler} />
  )
}
```

## Lesson 05 (23.11.2022):
- Passing/forwarding props through many levels of components without modifying them is called `Prop Drilling`. If this happens a lot in your app, it might be a sign to use some **global state** – This is state, that you can access anywhere in your component tree, without using props to access it.
- The most popular **global state management** system is [Redux](https://redux.js.org/). However there are more lightweight alternatives for small and educational projects. For small uses cases, we can use React's [very own Context API](https://reactjs.org/docs/hooks-reference.html#usecontext) (via the `useContext()` hook). Another nice and small candidate for global state management is [Zustand](https://github.com/pmndrs/zustand).
- To interact with "stuff that doesn't live in React" (we call all of this stuff **Side Effects** like APIs, non-React JS libraries and frameworks, the global `document` or `window` object, timers, etc.), we can use the [`useEffect()` hook](https://reactjs.org/docs/hooks-effect.html).
- `useEffect()` takes a function (which contains side effects) as its first parameter. The second parameter is an array called `dependencies`, it contains an array of values. Whenever one of these changes, the function in the first parameter will run again.
```jsx
function MyComponent() {
  const [fetchedData, setFetchedData] = useState("");

  useEffect(() => {
    fetch("https://myApi.com/myEndpoint/234")
      .then((result) => result.json())
      .then((data) => {
        setFetchedData(data);
      });
  });

  return <div>{fetchedData}</div>;
}

```