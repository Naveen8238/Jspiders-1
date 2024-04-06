let userdata = [];
let z = "";
function getItem() {
  userdata = JSON.parse(localStorage.getItem("token"));
  return userdata;
}
// function setItem(data) {
//   userdata = localStorage.setItem("token", JSON.stringify(data));
// }
function clear() {
  userdata = localStorage.clear("token");
}
function user() {
  getItem();
  userdata.map((eachItem) => {
    return (z += `
    <div class="subcard" key=${eachItem.id}>
    <h1>${eachItem.title}</h1>
    <img src="${eachItem.thumbnail}" alt="${eachItem.title}" />
    <h2>${eachItem.price}</h2>
    <h3>${eachItem.rating}</h3>
    <p>${eachItem.description}</p>
  </div>
    `);
  });
  document.getElementById("subdata").innerHTML = z;
}
user();
// document.getElementById("lowtohigh").onclick = function () {
//   z = "";
//   getItem();
//   x = userdata.sort((a, b) => {
//     return a.price - b.price;
//   });
//   setItem(x);
//   user();
// };

// document.getElementById("hightolow").onclick = function () {
//   z = "";
//   getItem();
//   x = data.sort((a, b) => {
//     return b.price - a.price;
//   });
//   setItem(x);
//   user();
// };
// document.getElementById("A-Z").onclick = function () {
//   z = "";
//   x = data.sort((a, b) => {
//     return a.title.localeCompare(b.title);
//   });
//   data = x;
//   user();
// };
// document.getElementById("Z-A").onclick = function () {
//   z = "";
//   x = data.sort((a, b) => {
//     return b.title.localeCompare(a.title);
//   });
//   data = x;
//   user();
// };
// document.getElementById("sea").onclick = function () {
//   let v = document.getElementById("search").value;
//   let x = data.filter((eachItem) => {
//     return eachItem.title.includes(v);
//   });
//   console.log(x);
//   data = x;
//   user();
// };
