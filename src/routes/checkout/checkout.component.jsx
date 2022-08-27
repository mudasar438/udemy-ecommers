
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss'
import CheckoutItem from '../../component/checkout-item/checkout-item.component';

const Checkout = () => {
    const {cartItems,cartTotal}=useContext(CartContext)
  return (
    <>
     <div className='flex flex-col w-full md:w-[55%] mx-auto items-center'>
      <div className='flex justify-between border-b text-[10px] md:text-xl border-black w-full py-3'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block mr-3'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))} 
     <div className='text-xl md:text-3xl font-bold text-right border border-black w-full p-5'>TOTAL: ${cartTotal}</div> 
    </div>
    </>
  )
}

export default Checkout;