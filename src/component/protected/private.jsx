import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Protected = (props) => {

  const navigate = useNavigate();

    const {Component} = props

    useEffect(()=>{
      let Login = localStorage.getItem('username');
      // console.log( "get from local",Login)
      if(!Login){
        navigate('/')
      }
    },[])
  return (
    <>
      <div className="">
     
        <Component/>
      </div>
    </>
  );
};

export default Protected;