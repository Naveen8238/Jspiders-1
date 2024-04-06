import React from "react";
import "../Companies/Company.css";
import pro from "../Images/prologis.png";
import tower from "../Images/tower.png";
import equal from "../Images/equinix.png";
import really from "../Images/realty.png";

const Company = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={pro} alt="image1" />
        <img src={tower} alt="image2" />
        <img src={equal} alt="image3" />
        <img src={really} alt="image4" />
      </div>
    </section>
  );
};
export default Company;
