document.getElementById("add").onclick=function(){
    let message=document.getElementById("message").value;
    let text= document.createElement("h1");
    text.innerHTML=message;
    document.body.appendChild(text);
}
