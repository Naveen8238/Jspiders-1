let globalArray = [];
let submitId = document.querySelector("#submit");
let id = document.getElementById("text");
let clear = document.getElementById("clear");
let editdata = "";
let btn = document.getElementById("add");
submit();
function getItem() {
  globalArray = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
}
function setItem() {
  localStorage.setItem("todo", JSON.stringify(globalArray));
}
function add() {
  if (!id.value) {
    alert("add text");
  } else {
    if (!editdata) {
      let obj = {
        text: id.value,
        id: new Date().getTime().toString(),
      };
      globalArray.push(obj);
    } else {
      globalArray.map((data) => {
        if (data.id == editdata.id) {
          data.text = id.value;
        }
      });
      editdata = "";
      btn.innerHTML = "ADD";
    }
    id.value = "";
    setItem();
  }
  submit();
}
function removeItem(id) {
  let newfilter = globalArray.filter((eachItem) => {
    return eachItem.id != id;
  });
  globalArray = newfilter;
  setItem();
  submit();
}
function editItem(id) {
  let x = globalArray.find((data) => {
    return data.id == id;
  });
  text.value = x.text;
  btn.innerHTML = "edit";
  editdata = x;
}
function submit() {
  getItem();
  let print = "";
  if (globalArray.length == 0) {
    print = "no data";
  } else {
    globalArray.map((eachItem) => {
      return (print += `<div class="col">
           <div class="card bg-secondary">
             <h1 class="text">${eachItem.text}</h1>
             <div class="main">
               <button class="btn btn-primary" onclick="removeItem(${eachItem.id})">DELETE</button>
               <button class="btn btn-primary" onclick="editItem(${eachItem.id})">EDIT</button>
            </div>
           </div>`);
    });
  }
  submitId.innerHTML = print;
}
clear.addEventListener("click", () => {
  localStorage.removeItem("todo");
  submit();
});

// function removeItem(id) {

//   let indexValue = 0
//   let newData = globalArray.map((item,index) => {
//     if (item.id == id) {
//       indexValue = index
//       submitId.innerHTML = ""
//     }
//   })
//   globalArray.splice(indexValue,1)
//   submit()
// }
