import React, { useState } from "react";
const Index = ()=>{
    const [showData,setshow] = useState(false)
    const handleShow = ()=>{
        setshow(!showData)
    }
    return (
        <>
            <button onClick={handleShow}>{showData ? "hidden" : " show"}</button>
            {
                showData && <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit officiis impedit debitis dignissimos cupiditate officia ducimus odit sint! Veritatis temporibus ipsa officia eaque, maxime sit dolorem asperiores quibusdam porro?</h1>
                </div>
            }
        </>
    )
}
export default Index;