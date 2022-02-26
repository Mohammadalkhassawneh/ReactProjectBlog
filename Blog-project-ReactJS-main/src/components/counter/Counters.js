import React, { Component } from "react";
import Counter from "./Counter";

function Counters(props) {
  return (
    <div>
      <Counter
        key={props.key}
        option={props.option}
        yourNumber={props.yourNumber}
        id={props.id}
        willIncrease={() => props.willIncrease(props.id)}
        willDecrease={() => props.willDecrease(props.id)}
      />
    </div>
  );
}

export default Counters;
