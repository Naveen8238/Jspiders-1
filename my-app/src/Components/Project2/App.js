import React from "react";
import Nav from "../src/Components/Project2/Nav";
import "./Components/Project2/project.css";
import Aside from "./Components/Project2/Aside";
import Footer from "./Components/Project2/Footer";
import Text from "./Components/Project2/Text";
import Card from "./Components/Project2/Card";

function App() {
  return (
    <>
      <Nav />
      <div className="main">
        <Aside />
        <div>
          <Text />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
