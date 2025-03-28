import Header from "../components/Header"
const addToCartFnc=(e,setCart,cart,ResData)=>{

    e.preventDefault()
const{title,price,images}=ResData

const updatedCart=[...cart,ResData]
setCart(updatedCart)

console.log("item --",ResData);
console.log("updatedCart--",updatedCart);


    
}

export default addToCartFnc