import React, { useState } from "react";

const Index = ()=>{
    const data={
        msg:"",
        email:"",
        pass:"",
    }
    const [user,setUser] = useState(data)
    const handleSubmit = (e)=>{
        e.preventDefault();
        let obj={
            msg:user.msg,
            email:user.email,
            pass:user.pass,
        }
        console.log(obj)
    }
    console.log(data)
     return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                id="text" 
                name="text" 
                placeholder="enter your name"
                value={user.msg}
                onChange={(e)=>setUser({
                    ...user,
                    msg:e.target.value,
                })}
                /><br/>
                <input 
                type="email" 
                id="email" 
                name="email" 
                value={user.email}
                placeholder="enter your email"
                onChange={(e)=>setUser({
                    ...user,
                    email:e.target.value,
                })}
                /><br/>
                <input 
                type="password" 
                id="pass" 
                name="pass" 
                placeholder="enter your password"
                value={user.pass}
                onChange={(e)=>setUser({
                    ...user,
                    pass:e.target.value,
                })}
                /><br/>
                <button>submit</button>
            </form>
        </>
     )
}
export default Index;