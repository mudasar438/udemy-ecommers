import React, { useState, useEffect,useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { getUsers } from "./api";

export const GetallData = () => {
  const {setAllData,allData} = useContext(CartContext)
  const [userData, setUserData] = useState([]);

  useEffect(() => {

    getalluser();
  }, []);

  const getalluser = async () => {
    try {
      console.log("function runing");

      let response = await getUsers();
      console.log(response);
      setAllData(response.data)
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("dataa coming from mongo db", userData);
  return <div>getallData</div>;
};
