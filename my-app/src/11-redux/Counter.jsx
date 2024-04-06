import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decHandler, incHandler, textHandler } from "./Action";
const Counter = () => {
  const data = useSelector((data) => {
    return data.Countreducer;
  });
  const text = useSelector((data) => {
    return data.textReducer;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h1>inc : {data.inc}</h1>
      <h1>dec : {data.dec}</h1>
      <button
        onClick={() => {
          dispatch(incHandler());
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatch(decHandler());
        }}
      >
        dec
      </button>
      <hr />
      <input
        type="text"
        value={text.value}
        onChange={(e) => {
          dispatch(textHandler(e));
        }}
      />
      <h1>text : {text.value} </h1>
    </>
  );
};
export default Counter;
