import React from 'react'

import { Outlet } from 'react-router-dom';
import Directory from '../../component/directory/directory.component'
import  Navigation from '../navigation/navigation.component'
const Home = () => {
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
  return (
    <><div className="flex flex-col ">

     <Navigation/>
    <div className=' mt-[100px] md:mt-[50px]' >


      <Directory  categories={categories}/>
      <Outlet/>
   
    </div>
    </div>

    </>
  )
}

export default Home