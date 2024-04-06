import React, { useEffect, useReducer, useState } from "react";
const reducer = (state,action)=>{
    if(action.type === "UPDATE_USERS_DATA"){
        return {
            ...state,
            userData:action.payload,
        }
    }
    if(action.type === "LOADING"){
         return {
            ...state,
            islaoding:action.payload
         }
    }
    if(action.type === "DELETE"){
        let newFilter = state.userData.filter((eachItem)=>{
            return eachItem.id !=action.payload
        })
        return {
            ...state,
            userData:newFilter,
        }
    }
    if(action.type==="EDIT"){
      return {
        ...state,
        isEditing:action.payload
      }   
    }
    if(action.type==="EDIT_USERS"){
        let newusers= state.userData.map((eachUser)=>{
            if(eachUser.id==action.payload.id){
                return {
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email
                }
            }else{
                return eachUser
            }
        })
        return {
            ...state,
            userData:newusers
        }
    }
    return state;
}
const Index=()=>{
    const intialState ={
        userData:[],
        islaoding:false,
        isError:{status:false,msg:""},
        isEditing:{status:false,id:"",name:"",email:""}
    }
    const [state,dispatch] = useReducer(reducer,intialState)
    const fetchdata=async (url)=>{
        dispatch({type:"LOADING",payload:true})
        dispatch({type:"ERROR",payload:{status:false,msg:""}})
       try {
            const response = await fetch(url);
            const data=await response.json()
            dispatch({type:"UPDATE_USERS_DATA",payload:data})
            dispatch({type:"LOADING",payload:false})
            dispatch({type:"ERROR",payload:{status:false,msg:""}})
       } catch (error) {
             dispatch({type:"LOADING",payload:false})
             dispatch({type:"ERROR",payload:{status:true,msg:"something went wrong" && error}})
       }
    }
    useEffect(()=>{
        fetchdata("https://jsonplaceholder.typicode.com/users")
    },[])
    const handleDelete=(id)=>{
        dispatch({type:"DELETE",payload:id})
    }
    const handleEdit=(id,name,email)=>{
        dispatch({type:"EDIT",payload:{status:true,id:id,name:name,email:email}})
    }
    if(state.islaoding){
        return <div>
            <h3>Loading.....</h3>
        </div>
    }
    const updateData=(id,title,email)=>{
        dispatch({type:'EDIT_USERS',payload:{id,email,title}})
        dispatch({type:"EDIT",payload:{status:false,id:"",name:"",email:""}})
    }
    return (
        <>
            <h1>users Information</h1>
            {
                state.isEditing.status && <EditformConatiner id={state.isEditing.id} comingtitle={state.isEditing.name} comingemail={state.isEditing.email} updateData={updateData}/>
            }
            {
                state.userData.map((eachItem)=>{
                    const {id,name,email} = eachItem
                    return (
                        <div key={id} style={{background:"lightblue"}}>
                            <h2>{name}</h2>
                            <h3>{email}</h3>
                            <button onClick={()=>handleDelete(id)}>delete</button>
                            <button onClick={()=>handleEdit(id,name,email)}>Edit</button>
                        </div>
                    )
                })
            }
        </>
    )

}
const EditformConatiner= ({id,comingtitle,comingemail , updateData})=>{
    const [title,setTitle] = useState(comingtitle || '');
    const [email,setEmail]=useState(comingemail ||'')
    return (
        <>
            <form>
                <input type="text" name="title" id="title"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button onClick={()=>updateData(id,title,email)}>Update Data</button>
            </form>
        </>
    )
}
export default Index;
