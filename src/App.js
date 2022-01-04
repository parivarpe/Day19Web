//My component

import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

//using interpolation we can use once decalre varibale multiple times

function MyComponent() {
  let [counter, setcounter] = useState(0);
  let [counter1, setcounter1] = useState(0);
  function increment() {
    counter = counter + 1;
    console.log(counter);
    setcounter(counter);
  }

  function decreament() {
    counter1 = counter1 - 1;
    setcounter1(counter1);
    console.log(counter1);
  }

  return (
    <div className="container-fluid mt-3">
      <input
        type="button"
        value="like"
        className="btn btn-primary"
        onClick={increment}
      />{" "}
      {counter}
      <input
        type="button"
        value="Dislike"
        className="btn btn-primary"
        onClick={decreament}
      />
      {counter1}
    </div>
  );
}
