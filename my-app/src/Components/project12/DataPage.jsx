import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { Clear } from "./reducer/Action";
const DataPage = () => {
  const x = useSelector((item) => {
    return item.loginAddreducer;
  });
  const contain = {
    display: "flex",
    flexDirection: "column",
  };
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(Clear());
  };
  const item = {
    border: "2px solid black",
    padding: "20px",
  };
  const list = {
    width: "1000px",
    height: "600px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "Wrap",
    rowGap: "2px",
    columnGap: "2px",
    listStyleType: "None",
  };
  return (
    <>
      <div style={contain}>
        <h1>You have selected the users data</h1>
        <button
          style={{
            width: "250px",
            height: "30px",
            margin: "20px",
            backgroundColor: "yellow",
            display: "inline-block",
          }}
          onClick={handleClear}
        >
          Clear All
        </button>
        <Button />
        <ul style={list}>
          {x.flat().map(({ id, name, email, body }) => {
            return (
              <li key={id} style={item}>
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{body}</h1>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default DataPage;
