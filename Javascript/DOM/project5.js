let select=document.createElement("select")
let opt=document.createElement("option")
opt.innerHTML="select options"
let opt1= document.createElement("option")
opt1.innerHTML="name"
let opt2= document.createElement("option")
opt2.innerHTML="email"
let opt3= document.createElement("option")
opt3.innerHTML="password"
let opt4= document.createElement("option")
opt4.innerHTML="address"
select.appendChild(opt)
select.appendChild(opt1)
select.appendChild(opt2)
select.appendChild(opt3)
select.appendChild(opt4)
document.getElementById("container").appendChild(select)
let input= document.createElement("input")
input.setAttribute("placeholder","Enter some text")
document.getElementById("container").appendChild(input)
let btn= document.createElement("button")
btn.innerHTML="submit"
document.getElementById("container").appendChild(btn)
let br=document.createElement("br")
document.getElementById("container").appendChild(br)
let hr=document.createElement("hr")
document.getElementById("container").appendChild(hr)
let h1=document.createElement("h1")
document.getElementById("container").appendChild(h1)
select.onclick=function(){
    let x=select.value;
    input.setAttribute("placeholder",x)
}
btn.onclick=function(){
    let x=select.value;
    h1.innerHTML=x
}




