//My component

import { useState } from "react";
import { NavItem } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}

//using interpolation we can use once decalre varibale multiple times

function MyComponent() {
  let [message, setMessage] = useState("");
  let [list, setList] = useState([]);

  const TweetHere = (e) => {
    const newlist = [...list, message];
    setList(newlist);

    setMessage("");
  };

  const changemsg = (e) => {
    const newMsg = e.target.value;
    setMessage(newMsg);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        className="form forn-control"
        placeholder="Tweet here...."
        onChange={changemsg}
      />
      <input type="button" value="Tweet" onClick={TweetHere} />

      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
