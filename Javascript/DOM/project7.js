let select = document.createElement("select")
console.log(select)
let opt=document.createElement("option")
opt.innerHTML="select option"
let opt1=document.createElement("option")
opt1.innerText="name"
let opt2=document.createElement("option")
opt2.innerText="email"
let opt3=document.createElement("option")
opt3.innerText="phone number"
let opt4=document.createElement("option")
opt4.innerText="file"
let opt5=document.createElement("option")
opt5.innerText="text"
let opt6=document.createElement("option")
opt6.innerText="button"
select.appendChild(opt)
select.appendChild(opt1)
select.appendChild(opt2)
select.appendChild(opt3)
select.appendChild(opt4)
select.appendChild(opt5)
select.appendChild(opt6)
document.getElementById("container").appendChild(select)
let input= document.createElement("input")
input.setAttribute("placeholder","Enter some text")
document.getElementById("container").appendChild(input)
let btn= document.createElement("button")
btn.innerHTML="submit"
document.getElementById("container").appendChild(btn)
let delet= document.createElement("button")
delet.innerHTML="delete"
document.getElementById("container").appendChild(delet)
let br=document.createElement("br")
document.getElementById("container").appendChild(br)
let hr=document.createElement("hr")
document.getElementById("container").appendChild(hr)
select.onclick=function(){
    let x=select.value;
    input.setAttribute("placeholder",x)
}
btn.onclick=function(){
    let h1=document.createElement("h1")
    document.getElementById("container").appendChild(h1)
    let x=select.value;
    h1.innerHTML=x
}
delet.onclick=function(){
    location.reload()
}