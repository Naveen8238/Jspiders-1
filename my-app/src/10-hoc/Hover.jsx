import React, { useState } from "react";
import enhancedCounter from "./enhancedCounter";

const Hover = (props) => {
  return (
    <div>
      <h2 onMouseEnter={props.incrementCount}>Hover times {props.count}</h2>
    </div>
  );
};
export default enhancedCounter(Hover);
