import React from "react";
import "../Started/Started.css";
const Started = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:naveen@gmail">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Started;
