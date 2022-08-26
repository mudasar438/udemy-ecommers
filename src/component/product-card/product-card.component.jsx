// import "./product-card.styles.scss";
import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => {
    addItemToCart(product);
    alert("Product add in to Cart");
  };

  return (
    <>
      {/* <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </div> */}

      <div className=" bg-slate-100 flex justify-center items-center w-full border mt-12 rounded-md">

      <div className=" w-full border">
        
          <ul className="  w-full">
            <li className=" h-[371px]  ">
              <img
                src={imageUrl}
                alt=""
                srcset=""
                class="block object-cover object-center w-full h-[250px] rounded-lg"
              />

              <h4 class="mt-2 ml-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                {name}
              </h4>
              <p class="text-gray-700 flex justify-between"> <p className="ml-2">Price</p>  <span className="mr-5">{price}$</span> </p>
              {/* <p className="text-blue-500">{item.size}</p>
                     <p className="text-blue-500">{item.detail}</p> */}

              <button
                onClick={addProductToCart}
                class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-gray-600 capitalize transition-colors duration-200 transform bg-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-100 focus:outline-none focus:bg-gray-700"
              >
                <span class="mx-1">Add To Cart</span>
              </button>
            </li>
          </ul>
        </div>
        </div>
     

      {/* </div> */}
    </>
  );
};

export default ProductCard;
