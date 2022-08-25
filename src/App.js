import logo from "./logo.svg";
import { useState } from "react";
// import './App.css';
// import './catageries.style.scss'
// import CategoryItem from './component/catagery-item/category-item.component';

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.components";
import SignUpForm from "./component/sign-up-form/sign-up-form.component";
import SignIn from "./component/form-input/form-input.component";

import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";



function App() {
  // const [categories,setCategories] = useState(array)
  return (
    <>
        <Navigation/>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUpForm/>} />
          {/* <Route path="/navigation" element={<Navigation />} /> */}

          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        
          <Route path="/checkout" element={<Checkout />} />
       
      </Routes>
    </>
  );
}

export default App;
