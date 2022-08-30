import { useContext,useEffect } from "react";
import ProductCard from "../../component/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";
import  Navigation from '../navigation/navigation.component'
import { CartContext } from "../../contexts/cart.context";
import {getUsers} from '../../component/Dashbord/api'
import logo from '../../assets/assets/images/logo.png'
const Shop = () => {

    const {Product,setProduct}=useContext(ProductContext);
    useEffect(() => {

      getalluser();
    }, []);
  
    const getalluser = async () => {
      try {
        console.log("function runing");
  
        let response = await getUsers();
        console.log(response);
        setProduct(response.data)
        // setAllData(response.data)
        // setUserData(response.data);
        console.log("Shop data", )
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <> <Navigation/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-[120px] md:mt-[50px]">
        {Product.map((product) => (
          <ProductCard product={product} />
          
        ))}
      </div>
      <footer className="p-8 bg-yellow-400 rounded-lg mt-[200px] h-[400px] shadow md:px-6  md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/home" className="flex items-center mb-12 sm:mb-0">
            <img src={logo} className="mr-3 h-[100px]" alt="Flowbite Logo" />
           
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <p className=" mt-12 text-gray-700 text-xl w-[80%] mx-auto text-center">Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.</p>
    <hr className=" mt-[100px] border-gray-200 sm:mx-auto dark:border-gray-700  " />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline"> REAL ESTATE</a>. All Rights Reserved.
    </span>
</footer>
    </>
  );
};

export default Shop;