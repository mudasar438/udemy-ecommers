import { useState, createContext, useEffect } from "react";



const addCartItem = (cartItems,productToAdd)=>{
  // console.log("cart Items in context",cartItems)
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id ===  productToAdd.id) 
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

//retun new array with modify cart and new cartItem

return [...cartItems,{...productToAdd,quantity:1}]

}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find cart and remove it 
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen : ()=>{},
    cartItems :[],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartItemCount: 0,
    clearItemFromCart:()=>{},
    cartTotal:0,

})


export const CartProvider = ({children})=>{

    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0 );
          setCartItemCount(count);

    },[cartItems])
    useEffect(()=>{
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
          );
          setCartTotal(newCartTotal)
    },[cartItems])




    const addItemToCart =(productToAdd)=>{
      console.log(cartItems)
        setCartItems(addCartItem(cartItems,productToAdd))

    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
      };

      const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartItemCount,   removeItemToCart,clearItemFromCart,cartTotal}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}