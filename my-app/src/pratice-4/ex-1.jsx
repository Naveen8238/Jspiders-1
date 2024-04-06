import React from "react";
const Index = () => {
  const data = {
    firstName: "Naveen",
    lastName: "chennamsetty",
  };
  return (
    <>
      <h1>This is parent component</h1>
      <hr />
      <ChildComponent data={data} />
    </>
  );
};
const ChildComponent = ({ data }) => {
  console.log("this data from a component", data);
  return (
    <>
      <h1>This is ChildComponent</h1>

      <hr />
      <SubChildComponent data={data} />
    </>
  );
};
const SubChildComponent = ({ data }) => {
  console.log("this data from subChildComponent", data);
  return (
    <>
      <h1>This is SubChildComponent</h1>
    </>
  );
};
export default Index;
