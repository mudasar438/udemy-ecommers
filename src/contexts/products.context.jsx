import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json'
import {getUsers} from  '../component/Dashbord/api'
// const getalluser = async () => {
   
//     try {
//       console.log("function runing");

//       let response = await getUsers();
//       console.log(response);
//     //   setAllData(response.data)
//     //   setUserData(response.data);
//     setProduct(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   };

export const ProductContext = createContext({
Product:[],
setProduct:()=>{},
})

export const ProductProvider = ({children}) =>{
    // getalluser()
    const [Product,setProduct]= useState([])
    const value= {Product,setProduct}
return(
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
)
}