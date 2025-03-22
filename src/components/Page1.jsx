import React, { useEffect } from "react"
import ITEMSCard from "./ITEMScard"

import SearchBar from "./SearchBar"

// import RestroList from "../utils/restrolist"
import Filter_btn from "./Filter_btn"

import { useState } from "react";

import Loader from "./Loader";
import Shimmer from "./Shimmer";



    // {
    // // https://www.swiggy.com/mapi/ITEMSs/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.8323022&lng=79.4386591&carousel=true&third_party_vendor=1

    // //https://www.swiggy.com/api/seo/getListing?lat=23.832271&lng=79.418035&apiV2=true

    // //https://www.swiggy.com/mapi/ITEMSs/list/v5?lat=22.7195687&lng=75.8577258&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1

    // // /https://www.swiggy.com/mapi/ITEMSs/list/v5?lat=22.7195687&lng=75.8577258&collection=83636&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1
    
    // damoh http://swiggy.com/mapi/homepage/getCards?lat=23.8323&lng=794387
    // }}

const Page1 = () => {

    console.log("page1rendered");
    let [listOfItems, setListOfItems] = useState([]);
    let [originalList, setOriginalList] = useState([]);
   
    
console.log(listOfItems);

    //for Loader
    let [loading,setloading]= useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    

    const fetchData = async () => {

        setloading(true)
        const respo = await fetch("https://dummyjson.com/products")
        const data = await respo.json()
        console.log(data);
        setListOfItems(data?.products);
        setOriginalList(data?.products);
        setloading(false)
    }

//page1 JSX
    return (
        <>
 
            <SearchBar 
             allItems={listOfItems}
             setAllItems={setListOfItems}
             originalList={originalList}
             setOriginalList={setOriginalList}
            
             
             />

                <Filter_btn listOfItems={listOfItems} setListOfItems={setListOfItems} />

            <div className="page1">

            


               
            {loading?(<Shimmer/>):
                       <div className="ITEMS-container">

                        {    listOfItems.map((ITEMS) => {

                            
                            return (
                                <ITEMSCard
                                    key={ITEMS.id}
                                    ResData={ITEMS} />
                            )
                        })
                       }


                    </div>

            }
               

              


            </div>
        </>
    )
}

export default Page1





// {
// import React, { useEffect, useState } from "react";
// import RestoCard from "./RestroCard";
// import SearchBar from "./SearchBar";
// import Filter_btn from "./Filter_btn";

// const Page1 = () => {
//     // State for storing ITEMS list
//     const [listOfItems, setListOfItems] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch(
//                 "https://www.swiggy.com/mapi/ITEMSs/list/v5?lat=22.7195687&lng=75.8577258&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
//             );
//             const data = await response.json();
    
//             // Extract and filter ITEMS data safely
//             const ITEMSData = data?.data?.cards
//                 ?.filter((card) => card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ITEMS")
//                 ?.map((card) => ({
//                     ...card?.card?.info // Optional chaining ensures safe data extraction
//                 })) || []; // Default to an empty array if data is missing
    
//             setListOfItems(ITEMSData);
//         } catch (error) {
//             console.error("Error fetching ITEMS data:", error);
//         }
//     };
    
//     return (
//         <>
//             <SearchBar />

//             <div className="page1">
//                 <Filter_btn listOfItems={listOfItems} setListOfItems={setListOfItems} />

//                 <div className="ITEMS-container">
//                     {/* Render ITEMS Cards */}
//                     {listOfItems.map((ITEMS) => (
//                         <RestoCard key={ITEMS.id} ResData={ITEMS} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Page1;
// }




 
 


