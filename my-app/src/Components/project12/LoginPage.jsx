import React, { useEffect } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { Add, loginData } from "./reducer/Action";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const container = {
    display: "flex",
  };
  const x = useSelector((item) => {
    return item.loginreducer;
  });
  const y = useSelector((item) => {
    return item.loginAddreducer;
  });
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginData());
  }, [dispatch]);
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
  const item = {
    width: "400px",
    height: "150px",
    border: "2px solid black",
    padding: "20px",
  };
  const btnstyle = {
    position: "fixed",
    left: "0",
  };
  const btnsubmit = {
    width: "200px",
    height: "40px",
    backgroundColor: "yellowgreen",
  };
  const handleADD = (id) => {
    let fliterData = x.data.filter((item) => {
      return id === item.id;
    });
    dispatch(Add(fliterData));
  };
  const handleSubmit = () => {
    Navigate("/data");
  };
  return (
    <>
      {x.loading ? (
        <h2 style={{ color: "red" }}>Loading Data </h2>
      ) : (
        <div style={container}>
          <ul style={list}>
            {x.data
              .map(({ id, name, email }) => {
                return (
                  <li key={id} style={item}>
                    <h2>userId : {name}</h2>
                    <h4>title : {email}</h4>
                    <button onClick={() => handleADD(id)}>ADD</button>
                  </li>
                );
              })
              .splice(0, 50)}
          </ul>
          <div>
            <Button style={btnstyle} />
            <h1>Total : {y.length}</h1>
            <button style={btnsubmit} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default LoginPage;
