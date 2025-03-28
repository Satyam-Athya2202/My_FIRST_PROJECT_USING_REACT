
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addToCartFnc from "../utils/addToCartFnc"


let ITEMScard = ({ ResData ,cart,setCart }) => {


    let {
        id,
        rating,
        images,
        title,
        price,
        category,

    } = ResData



    // this is for changing bg color of rating at the home page 
    let [bgColor, setbgRating] = useState('')
    useEffect(() => {

        if (rating >= 4) {
            setbgRating("rgb(31, 159, 33)");
        } else if (rating < 4 && rating >= 3.5) {
            setbgRating("rgb(248, 208, 66)");
        } else if (rating < 3.5 && rating > 1) {
            setbgRating("rgb(248, 66, 66)");
        }
    }, [rating])



    
   

   
    return (
        <>
            <Link to={`item/${id}`} className="ITEMSlinks">

                <div className="Item-card">
                    {/* <img className="restImg" src={`${Restro_img}${cloudinaryImageId}`} /> */}
                    <img className="restImg" src={images[0]} />

                    <div className="card-info">

                        <h3 className="Item-Name">{title}</h3>

                        <div className="rating"
                            style={{ backgroundColor: bgColor }}
                        >{rating.toFixed(1)} </div>

                        <span className="price">{price} $/item</span>
                        <span className="category">{category.toUpperCase()}</span>

                        <button className="addCart"
                              onClick={(e)=>{
                                addToCartFnc(e,setCart,cart,ResData)
                            }
                            }
                           
                        > add</button>
                        {/* <p className="ppCharge">{costForTwo}</p> */}

                    </div>

                </div>

            </Link>



        </>
    )
}

export default ITEMScard;