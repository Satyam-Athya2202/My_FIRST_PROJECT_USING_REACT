import React from 'react'

const ItemsPageShimmer = () => {

    // isme sabko inline style dedo free kro jaldi
  return (
    <>
         <div className="itemsPageShimmer">
   
           <div className="itemPage-image-containerShimmer itemsShimmer">
             <img
              className="itemPage-imageShimmer itemsShimmer"
             />
           </div>
   
   
           <div className="itemsPage-detailsShimmer ">
   
               <div className="itemPage-nameShimmer itemsShimmer"></div>

               <div className="itemPage-ratingShimmer itemsShimmer">
                 </div>
           
   
        
               <div className="itemPage-priceShimmer itemsShimmer"> </div>
               <div className="itemPage-brandShimmer itemsShimmer"></div>
        
   
               <div className="itemPage-descriptionShimmer itemsShimmer"></div>
   
          
               <div className="itemPage-returnPolicyShimmer itemsShimmer"></div>
               <div className="itemPage-availStatusShimmer itemsShimmer"></div>
            
   
           </div>
   
   
         </div>
       </>
  )
}

export default ItemsPageShimmer
