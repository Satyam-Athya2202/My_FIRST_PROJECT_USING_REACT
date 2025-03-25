
import React from "react";
import { Link } from "react-router-dom";


let ITEMScard = ({ ResData}) => {



    let {
        id,
        rating,
        images,
        title,
        price,
        category
    } = ResData
    return (
        <>
            <Link to={`item/${id}`} className="ITEMSlinks">

            <div className="Item-card">
                {/* <img className="restImg" src={`${Restro_img}${cloudinaryImageId}`} /> */}
                <img className="restImg" src={images[0]} />

                <div className="card-info">

                    <h3 className="Item-Name">{title}</h3>
                    <div className="rating">{rating.toFixed(1)}</div>
                    <span className="price">{price} $/item</span>
                    <span className="category">{category}</span>
                    {/* <p className="ppCharge">{costForTwo}</p> */}

                </div>

            </div>

            </Link> 
        </>
    )
}

export default ITEMScard;