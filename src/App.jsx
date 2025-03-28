import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Page1 from "./components/Page1";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ItemsPage from "./components/ItemsPage";
import CART from "./components/CART";



const AppLayout = () => {
  const [cart,setCart]= useState([])
    return (
        
            <div className="app">

              <Header/>

     {/* Pass cart and setCart to child components via Outlet 
     context */}
        <Outlet context={{ cart, setCart }} />

            </div>


       
    )

   
}

const Approuter= createBrowserRouter(
    [
      {
        path:"/",
        element:<AppLayout/>,

        children:[
          {
            path:"/",
            element:<Page1 />
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/cart",
            element:<CART />
          },
          {
            path:"/item/:itemID",
            element:<ItemsPage/>
          },
        ],

        errorElement:<Error/>
      }
   
    
    ]

)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={Approuter} />)
