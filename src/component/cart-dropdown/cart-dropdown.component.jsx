import React, { useState } from "react";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () =>{
  const Navigate = useNavigate()
    const {cartItems,setIsCartOpen}= useContext(CartContext)
    

    const goToCheackOut = ()=>{
      setIsCartOpen(false)
      Navigate("/checkout")
    }
 return(
  <div className="cart-dropdown-container">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem cartItem={item} />
      ))}
    </div>

    <Button onClick= {goToCheackOut}>CHECK OUT</Button>
  </div>
);
      }
    

export default CartDropdown;
