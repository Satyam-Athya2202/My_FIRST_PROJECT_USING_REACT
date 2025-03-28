import React, { useEffect, useState } from "react";
import { Logo_url } from "../utils/content";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {

    // const[login,setLogin]=useState("LOGIN")

    // useEffect(()=>{
    //     let header= document.querySelector(".header")
    //     if (login === "LOGOUT") {
    //         header.style.backgroundColor = "orange";
    //       } else {
    //         header.style.backgroundColor = "red";
    //       }
    // },[login])

    return (
        <>
            <div className="header" style={{}}>

                <div className="logo">
                    <img src= {Logo_url}alt="" />

                </div>

                <div className="navItems">
                    <ul>
                      
                        
                        <Link to="/"><li className="Home">Home</li></Link>
                        <Link to="/about"><li className="About">About Us</li></Link>
                        <Link to="/contact"><li className="Contact">Contact</li></Link>
                        <Link to="/cart"> 
                           <FaShoppingCart className="cartBtn"/> 
                        </Link>
                         

                        {/* <li className="signUp">SIGNUP</li> */}
                    </ul>

                </div>

            </div>
        </>
    )
}


export default Header