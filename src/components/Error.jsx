import React from "react"
import { useRouteError } from "react-router-dom"
const Error=()=>{

    const err= useRouteError()
    console.log(err);
    
    return(
        <>
         <div className="errorPage">
            <h1><span>Opps!!!</span>something went wrong.</h1>
            <p>{err.status} {err.error.message  }</p>
            
         </div>
        </>
    )
}

export default Error