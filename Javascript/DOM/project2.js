let count=0
document.getElementById("dec-first").onclick=function(){
    count--;
    document.getElementById("val-first").innerHTML = count;   
}
document.getElementById("inc-first").onclick=function(){
    count++;
    document.getElementById("val-first").innerHTML = count;   
}
let temp=0
document.getElementById("dec-second").onclick=function(){
    temp--;
    document.getElementById("val-second").innerHTML = temp;   
}
document.getElementById("inc-second").onclick=function(){
    temp++;
    document.getElementById("val-second").innerHTML = temp;   
}
let inital= 0
document.getElementById("dec-third").onclick=function(){
    inital--;
    document.getElementById("val-third").innerHTML = inital;   
}
document.getElementById("inc-third").onclick=function(){
    inital++;
    document.getElementById("val-third").innerHTML = inital;   
}

document.getElementById("submitbtn").onclick=function(){
    let result = count + temp + inital;
    document.getElementById("res").innerText="total count = "+ result; 
}