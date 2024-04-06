import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateTosuccess = () => {
    navigate("/success");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigateTosuccess}>Submit form</button>
    </div>
  );
};

export default Home;
