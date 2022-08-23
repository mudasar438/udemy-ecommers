import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
// import './catageries.style.scss'
// import CategoryItem from './component/catagery-item/category-item.component';
import Directory from './component/directory/directory.component';

function App() {
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

  // const [categories,setCategories] = useState(array)
  return (
    <>
    <div className='categories-container'>
      <Directory  categories={categories}/>
     
    </div>
    </>
  );
}

export default App;
