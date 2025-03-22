import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Page1 from "./components/Page1";


// this is header compoent , having logo and nav items





//All Restro Dataa




// restaurant-card




// page-1 component, having all the details



const AppLayout = () => {
    return (
        <>

            <div className="app">
                <Header />
                <Page1 />

            </div>


        </>
    )

}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
