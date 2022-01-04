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
  const [list, setList] = useState(["hello"]);

  const tweethere = (e) => {
    const newlist = [...list, "Hello Univeerse"];
    setList(newlist);
  };

  return (
    <div>
      <input type="text" placeholder="Tweet here..." className="form-control" />
      <input
        type="button"
        value="Tweet"
        className="btn btn-info btn-lg"
        onClick={tweethere}
      />

      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
