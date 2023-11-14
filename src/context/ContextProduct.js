import { createContext, useState } from "react";

export  const CartContext = createContext(null)

export default CartContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState({})
    return <CartContext.Provider>{props.children}</CartContext.Provider>
}