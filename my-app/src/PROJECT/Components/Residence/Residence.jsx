import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../Residence/Residences.css";
import { data } from "../Residence/data";
import { sliderSettings } from "./common";
const Residence = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => {
            const { image, name, price, detail } = card;
            return (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img scr={image} alt={name} />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{price}</span>
                  </span>
                  <span className="primaryText">{name}</span>
                  <span className="secondaryText">{detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Residence;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
