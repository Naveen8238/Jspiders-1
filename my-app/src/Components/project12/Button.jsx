import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOuttoogle } from "./reducer/Action";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const btn = {
    width: "250px",
    height: "30px",
    textAlign: "center",
    backgroundColor: "lightyellow",
  };
  const toogle = useSelector((item) => {
    return item.buttonreducer;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginOut = () => {
    if (toogle) {
      navigate("/");
    } else {
      navigate("/loginpage");
    }
    dispatch(logOuttoogle());
  };
  return (
    <>
      {toogle ? (
        <button style={btn} onClick={handleLoginOut}>
          Login out
        </button>
      ) : (
        <button style={btn} onClick={handleLoginOut}>
          Login in
        </button>
      )}
    </>
  );
};
export default Button;
