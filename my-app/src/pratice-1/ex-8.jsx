import React, { useState } from "react";
const Index = () => {
  const [text, setText] = useState({
    message: "",
    id: "",
  });
  const [list, setList] = useState([]);
  const handleAdd = () => {
    e.preventDefault();
    setList({
      ...list,
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter some text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </>
  );
};
export default Index;
