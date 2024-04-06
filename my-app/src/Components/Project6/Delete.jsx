import React from "react";

const Delete = (prop) => {
  console.log(prop);
  return (
    <div>
      <h1>{prop.data.username}</h1>
      <h2>{prop.data.pass}</h2>
      <h3>{prop.data.cpass}</h3>
      <h4>{prop.data.select}</h4>
    </div>
  );
};
export default Delete;
