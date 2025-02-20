import React from "react";
import "../Foooter/Footer.css";
import logo from "../Images/logo2.png";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src={logo} alt="logo" width={120} />
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Kadapa</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
