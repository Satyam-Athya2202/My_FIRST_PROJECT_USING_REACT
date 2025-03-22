import React from "react";
import { useState } from "react";

//  listOfItems={listOfItems} setListOfItems={setListOfItems}

let Filter_btn = ({ listOfItems, setListOfItems }) => {

    return (
        <>
            <button className="filter-btn"
              
                onClick={() => {
                    let updatedList = listOfItems.filter((res) => {
                        // return (
                        //     (res.info.avgRating <= 4 || res.info.avgRatingString === "--")
                        // )
                        return(
                            res.category==="groceries"
                        )
                    })
                    console.log(updatedList);

                    setListOfItems(updatedList)

                 

                }}
            >Filter</button>

        </>
    )

}

export default Filter_btn 
