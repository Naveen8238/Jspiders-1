import React, { useState } from "react";
const Index = () => {
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const [list, setList] = useState([]);
  const handleAdd = () => {
    setList([...list, message]);
    setMessage({
      id: "",
      text: "",
    });
  };
  const [edit, setEditing] = useState({
    id: "",
    isediting: false,
  });
  const handleDelete = (id) => {
    let newData = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newData);
  };
  const handleEdit = (id) => {
    setEditing({
      ...edit,
      id: id,
      isediting: true,
    });
    let newdata = list.find((eachItem) => {
      return eachItem.id === id;
    });
    setMessage({
      ...message,
      id: newdata.id,
      text: newdata.text,
    });
  };
  const changeEdit = (e) => {
    e.preventDefault();
    let newdata = list.map((eachItem) => {
      if (eachItem.id === edit.id) {
        return {
          text: message.text,
          id: edit.id,
        };
      } else {
        return eachItem;
      }
    });
    setList(newdata);
    setMessage({
      ...message,
      id: "",
      text: "",
    });
    setEditing({
      ...edit,
      id: "",
      isediting: false,
    });
  };
  return (
    <div>
      <h1
        style={{
          color: "black",
          background: "rgb(238,174,202)",
          background:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          textAlign: "center",
        }}
      >
        Hello this is todo list
      </h1>
      <hr />
      <input
        type="text"
        placeholder="Enter some text"
        value={message.text}
        onChange={(e) =>
          setMessage({
            ...message,
            id: Date.now().toString(),
            text: e.target.value,
          })
        }
      />
      {edit.isediting ? (
        <button onClick={changeEdit}>edit</button>
      ) : (
        <button onClick={handleAdd}>ADD</button>
      )}
      <hr />
      {list.length <= 0 && <h1 style={{ color: "red" }}>There is no Data</h1>}
      <ul>
        {list.map(({ id, text }) => {
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => handleDelete(id)}>Delete</button>
              <button onClick={() => handleEdit(id)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;
