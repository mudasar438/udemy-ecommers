import React, { useState,useEffect } from 'react'
import { getUsers } from './api';
export const GetallData = () => {
    const [userData,setUserData]=useState([])
      // console.log(search);
  useEffect(() => {
    // console.log('clicked')
    getalluser();
}, []);
// console.log(users,"users")
  const getalluser = async () => {
    try{
        console.log("function runing")

      let response = await getUsers();
      console.log(response)
      setUserData(response.data);
    }
    catch(error){
      console.error(error)
    }
  };
  console.log('dataa coming from mongo db',userData)
  return (
    <div>getallData</div>
  )
}
