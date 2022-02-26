import React from "react";
import Counters from "./Counters";

function Counter(props) {
  return (
    <div>
      <h3>{props.option}</h3>
      <h3>{props.yourNumber}</h3>
      <button onClick={props.willIncrease}>increaseMe</button>
      <button onClick={props.willDecrease}>decreaseMe</button>
    </div>
  );
}

export default Counter;
