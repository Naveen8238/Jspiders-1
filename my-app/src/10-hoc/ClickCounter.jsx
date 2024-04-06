import React from "react";
import enhancedCounter from "./enhancedCounter";

const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>
        ClickCounter : {props.count}
      </button>
    </div>
  );
};

export default enhancedCounter(ClickCounter);
