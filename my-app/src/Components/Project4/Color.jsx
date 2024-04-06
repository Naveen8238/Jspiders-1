import React from "react";
const Index = () => {
  const data = ["red", "black", "orange", "green", "yellow"];
  return (
    <>
      {data.map((eachItem, index) => {
        return (
          <button
            style={{ color: eachItem, border: `2px solid ${eachItem}` }}
            key={index}
          >
            {eachItem}
          </button>
        );
      })}
    </>
  );
};
export default Index;
