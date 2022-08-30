import React from 'react'
import CategoryItem from '../catagery-item/category-item.component'
import './directory.styles.scss';
import { useContext } from 'react';
import {Link ,useNavigate,} from 'react-router-dom'
import { useState } from 'react';


const getdata =async ()=>{
  
  const data = await JSON.parse(localStorage.getItem("cartmudasar"));
  console.log("Storage", data);
}
const Directory = ({categories}) => {
  const Navigate = useNavigate()
  const [storageData, setStorageData] =useState([]);
  // console.log("categories kkkkkk",categories)
  const shopKnow = (item) => {
    // console.log("item", item);
  
    const { _id, detail,housImg, houseName,location,price,rooms ,squirFeet } = item;
    // console.log("item destrict",_id, detail,housImg, houseName,location,price,rooms ,squirFeet);
    const allData = {
      id: _id,
      detail: detail,
    housImg: housImg,
    houseName: houseName,
    location: location,
    price: price,
    rooms: rooms,
    squirFeet: squirFeet,
      quantity: 1,
    };
  
    localStorage.setItem("cartmudasar",JSON.stringify(allData) );
    Navigate('/cart')
   
  };

  

  return (
   <>

   <div className="h-screen bg-slate-50 justify-center items-center w-full  ">

      

     <div className=" grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-2  md:p-5 mb-12 ">
                
     
                {categories.map((item) => {
                  // console.log("items data",item)
                  return (
                    <div className="w-full p-1  md:p-2 my-12  " key={item['id']}>
                      <ul className="">
                        <li className='h-[400px] md:h-[350px] '>
                          <img
                            src={item["housImg"]}
                            alt=""
                            srcset=""
                            class="block object-cover object-center w-full h-[300px] md:h-[250px]  rounded-lg"
                          />

                          <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                            {item["houseName"]}
                          </h4>
                          <p class="flex justify-between"> <p>Price</p>  <p>{item["price"]}</p></p>
                          <p class="flex justify-between"> <p>Location</p>  <p>{item["location"]}</p></p>
                          {/* <p className="text-blue-500">{item.size}</p>
                          <p className="text-blue-500">{item.detail}</p> */}
                          {/* <Link to='/shop'> */}
                          <button onClick={()=>shopKnow(item)} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-gray-600 capitalize transition-colors duration-200 transform bg-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-100 focus:outline-none focus:bg-gray-700">
                            <span className="mx-1" >View detail</span>
                          </button>
                          {/* </Link> */}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div> 

   
   </div>
   </>
  )
}

export default Directory