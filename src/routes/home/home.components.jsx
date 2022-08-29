import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../component/directory/directory.component'
import  Navigation from '../navigation/navigation.component'
import { CartContext } from '../../contexts/cart.context';
import {GetallData} from '../../component/Dashbord/getallData'
import { getUsers } from "../../component/Dashbord/api";

const Home = () => {
  const {allData,setAllData}=useContext(CartContext) 
  useEffect(() => {

    getalluser();
  }, []);
  const getalluser = async () => {
    try {
      console.log("function runing");

      let response = await getUsers();
      console.log("from MongoDb",response);
      setAllData(response.data)
     
     
    } catch (error) {
      console.error(error);
    }
  };

  
    const categories = [
        
      {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      },
      {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      },
      {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      },
      {
        id: 4,
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      },
      {
        id: 5,
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      },
      ];
      // console.log("hompage data",allData)
  return (
    <><div className="flex flex-col ">

     <Navigation/>
    <div className=' mt-[100px] md:mt-[50px]' >


      <Directory  categories={allData}/>
      <div className="mt-[200px]">

      <GetallData/>
      </div>
      <Outlet/>
   
    </div>
    </div>

    </>
  )
}

export default Home