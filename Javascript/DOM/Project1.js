let x= document.getElementById("btn")
x.addEventListener("onclick",(e)=>{
    e.preventDefault();
    console.log(e)
    const data ={
        email:document.getElementById("email").innerText,
        pass:document.getElementById("pass").innerText,
    }
    console.log(data)
})