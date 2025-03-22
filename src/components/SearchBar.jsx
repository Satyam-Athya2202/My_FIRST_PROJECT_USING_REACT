
import React, { useEffect, useState } from "react";
import { searchFnc } from "../utils/searchFnc";

const SearchBar = ({ allItems, setAllItems, originalList }) => {

    console.log("searchRendered");
    
    const [searchValue, setSearchValue] = useState("");

    
    useEffect(() => {
        if (searchValue.trim() === "") {

            setAllItems(originalList);
        } else {

            searchFnc({ searchValue, setAllItems, originalList });
        }
    }, [searchValue]);


    return (
        <div className="searchContainer">
            <input
                className="searchInput"
                type="text"
                placeholder="Groceries,Beauty,Furniture..."
                value={searchValue} // Controlled input
                onChange={(e) => setSearchValue(e.target.value)} 
            />
            <button className="clearBtn" type="button" onClick={() => setSearchValue("")}>
                Clear
            </button>
        </div>
    );
};

export default SearchBar;