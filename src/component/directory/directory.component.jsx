import React from 'react'
import CategoryItem from '../catagery-item/category-item.component'
import './directory.styles.scss';

const Directory = ({categories}) => {
  return (
   <>

   <div className="directory-container">
   {categories.map((category) => {
        console.log("c array",category)
        return(

          <CategoryItem key={category.id} category = {category}/>
        )
      }
       
      )}
   </div>
   </>
  )
}

export default Directory