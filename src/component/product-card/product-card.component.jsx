// import "./product-card.styles.scss";
import { useContext,useState } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { AddCardTwoTone } from "@mui/icons-material";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [addcart,setAddCart] = useState([]) 
   const {housImg, houseName, price, detail,location ,rooms,squirFeet} = product;
  const addProductToCart = () => {
    console.log("you click cart", product)
    addItemToCart(product)
    alert("Item add into cart")

  };

  return (
    <>
    

      <div className=" bg-slate-100 flex justify-center items-center w-full border mt-12 rounded-md">

      <div className=" w-full border">
        
          <ul className="  w-full">
            <li className=" h-[471px]  ">
              <img
                src={housImg}
                alt=""
                srcset=""
                class="block object-cover object-center w-full h-[250px] rounded-lg"
              />

              <h4 class="mt-2 ml-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                {houseName}
              </h4>
              <p class="text-gray-700 flex justify-between"> <p className="ml-2 text-gray-700 text-lg">Price</p>  <span className="mr-5">{price}$</span> </p>
              {/* <p className="text-blue-500">{item.size}</p>
                     <p className="text-blue-500">{item.detail}</p> */}
                     <p class="text-gray-700 flex justify-between"> <p className="ml-2 text-gray-700 text-lg">Rooms</p>  <span className="mr-5">{rooms}</span> </p>
                      <h4 class="mt-2 ml-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                {detail}
              </h4>

              <button
                onClick={addProductToCart}
                class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-gray-600 capitalize transition-colors duration-200 transform bg-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-100 focus:text-white focus:bg-green-700"
              >
                <span class="mx-1">add to cart</span>
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
