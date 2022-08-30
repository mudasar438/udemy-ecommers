import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { connectStorageEmulator } from "firebase/storage";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Navigate = useNavigate()
  const [locals, setLocals] = useState([]);
  // const { _id, detail,housImg, houseName,location,price,rooms ,squirFeet} = locals
  useEffect(() => {
    showdata();
  }, []);

  const showdata = () => {
    const localData = JSON.parse(localStorage.getItem("cartmudasar"));
    // console.log("data getiing from local",localData)
    setLocals(localData);
  };
  
  // console.log("local data in State ---", locals.houseName);
  
  return (
    <>
      <div className=" w-full border border-yellow-400 mt-[100px] ">
        <div className="w-[100%] h-[600px] bg-slate-200   mx-auto  ">
          <div className="flex w-[80%] mx-auto py-10 items-center ">
            <div className="flex justify-between  w-full p-5" >
            <div className="flex   items-center w-[40%]  ">
              <img
                src={locals.housImg}
                className=" rounded-md  p-5 w-[100%] "
                alt=""
                />
            </div>
                 {/* console.log("distric names",_id, detail,housImg, houseName,location,price,rooms ,squirFeet) */}
            <div className="text-3xl p-5  bg-green-100 border border-yelow-200 w-[50%] space-y-2  ">
              <p className="text-2xl w-full text-center font-bold">Cart Detail</p>
              <p className=" text-xl bg-slate-300 px-3 py-4 m-1 flex justify-between ]"><p className="ml-10 font-semibold ">Hous Name :</p> <p className="mr-10">{locals.houseName}</p></p>
              <p className=" text-xl bg-slate-300 px-3 py-4 m-1 flex justify-between ]"><p className="ml-10 font-semibold"> Location :</p> <p className="mr-10">{locals.location}</p></p>
              <p className=" text-xl bg-slate-300 px-3 py-4 m-1 flex justify-between ]"><p className="ml-10 font-semibold">Price :</p> <p className="mr-10">$ {locals.price}</p></p>
              <p className=" text-xl bg-slate-300 px-3 py-4 m-1 flex justify-between ]"><p className="ml-10 font-semibold">Rooms :</p> <p className="mr-10">{locals.rooms}</p></p>
              <p className=" text-xl bg-slate-300 px-3 py-4 m-1 flex justify-between ]"><p className="ml-10 font-semibold">Detail :</p> <p className="mr-10">{locals.detail}</p></p>
              <p onClick={()=> Navigate('/home')} className="  bg-slate-300 px-3 py-4 m-1 font-bold hover:cursor-pointer text-center text-2xl ]">Back To Home</p>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
