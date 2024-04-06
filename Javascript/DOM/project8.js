let input= document.createElement("input")
input.setAttribute("placeholder","enter some text")
document.getElementById("container").appendChild(input)
let btn= document.createElement("button")
btn.innerHTML="ADD"
document.getElementById("container").appendChild(btn)
let hr= document.createElement("hr")
document.getElementById("container").appendChild(hr)
btn.onclick=function(){
    let h1=document.createElement("span")
    document.getElementById("container").appendChild(h1)
    let x=input.value;
    h1.innerHTML=x
    let btn=document.createElement("button");
    let y=new Date().getTime().toString()
    console.log(y)
    btn.innerHTML="delete"
    document.getElementById("container").appendChild(btn)
    let br=document.createElement("br")
    document.getElementById("container").appendChild(br)
}