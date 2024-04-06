import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import "../src/App.css";
import Company from "./Companies/Company";
import Residence from "./Residence/Residence";
import Value from "./Value/Value";
import Contact from "./Contact/Contact";
import Started from "./Started/Started";
import Footer from "./Foooter/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Company />
      <Residence />
      <Value />
      <Contact />
      <Started />
      <Footer />
    </div>
  );
}
