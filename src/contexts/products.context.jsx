import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json'

export const ProductContext = createContext({
Product:[],
})

export const ProductProvider = ({children}) =>{
    const [Product,setProduct]= useState(PRODUCTS)
    const value= {Product}
return(
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
)
}