import React, { useState } from "react";
const Index = () => {
  const initialData = [
    {
      firstName: "Naveen",
      lastName: "Chennamsetty",
      age: 21,
    },
    {
      firstName: "Nandu",
      lastName: "Chennamsetty",
      age: 18,
    },
    {
      firstName: "Nari",
      lastName: "Chennamsetty",
      age: 17,
    },
  ];
  const [data, setData] = useState(initialData);
  const handleDelete = (i) => {
    let filter = data.filter((eachItem, index) => {
      return i != index;
    });
    setData(filter);
  };
  return (
    <div>
      <h1>Users data </h1>
      {data.map((eachItem, index) => {
        const { firstName, lastName, age } = eachItem;
        return (
          <section key={index}>
            <h1>my firstName:{firstName}</h1>
            <h1>LastName:{lastName}</h1>
            <h1>age : {age}</h1>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </section>
        );
      })}
    </div>
  );
};
export default Index;
