//My component

import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}

//using interpolation we can use once decalre varibale multiple times

function MyComponent() {
  let [msg, setMsg] = useState("Hello..");

  const changeMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={msg}
        className=" form-control"
        onChange={changeMsg}
      />

      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
    </div>
  );
}
