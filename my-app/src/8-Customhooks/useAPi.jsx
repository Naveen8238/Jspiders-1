import {useState,useEffect}  from 'react';
 function useApi (url){
    const [userData,setUsers]=useState([]);
    const [loading,setloading] = useState(false)
    const [error,seterror] = useState(false)
    const makeApiCall =async (url)=>{
        setloading(true)
        seterror(false)
        try {
            const response =await fetch(url);
            const data=await response.json();
            setUsers(data)
            setloading(false)
            seterror(false)
        } catch (error) {
            setloading(false)
            seterror(true)
        }
    };
    useEffect(()=>{
        makeApiCall(url)
    },[]);
    return [userData,loading,error]

 }
 export default useApi;