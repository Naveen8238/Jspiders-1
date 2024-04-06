import React, { useState } from "react";
const Index = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    id: "",
    state: "",
    toogle: false,
  });
  const [text, setText] = useState();
  const handleSubmit = () => {
    setData([...data, user]);
    setText(" ");
  };
  const handleDel = (id) => {
    let fliterData = data.map((eachItem) => {
      if (eachItem.id == id) {
        return {
          id: id,
          state: eachItem.state,
          toogle: true,
        };
      } else {
        return eachItem;
      }
    });
    setData(fliterData);
  };
  const handleUndo = (id) => {
    let fliterData = data.map((eachItem) => {
      if (eachItem.id == id) {
        return {
          id: id,
          state: eachItem.state,
          toogle: false,
        };
      } else {
        return eachItem;
      }
    });
    setData(fliterData);
  };
  return (
    <>
      <h1>Hello world</h1>
      <hr />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setUser({
            id: new Date().getTime().toString(),
            state: text,
            toogle: false,
          });
        }}
      />
      <button onClick={handleSubmit}>+</button>
      {console.log(Math.random())}
      <hr />
      {data && (
        <ul>
          {data.map(({ id, state, toogle }) => {
            return (
              <li key={id}>
                <h1
                  style={
                    toogle
                      ? { textDecoration: "line-through", color: "red" }
                      : { textDecoration: "none" }
                  }
                >
                  {state}
                </h1>
                {toogle ? (
                  <button onClick={() => handleUndo(id)}>undo</button>
                ) : (
                  <button onClick={() => handleDel(id)}>delete</button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Index;
