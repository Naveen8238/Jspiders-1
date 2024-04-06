import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  const styling = {
    width: "100px",
    heigth: "25px",
    borderRadius: "2px solid red",
    background: "yellow",
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello world</h1>
      <button style={styling} onClick={handleInc}>
        +
      </button>
      <button style={styling}>{count}</button>
      <button style={styling} onClick={handleDec}>
        -
      </button>
    </div>
  );
};
export default Index;
