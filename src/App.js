//My component

import { useState } from "react";
import { ListGroupItem, NavItem } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}

//using interpolation we can use once decalre varibale multiple times

function MyComponent() {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [list, setList] = useState([]);

  function changeusername(e) {
    const newpass = e.target.value;
    setUserName(newpass);
  }

  function changepass(e) {
    const newemail = e.target.value;
    setpassword(newemail);
  }

  function changeemail(e) {
    const newphone = e.target.value;
    setEmail(newphone);
  }

  function changephone(e) {
    const newUname = e.target.value;
    setPhone(newUname);
  }
  function registerHere() {
    const user = {
      username: username,
      password: password,
      email: email,
      phone: phone,
    };

    const newList = [user, ...list];
  }

  return (
    <div>
      <div className="p-3">
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={changeusername}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Password"
            onChange={changepass}
          />
        </div>
        <div>
          <input type="text" placeholder="Enter Email" onChange={changeemail} />
        </div>
        <div>
          <input type="text" placeholder="Enter phone" onChange={changephone} />
        </div>

        <div>
          <input type="button" value="Register" onClick={registerHere} />
        </div>
      </div>
    </div>
  );
}
