import React from "react"
const Title = ()=>{
    console.log('title rendered')
    return <h1>useCallback</h1>
}
export default React.memo(Title);