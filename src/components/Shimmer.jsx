import React from "react";


{/* <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div> */}

const Shimmer = () => {
    return (
        <>
            <div className="shimmer-container">
                
                {
                    Array.from({length:10}).map((elem,i)=>{
                        return(
                            <div className="shimmer-card" key={i}>
                                <div className="shimmerImg"></div>
                                <p className="shimmerProduct"></p>
                                <p className="shimmerRating"></p>
                                <p className="shimmerCategory"></p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Shimmer