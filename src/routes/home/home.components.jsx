import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate, useNavigate,Outlet } from "react-router-dom";
import Directory from "../../component/directory/directory.component";
import Navigation from "../navigation/navigation.component";
import { CartContext } from "../../contexts/cart.context";
import { GetallData } from "../../component/Dashbord/getallData";
import { getUsers } from "../../component/Dashbord/api";
import { ProductContext } from "../../contexts/products.context";
import bg from "../../assets/assets/images/bg.webp";
import logo from  '../../assets/assets/images/logo.png'

const Home = () => {
  const Navigate = useNavigate()
  const { allData, setAllData } = useContext(CartContext);
  const { setProduct } = useContext(ProductContext);
  useEffect(() => {
    getalluser();
  }, []);
  const getalluser = async () => {
    try {
      console.log("function runing");

      let response = await getUsers();
      console.log("from MongoDb", response);
      setProduct(response.data);
      setAllData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  // console.log("hompage data",allData)
  return (
    <>
      <div className="flex flex-col ">
        <Navigation />
        <div className="flex h-[600px] bg-slate-200 mt-12 justify-center text-center  items-center">
          <div className="introduction-div  justify-center w-[50%] mx-auto">
            <img src={bg} className="object-cover z-10 rounded-lg"   opacity= "0.9" />
          </div>
          <div className="w-[40%] items-center mx-auto">

            <p className="  text-yellow-600  font-serif   md:text-5xl sm:text-2xl lg:text-6xl">
            We Deal in all <br></br>  kinds of Homes in Average Price 
            </p>
            <p  className="  text-yellow-600 w-[70%] mx-auto mt-10 font-serif   md:text-xl sm:text-sm lg:text-xl">  All category of Homs are avalable Multips Rooms and at Desire Your Location In Your Ciry</p>

            <button onClick={()=>Navigate('/shop')} className="flex text-xl items-center justify-center w-full px-2 py-4 mt-12 font-medium tracking-wide text-yellow-600 capitalize transition-colors duration-200 transform bg-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-100 focus:outline-none ">
                            <span className="mx-1" >Lets Go Here</span>
                          </button>
          </div>

        </div>
        {/* <div className=" flex items-center w-[30%]  border border-yellow-600 rounded-md">
          <input type="search" placeholder='search Location'  className=" w-full h-[50px] p-1 rounded-md"/>

          {Product.map((item)=>{
        return(
            <div>{item.name}</div>
        )
    })


    }

          </div> */}
        <div className=" mt-[100px] md:mt-[50px]">
          <Directory categories={allData} />
          
          <Outlet />
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
      </div>
    </>
  );
};

export default Home;
