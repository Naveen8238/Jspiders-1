import React, { useState } from "react";
import Divide from "./Components/Project8/Divide";
import Button from "./Components/Project8/Button";
function App() {
  let Colors = "0123456789ABCDEF";
  const [color, setColor] = useState("yellow");
  return (
    <>
      <Divide color={color} />
      <Button Colors={Colors} sethandler={setColor} />
    </>
  );
}
