import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    // const {clearItemFromCart}=useContext(CartContext)
  const { houseName, housImg, price, quantity } = cartItem;
  // detail: "Qui ut officia liber"
  // housImg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA
  // houseName: "Patrick Jarvis"
  // location: "Quo ex non doloremqu"
  // price: "211"
  // quantity: 2
  // rooms: "Unde qui dolor amet"
  // squirFeet: "Sit perspiciatis cu"
  // __v: 0
  // _id: "630ca0b00d6b2f788647aa2e"
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='flex border border-black w-full justify-between text-center my-2 p-2 items-center  h-[80px]'>
      <div className='w-[14%]'>
        <img src={housImg} className='w-full md:w-[50%] ' alt={`${houseName}`} />
      </div>
      <span className='name  w-[20%] text-[11px]  md:text-lg '>  {houseName} </span>
      <span className='flex  w-[20%]  text-[11px]  md:text-lg justify-between'>
        <div className="w-[50%] mx-auto flex   justify-between ">

        <div className='arrow hover:bg-slate-300 hover:px-3 rounded-md' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value '>{quantity}</span>
        <div className='arrow hover:bg-slate-300 hover:px-3 rounded-md' onClick={addItemHandler}>
          &#10095;
        </div>
        </div>
      </span>
      <span className='price w-[20%]  flex items-start justify-center  text-[11px]  md:text-lg'> ${price} </span>
      <div className='remove-button w-[10%]  flex justify-end  text-[11px]  md:text-lg' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;