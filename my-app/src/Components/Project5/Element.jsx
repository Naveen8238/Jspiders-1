import React from "react";
import "../Project5/Element.css";
const Index = () => {
  let data = [
    {
      id: 1,
      name: "img1",
      img: "Images/mobile1.jpg",
      title: "iphone",
      price: 789,
    },
    {
      id: 2,
      name: "img2",
      img: "Images/mobile2.jpg",
      title: "realme",
      price: 678,
    },
    {
      id: 3,
      name: "img3",
      img: "Images/mobile3.jpg",
      title: "Nokia",
      price: 344,
    },
    {
      id: 4,
      name: "img4",
      img: "Images/shoes1.jpg",
      title: "bata",
      price: 567,
    },
    {
      id: 5,
      name: "img5",
      img: "Images/shoes2.jpg",
      title: "nike",
      price: 682,
    },
    {
      id: 6,
      name: "img6",
      img: "Images/shoes3.jpg",
      title: "addi",
      price: 235,
    },
    {
      id: 7,
      name: "img7",
      img: "Images/shirt1.jpg",
      title: "T-shirt",
      price: 578,
    },
    {
      id: 8,
      name: "img8",
      img: "Images/shirts2.jpg",
      title: "shirt",
      price: 267,
    },
    {
      id: 9,
      name: "img9",
      img: "Images/shirts3.jpg",
      title: "formal",
      price: 456,
    },
  ];
  const styles = { width: "250px", height: "100px" };
  let p = "";
  const handleSubmit = () => {
    let x = document.getElementById("text").value;
    let newdata = data.filter((eachItem) => {
      return eachItem.name === x;
    });
    if (newdata.length >= 1) {
      newdata.map((eachItem) => {
        const { id, name, img, title, price } = eachItem;
        return (p += `<div key=${id} id="card">
        <h1>${name}</h1>
        <p>${title}</p>
        <img src=${img} alt=${name} id="img"/>
        <h2>${price}</h2>
      </div>`);
      });
      data = newdata;
      return (document.getElementById("tex").innerHTML = p);
    } else {
      document.getElementById("tex").innerHTML = `<h1>there is no data</h1>`;
    }
  };
  const handleSort = () => {
    let x = document.getElementById("sect").value;
    if (x === "A_Z") {
      let newData = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      newData.map((eachItem) => {
        const { id, name, img, title, price } = eachItem;
        return (p += `<div key=${id} class="card container">
        <div>
        <h1>${name}</h1>
        <h1>${title}</h1>
        <img src=${img} alt=${name} id="img"/>
        <h2>${price}</h2>
        </div>
      </div>`);
      });
      return (document.getElementById("tex").innerHTML = p);
    } else if (x === "Z_A") {
      let newData = data.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      newData.map((eachItem) => {
        const { id, name, img, title, price } = eachItem;
        return (p += `<div key=${id} class="card container">
        <div>
        <h1>${name}</h1>
        <h1>${title}</h1>
        <img src=${img} alt=${name} id="img"/>
        <h2>${price}</h2>
        </div>
      </div>`);
      });
      return (document.getElementById("tex").innerHTML = p);
    } else if (x === "1-10") {
      let newData = data.sort((a, b) => {
        return a.price - b.price;
      });
      newData.map((eachItem) => {
        const { id, name, img, title, price } = eachItem;
        return (p += `<div key=${id} class="card container">
       <div>
       <h1>${name}</h1>
       <h1>${title}</h1>
       <img src=${img} alt=${name} id="img"/>
       <h2>${price}</h2>
       </div>
      </div>`);
      });
      return (document.getElementById("tex").innerHTML = p);
    } else if (x === "10-1") {
      let newData = data.sort((a, b) => {
        return b.price - a.price;
      });
      newData.map((eachItem) => {
        const { id, name, img, title, price } = eachItem;
        return (p += `<div key=${id} class="card container" >
        <div>
        <h1>${name}</h1>
        <h1>${title}</h1>
        <img src=${img} alt=${name} id="img"/>
        <h2>${price}</h2>
        </div>
      </div>`);
      });
      return (document.getElementById("tex").innerHTML = p);
    }
  };
  return (
    <div>
      <input type="text" id="text" />
      <button onClick={handleSubmit}>🔍</button>
      <select onClick={handleSort} id="sect">
        <option>Select option</option>
        <option>A_Z</option>
        <option>Z_A</option>
        <option>1-10</option>
        <option>10-1</option>
      </select>
      <div id="tex"></div>
      {data.map((eachItem) => {
        const { id, name, img, title, price } = eachItem;
        return (
          <div
            key={id}
            style={{
              color: "blue",
              backgroundColor: "yellowgreen",
              width: "250px",
            }}
            className="container"
          >
            <div>
              <h1>{name}</h1>
              <h1>{title}</h1>
              <img src={img} alt={name} style={styles} />
              <h2>{price}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Index;
