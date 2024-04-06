import React, { useState } from "react";
import Delete from "./Delete";
const Index = () => {
  const [data, setData] = useState({
    username: "",
    pass: "",
    cpass: "",
    select: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username === " ") {
      console.log("please enter username");
    } else if (data.pass !== data.cpass) {
      console.log("please match the password");
    } else if (data.select === " ") {
      console.log("please enter value");
    }
  };
  return (
    <form>
      <input
        type="text"
        placeholder="enter username"
        onChange={(e) => {
          setData({
            ...data,
            username: e.target.value,
          });
        }}
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        onChange={(e) => {
          setData({
            ...data,
            pass: e.target.value,
          });
        }}
      />
      <br />
      <input
        type="password"
        placeholder="enter confirm password"
        onChange={(e) => {
          setData({
            ...data,
            cpass: e.target.value,
          });
        }}
      />
      <br />
      <select
        onChange={(e) => {
          setData({
            ...data,
            select: e.target.value,
          });
        }}
      >
        <option value="react">React</option>
        <option value="Next">Next</option>
        <option value="vue">vue</option>
      </select>
      <br />
      <button onClick={handleSubmit}>submit</button>
      {data.username && data.pass === data.cpass && data.select && (
        <Delete data={data} />
      )}
    </form>
  );
};
export default Index;
