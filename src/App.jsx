import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Page1 from "./components/Page1";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ItemsPage from "./components/ItemsPage";

const AppLayout = () => {
    return (
        <>

            <div className="app">
                <Header />
                <Outlet/>

            </div>


        </>
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
            element:<Page1/>
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
