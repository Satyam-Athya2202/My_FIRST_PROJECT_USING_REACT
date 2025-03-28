import React, { useState, useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'


const CART =()=>{

const {cart}= useOutletContext();

const{price,images,title}={cart}

return(         
    <div className="cartPage">

            
                  <div className="cartProducts">
       
                  <h1 className='cartHeading'>Cart</h1>
      {cart.length === 0 ? (
          <p className='emptyCart'>Your cart is empty.</p>
      ) : (
         
       
               <div className="cartListPage">


               <ul className='cartListItems'>
          {cart.map((item, index) => (

            <li   className="cartList"  key={index}>
              <h2 className='cartListName'>{item.title}</h2>
              <p className='cartListPrice'>Price: ${item.price}</p>
              <img className='cartListImage' src={item.images[0]} alt="" />
            </li>
          ))}
        </ul>


          <div className="cartDetails">
                        
               <div className="cartDetailsContianer">
                  <div className="cartTotalItem">Total Items : {price}</div>
                  <div className="cartTotalItem">SubTotal : {title}</div>
          
                  <button className='payment'>Proceed to Buy</button>
                </div>
            </div>


               </div>

   
      )}
       
                  </div>



                
           
           </div>
    
)

}

export default CART


