import React, { useEffect, useState } from "react";
import { Logo_url } from "../utils/content";

const Header = () => {

    const[login,setLogin]=useState("LOGIN")

    useEffect(()=>{
        let header= document.querySelector(".header")
        if (login === "LOGOUT") {
            header.style.backgroundColor = "orange";
          } else {
            header.style.backgroundColor = "red";
          }
    },[login])

    return (
        <>
            <div className="header" style={{}}>

                <div className="logo">
                    <img src= {Logo_url}alt="" />

                </div>

                <div className="navItems">
                    <ul>
                        <li className="Home">HOME</li>
                        <li className="aboutUs">ABOUT US</li>

                       <button 
                       className="loginBtn" 
                       style={{fontSize:"16px"}} 
                       onClick={()=>{
                        setLogin(login==="LOGIN"?"LOGOUT":"LOGIN")
                       }}
                       >{login}
                       </button>

                        {/* <li className="signUp">SIGNUP</li> */}
                    </ul>

                </div>

            </div>
        </>
    )
}


export default Header