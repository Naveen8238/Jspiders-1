document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=e.target.name
   name.addEventListener("change" ,()=>{
      console.log(e.target.value);
   })
    let pass=e.target.pass.value
    let cpass=e.target.cpass.value
    let phone=e.target.mob.value
    let pho="9"
    let radio =document.querySelector('input[name="gender"]:checked')
    console.log(name)
    let sum=""
    for(let i=0;i<name.length;i++){
        sum+=name.charAt(i).toUpperCase();
    }
    // let char=['!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '=', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '/', '?', '<', '>', '~']
    if(sum !== name){
        // console.log("enter name with captial letters")
        document.getElementById("name").style.border = "2px solid red"
    }
    if(pass !== cpass){
        // console.log("enter correct password")

    }
    if(radio.value !== "on"){
        console.log("please select gender")
    }
    if(phone.charAt(0) !== pho){
        console.log("please enter mobile number starts with 9")
    }
})