import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import ItemsPageShimmer from "./ItemsPageShimmer";
import { useParams } from "react-router-dom";


const ItemsPage = () => {




  const {itemID } = useParams();  
  const [itemInfo, setIteminfo] = useState([]);
  const [ratingColor, setRatingColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);



useEffect(() => {
  fetchItemInfo();
}, [itemID]);

const fetchItemInfo = async () => {
  setLoading(true);
  let promi = await fetch(`https://dummyjson.com/products`);
  let data = await promi.json();
  setIteminfo(data.products);
  


  
  const itemSelected = data.products.find((item) => item.id === parseInt(itemID));
  setSelectedItem(itemSelected);

  setLoading(false);
};
  const {
    title,
    rating,
    images,
    price,
    brand,
    description,
    returnPolicy,
    availabilityStatus,
  } = selectedItem || {};

useEffect(() => {
  if (!selectedItem) return; 

  if (selectedItem.rating >= 4) {
    setRatingColor("rgb(112, 209, 112)");
  } else if (selectedItem.rating < 4 && selectedItem.rating > 3.5) {
    setRatingColor("rgb(248, 208, 66)");
  } else if (selectedItem.rating < 3.5 && selectedItem.rating > 1) {
    setRatingColor("red");
  }
}, [selectedItem]);







  return (
    <>
      {loading ? (
        <ItemsPageShimmer />
      ) : (
        <div className="itemsPage">
          <div className="itemPage-image-container">
            <img
              className="itemPage-image"
              alt="Product"
              src={images?.[0]}
              style={{ width: "500px", height: "500px" }}
            />
          </div>

          <div className="itemsPage-details">
            <div className="itemPage-name">{title}</div>
            <div className="itemPage-rating" style={{ backgroundColor: ratingColor }}>
              {rating ? rating.toFixed(1) : ""}
              <FaStar style={{ color: "yellow", scale: 0.8, marginLeft: "12px" }} />
            </div>

            <div className="itemPage-price">{price} $</div>
            <div className="itemPage-brand">{brand}</div>
            <div className="itemPage-description">{description}</div>
            <div className="itemPage-returnPolicy">{returnPolicy}</div>
            <div className="itemPage-availStatus">{availabilityStatus}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemsPage;
