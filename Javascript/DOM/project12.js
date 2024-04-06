let obj = [
  {
    id: "1",
    firstName: "Naveen",
    lastName: "chennamsetty",
    email: "naveen@gmail.com",
    phone: 9390127751,
    sal: 8900,
    commisson: 100,
    address: "ABCD",
  },
  {
    id: "2",
    firstName: "Nandu",
    lastName: "chennamsetty",
    email: "Nandu@gmail.com",
    phone: 9390127673,
    sal: 6900,
    commisson: 200,
    address: "EFGH",
  },
  {
    id: "3",
    firstName: "Nari",
    lastName: "chennamsetty",
    email: "Nari@gmail.com",
    phone: 9390127789,
    sal: 7800,
    commisson: 300,
    address: "IGKL",
  },
  {
    id: "4",
    firstName: "Madhu",
    lastName: "Babu",
    email: "madhu@gmail.com",
    phone: 9390127567,
    sal: 7890,
    commisson: 400,
    address: "MNOP",
  },
  {
    id: "5",
    firstName: "Ramu",
    lastName: "Royal",
    email: "Ramu@gmail.com",
    phone: 9390127234,
    sal: 5900,
    commisson: 500,
    address: "QRST",
  },
  {
    id: "6",
    firstName: "Eswar",
    lastName: "King",
    email: "eswar@gmail.com",
    phone: 9390123626,
    sal: 2000,
    commisson: 500,
    address: "GVUGU",
  },
  {
    id: "7",
    firstName: "Siva",
    lastName: "RAM",
    email: "@gmail.com",
    phone: 9390127234,
    sal: 5900,
    commisson: 500,
    address: "QRST",
  },
];

DisplayData();
function highlow() {
  let x = obj.sort((a, b) => {
    return b.sal - a.sal;
  });
  obj = x;
  DisplayData();
  console.log("Hello world");
}
function lowhigh() {
  let x = obj.sort((a, b) => {
    return a.sal - b.sal;
  });
  obj = x;
  DisplayData();
}
function AZ() {
  let x = obj.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });
  obj = x;
  DisplayData();
}
function ZA() {
  let x = obj.sort((a, b) => {
    return b.firstName.localeCompare(a.firstName);
  });
  obj = x;
  DisplayData();
}
function DisplayData() {
  let x = obj.map((eachUser) => {
    const { id, firstName, lastName, email, phone, sal, commisson, address } =
      eachUser;
    return `<div class="header key=${id}">
            <h4>${firstName}</h4>
            <h4>${lastName}</h4>
            <h4>${email}</h4>
            <h4>${phone}</h4>
            <h4>${sal}</h4>
            <h4>${commisson}</h4>
            <h4>${address}</h4>
        </div>`;
  });
  document.getElementById("card").innerHTML = x;
}
