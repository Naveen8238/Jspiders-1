import React from "react";
const Index = () => {
  return (
    <>
      <h1>Hello World</h1>
      <First firstname="Naveen" />
    </>
  );
};
const First = (props) => {
  const { firstname } = props;
  return (
    <>
      <h1>My name is {firstname}</h1>
    </>
  );
};
export default Index;
