import React from "react";
import "../Project1/project1.css";
import img1 from "../Project1/Images/shirt1.jpg";
import img2 from "../Project1/Images/shirts2.jpg";
import img3 from "../Project1/Images/shirts3.jpg";
import img4 from "../Project1/Images/shoes1.jpg";

// const data = [
//   { image: "../src/Images/shirt1.jpg" },
//   { image: "../src/Images/shirts2.jpg" },
// ];

const Index = () => {
  return (
    <section>
      <img src={img1} alt="img1" className="img1" />
      <img src={img2} alt="img2" className="img2" />
      <img src={img3} alt="img3" className="img3" />
      <img src={img4} alt="img4" className="img4" />
      {/* {data.map((eachItem, index) => {
        const { image } = eachItem;
        console.log(eachItem);
        return (
          <div key={index}>
            <img src={image} alt={index} />
          </div>
        );
      })} */}
    </section>
  );
};
export default Index;
