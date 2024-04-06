import React from "react";
import Button from "./Button";
const Home = () => {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <>
      <div style={container}>
        <h1>Welcome to Login Page</h1>
        <Button />
      </div>
    </>
  );
};
export default Home;
