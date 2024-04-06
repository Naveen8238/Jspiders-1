let h1=document.createElement("span")
h1.innerText="rows table"
document.getElementById("container").appendChild(h1)
let input1=document.createElement("input")
input1.setAttribute("placeholder","enter the rows")
document.getElementById("container").appendChild(input1)
let br=document.createElement("br")
document.getElementById("container").appendChild(br)
let h2=document.createElement("span")
h2.innerText="cols table"
document.getElementById("container").appendChild(h2)
let input2=document.createElement("input")
input2.setAttribute("placeholder","enter the rows")
document.getElementById("container").appendChild(input2)
let br1=document.createElement("br")
document.getElementById("container").appendChild(br1)
let btn=document.createElement("button")
btn.innerHTML="submit"
document.getElementById("container").appendChild(btn)
btn.onclick=function(){
    let x=Number(input1.value)
    let y=Number(input2.value)
    let table=document.createElement("table")
    table.setAttribute("border","1px")
    table.setAttribute("cellspacing","5px")
    table.setAttribute("cellpadding","5px")
    document.getElementById("container").appendChild(table)
    for(let i=0;i<x;i++){
        let tr=document.createElement("tr")
        for(let j=0;j<y;j++){
            let td=document.createElement("td")
            td.innerHTML="hello"
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}
