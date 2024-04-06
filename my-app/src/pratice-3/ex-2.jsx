import React, { useReducer } from "react";
const Index = () => {
  const reducer = (state, action) => {
    if (action.type === "ADD") {
      return state + action.payload;
    } else if (action.type === "SUB") {
      return state - action.payload;
    } else if (action.type === "MUL") {
      return state * action.payload;
    } else {
      return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 1);
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: 1 });
  };
  const handleSub = () => {
    dispatch({ type: "SUB", payload: 1 });
  };
  const handleMul = () => {
    dispatch({ type: "MUL", payload: 2 });
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSub}>SUB</button>
      <button onClick={handleMul}>MUL</button>
    </>
  );
};
export default Index;
