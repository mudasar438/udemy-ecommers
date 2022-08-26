import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopingBag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () =>{
     setIsCartOpen(!isCartOpen)
    
    };

  return (
    // onClick={toggleIsCartOpen}
    <div className='cart-icon-container hover:text-blue-700'onClick={toggleIsCartOpen}  >
      <ShoppingIcon className='shopping-icon hover:bg-yellow-100 ' />
      <span className='item-count'>{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;