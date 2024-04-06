import React from "react"
const Button = ({children,clickhandler})=>{
    console.log(`${children} rendered`)
    return <button onClick={clickhandler}>{children}</button>
}
export default React.memo(Button);