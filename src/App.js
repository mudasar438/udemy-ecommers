import logo from './logo.svg';
import {useState} from 'react'
// import './App.css';
// import './catageries.style.scss'
// import CategoryItem from './component/catagery-item/category-item.component';

import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.components';
import Authentication from './routes/sign-in/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';




// const Shop = () => {
//   return <h1>I am the shop page</h1>;
// };


function App() {


  // const [categories,setCategories] = useState(array)
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
