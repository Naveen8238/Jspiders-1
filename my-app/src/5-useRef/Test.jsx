import React, { useEffect, useState } from "react";

function Test() {
  let [count, setcount] = useState(1);
  useEffect(() => {
    console.log("hello effect");
    return function () {
      console.log("hello cleanup");
    };
  }, [count]);
  return (
    <div>
      <h1>test</h1>
      <h1>count{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default Test;
