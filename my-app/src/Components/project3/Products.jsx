import React from "react";

const Products = ({ data }) => {
  const images = {
    width: "100px",
    height: "150px",
  };
  return (
    <ol>
      {data.map((eachItem, index) => {
        const { img, name, title, id } = eachItem;
        return (
          <li key={index}>
            <h1 style={{ color: id % 2 === 0 ? "red" : "blue" }}>{name}</h1>
            <img src={img} alt={title} style={images} />
            <h4 style={{ color: id % 2 === 0 ? "red" : "blue" }}>{title}</h4>
          </li>
        );
      })}
    </ol>
  );
};
export default Products;
