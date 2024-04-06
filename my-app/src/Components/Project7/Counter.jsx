import React, { useState } from "react";
const Index = () => {
  const [num, setNum] = useState(1);
  const [error, setError] = useState(false);
  const handle2 = () => {
    if (num < 0 || num > 100) {
      setError(true);
      setNum(0);
    } else {
      setNum(num + 2);
    }
  };
  const handle5 = () => {
    if (num > 100 || num < 0) {
      setNum(0);
      setError(true);
    } else {
      setNum(num * 5);
    }
  };
  const handle1 = () => {
    if (num < 0 || num > 100) {
      setNum(0);
      setError(true);
    } else {
      setNum(num - 1);
    }
  };
  const handle8 = () => {
    if (num < 0 || num > 100) {
      setNum(0);
      setError(true);
    } else {
      setNum(num + 8);
    }
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handle2}>+2</button>
      <button onClick={handle5}>*5</button>
      <button onClick={handle1}>-1</button>
      <button onClick={handle8}>+8</button>
      {error && <h1>This is invalid</h1>}
    </div>
  );
};
export default Index;
