import React, { useState } from "react";
const Index = () => {
  const intialData = {
    firstName: "Naveen",
    lastName: "Kumar",
    age: 21,
  };
  const [data, setData] = useState(intialData);
  return (
    <div>
      <h1>firstName : {data.firstName}</h1>
      <button onClick={() => setData({ ...data, firstName: "Nandu" })}>
        changeFirstName
      </button>
      <h1>lastName: {data.lastName}</h1>
      <button onClick={() => setData({ ...data, lastName: "Chennamsetty" })}>
        changeLastName
      </button>
      <h1>age : {data.age}</h1>
      <button onClick={() => setData({ ...data, age: 20 })}>change age</button>
    </div>
  );
};
export default Index;
