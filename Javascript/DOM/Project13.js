const startTime = Date.now();
document.getElementById("btn").onclick = function () {
  let x = document.getElementById("text").value;
  let y = x.length;
  let z = x.split(" ").length;
  const endTime = Date.now();
  let time = Math.floor((endTime - startTime) / 1000);
  let p = " ";
  function add() {
    return (p += `<h1> the total char : ${y}</h1>
        <h1>the total word : ${z} </h1>
        <h1> Time : ${time}s;</h1>`);
  }
  add();
  document.getElementById("child2").innerHTML = p;
};
