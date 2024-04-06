import React, { useState } from "react";
const Index = () => {
  const [global, setGlobal] = useState(0);
  const [mul, setMul] = useState(2);
  const [add, setAdd] = useState(1);
  const [sub, setSub] = useState(1);
  const handleAdd = () => {
    setGlobal(global + add);
  };
  const handleSub = () => {
    setGlobal(global - sub);
  };
  const handleMul = () => {
    setGlobal(global * mul);
  };
  return (
    <>
      <h1>{global}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSub}>SUB</button>
      <button onClick={handleMul}>MUL</button>
    </>
  );
};
export default Index;
