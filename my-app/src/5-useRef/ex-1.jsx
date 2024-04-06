import React, { useEffect, useState, useRef } from "react";
const Index2 = () => {
  const [firstName, setFirstName] = useState("");
  // const [count,setcount] = useState(1)
  // useEffect(()=>{
  //     setcount(count+1)
  // })
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div>
      <h1>Hello World</h1>
      <input
        type="text"
        id="name"
        name="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <h3>Typing: {firstName}</h3>
      <h5>Component renderd {renderCount.current} times</h5>
    </div>
  );
};
export default Index2;
