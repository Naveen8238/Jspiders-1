import React from "react";

const Index = () => {
  return (
    <>
      <h1>Hello</h1>
      <First firstName="Naveen" />
    </>
  );
};
const First = (props) => {
  return (
    <>
      <h1>My name is {props.firstName}</h1>
    </>
  );
};
export default Index;
