import { useState } from "react";
export const Message = (props) => {
  const [message, setMessage] = useState("Welcome Visitor");
  const clickHandler = () => {
    setMessage("Thank for subscribing");
  };
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={clickHandler}>Subscribe</button>
    </div>
  );
};
