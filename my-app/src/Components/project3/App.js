import React from "react";
import Banner from "./Components/project3/Banner";
import Products from "./Components/project3/Products";
function App() {
  const data = [
    {
      id: 1,
      name: "img1",
      img: "Images/mobile1.jpg",
      title: "Mobiles",
    },
    {
      id: 2,
      name: "img2",
      img: "Images/mobile2.jpg",
      title: "Mobiles",
    },
    {
      id: 3,
      name: "img3",
      img: "Images/mobile3.jpg",
      title: "Mobiles",
    },
    {
      id: 4,
      name: "img4",
      img: "Images/shoes1.jpg",
      title: "Shoes",
    },
    {
      id: 5,
      name: "img5",
      img: "Images/shoes2.jpg",
      title: "Shoes",
    },
    {
      id: 6,
      name: "img6",
      img: "Images/shoes3.jpg",
      title: "Shoes",
    },
    {
      id: 7,
      name: "img7",
      img: "Images/shirt1.jpg",
      title: "shirt",
    },
    {
      id: 8,
      name: "img9",
      img: "Images/shirts2.jpg",
      title: "shirt",
    },
    {
      id: 9,
      name: "img9",
      img: "Images/shirts3.jpg",
      title: "shirt",
    },
  ];
  return (
    <>
      <Banner />
      <Products data={data} />
    </>
  );
}
