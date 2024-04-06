document.getElementById("add").onclick=function(){
    document.getElementById("symbol").innerText = "+" 
}
document.getElementById("sub").onclick=function(){
    document.getElementById("symbol").innerText = "-" ;
}
document.getElementById("mul").onclick=function(){
    document.getElementById("symbol").innerText = "*" ;
}
document.getElementById("div").onclick=function(){
    document.getElementById("symbol").innerText = "/" ;
}
document.getElementById("exp").onclick=function(){
    document.getElementById("symbol").innerText = "**" ;
}
document.getElementById("res").onclick=function(){
    let x= Number(document.getElementById("input-1").value);
    let y=Number(document.getElementById("input-2").value);
    let operator=document.getElementById("symbol").innerText;
    let result = (operator == "+") ? x+y : (operator == "-") ? x-y :(operator == "*") ? x *y :(operator == "/") ? Math.floor(x/y) : (operator == "**") ? x ** y  : "It is not number "
    document.getElementById("result").innerText= "results =" + result;
}