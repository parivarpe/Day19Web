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
  let [tweetMsg, setTweetMsg] = useState("");
  let [TweetList, setTweetList] = useState([]);

  const ChangeTweetMsg = (e) => {
    const newTweetMsg = e.target.value;
    setTweetMsg(newTweetMsg);
  };

  const TweetHere = () => {
    const newTweetList = [tweetMsg, ...TweetList];
    setTweetList(newTweetList);
    setTweetMsg("");
  };

  const DeleteTweet = () => {
    TweetList.splice(0, 1);
    setTweetList([...TweetList]);
  };
  return (
    <div>
      <input
        type="text"
        value={tweetMsg}
        placeholder="Whats upp...."
        onChange={ChangeTweetMsg}
      />
      <input type="button" value="Tweet" onClick={TweetHere} />

      <input type="button" value="Delete Tweet" onClick={DeleteTweet} />

      <div>
        {TweetList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
