import React, { useState, useMemo, useEffect } from "react";

const Index = () => {
  const [number, setnumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeChange = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("themeChanged");
  }, [themeChange]);
  return (
    <div>
      <input
        type="number"
        name="number"
        id="number"
        value={number}
        onChange={(e) => setnumber(Number(e.target.value))}
      />{" "}
      <br />
      <button onClick={() => setDark(!dark)}>Change theme</button>
      <h2 style={themeChange}>The number :{doubleNumber}</h2>
    </div>
  );
};
const slowFunction = (number) => {
  for (let i = 0; i < 1000000000000000000; i++) {
    console.log("slow function running");
    return number * 2;
  }
};
export default Index;
