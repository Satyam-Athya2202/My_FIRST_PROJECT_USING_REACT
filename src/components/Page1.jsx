import React, { useEffect } from "react";
import ITEMSCard from "./ITEMScard";
import SearchBar from "./SearchBar";
import Filter_btn from "./Filter_btn";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useOutletContext } from "react-router-dom";


// import Loader from "./Loader";

// https://dummyjson.com/products
// }}

const Page1 = () => {
  // console.log("page1rendered");
  let [listOfItems, setListOfItems] = useState([]);
  let [originalList, setOriginalList] = useState([]);

  const { cart, setCart } = useOutletContext()
  //   console.log(listOfItems);

  //for Shimmer Effect

  let [loading, setloading] = useState(true);

  // fetching data from API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setloading(true);
    const respo = await fetch(`https://dummyjson.com/products `);

    // /data.cards[].card.card.gridElements.infoWithStyle.restaurants
    const data = await respo.json();

    setListOfItems(data?.products);
    setOriginalList(data?.products);
    setloading(false);
  };


  
  

  //page1 JSX
  return (
    <>
      <SearchBar
        allItems={listOfItems}
        setAllItems={setListOfItems}
        originalList={originalList}
        setOriginalList={setOriginalList}
      />

      {/* <Filter_btn listOfItems={listOfItems} setListOfItems={setListOfItems} /> */}

      <div className="page1">
        {loading ? (
          <Shimmer />
        ) : (
          <div className="ITEMS-container">

            {listOfItems.map((ITEMS,index) => {
              return (
              <ITEMSCard 
              key={ITEMS.id} 
              ResData={ITEMS} 
              index={index}
              cart={cart}
              setCart={setCart}
              />
              )

            })}
            
          </div>
        )}
      </div>
    </>
  );
};

export default Page1;
