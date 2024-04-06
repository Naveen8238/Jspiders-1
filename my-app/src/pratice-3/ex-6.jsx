import React, { useState } from "react";
const Index = () => {
  const [message, setMessage] = useState({
    id: "",
    text: "",
  });
  const [list, setList] = useState([]);
  let data = localStorage.setItem("token", JSON.stringify(list));
  let getdata = JSON.parse(localStorage.getItem("token"));
  const [Data, setData] = useState(getdata);
  const Addhandler = () => {
    setList([...list, message]);
    setMessage({
      id: "",
      text: "",
    });
  };
  console.log(Data);
  return (
    <>
      <h1>This is todo List</h1>
      <hr />
      <input
        type="text"
        placeholder="enter some text"
        value={message.text}
        onChange={(e) => {
          setMessage({
            id: new Date().getTime().toString(),
            text: e.target.value,
          });
        }}
      />
      <button onClick={Addhandler}>ADD</button>
      <hr />
      <ul>
        {Data &&
          Data.map((eachItem) => {
            const { id, text } = eachItem;
            return (
              <li key={id}>
                <h1>{text}</h1>
                <button>DELETE</button>
                <button>EDIT</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Index;
