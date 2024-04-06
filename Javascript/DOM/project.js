let count=0;
document.getElementById("dec").onclick=function(){
    count--;
    document.getElementById("val").innerText = count
}
document.getElementById("inc").onclick=function(){
    count++;
    document.getElementById("val").innerText = count
}
document.getElementById("val").onclick=function(){
    let x= Number(document.getElementById("price").innerText);
    let res= x * count;
    document.getElementById("result").innerText=res;
}
let count$1=0;
document.getElementById("dec-1").onclick=function(){
    count$1--;
    document.getElementById("val-1").innerText = count$1
}
document.getElementById("inc-1").onclick=function(){
    count$1++;
    document.getElementById("val-1").innerText = count$1
}
document.getElementById("val-1").onclick=function(){
    let x= Number(document.getElementById("price-1").innerText);
    let res= x * count$1;
    document.getElementById("result-1").innerText=res;
}
let count$2=0;
document.getElementById("dec-2").onclick=function(){
    count$2--;
    document.getElementById("val-2").innerText = count$2
}
document.getElementById("inc-2").onclick=function(){
    count$2++;
    document.getElementById("val-2").innerText = count$2
}
document.getElementById("val-2").onclick=function(){
    let x= Number(document.getElementById("price-2").innerText);
    let res= x * count$2;
    document.getElementById("result-2").innerText=res;
}
let count$3=0;
document.getElementById("dec-3").onclick=function(){
    count$3--;
    document.getElementById("val-3").innerText = count$3
}
document.getElementById("inc-3").onclick=function(){
    count$3++;
    document.getElementById("val-3").innerText = count$3
}
document.getElementById("val-3").onclick=function(){
    let x= Number(document.getElementById("price-3").innerText);
    let res= x * count$3;
    document.getElementById("result-3").innerText=res;
}
let count$4=0;
document.getElementById("dec-4").onclick=function(){
    count$4--;
    document.getElementById("val-4").innerText = count$4
}
document.getElementById("inc-4").onclick=function(){
    count$4++;
    document.getElementById("val-4").innerText = count$4
}
document.getElementById("val-4").onclick=function(){
    let x= Number(document.getElementById("price-4").innerText);
    let res= x * count$4;
    document.getElementById("result-4").innerText=res;
}