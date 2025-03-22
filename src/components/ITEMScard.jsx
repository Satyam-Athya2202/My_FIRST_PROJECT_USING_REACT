
import React from "react";
// import { Restro_img } from "../utils/content";

let ITEMScard = ({ ResData }) => {


    let {
        // cloudinaryImageId,
        // name,
        // description,
        // avgRatingString,
        // id,
        // avgRating,
        // costForTwo,
        rating,
        images,
        title,
        category
    } = ResData
    return (
        <>
            <div className="Item-card">
                {/* <img className="restImg" src={`${Restro_img}${cloudinaryImageId}`} /> */}
                <img className="restImg" src={images[0]} />

                <div className="card-info">

                    <h3 className="Item-Name">{title}</h3>
                    <div className="rating">{rating.toFixed(1)}</div>
                    <span className="category">{category}</span>
                    {/* <p className="ppCharge">{costForTwo}</p> */}

                </div>

            </div>
        </>
    )
}

export default ITEMScard;