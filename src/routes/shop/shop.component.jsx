import { useContext } from "react";
import ProductCard from "../../component/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";
import  Navigation from '../navigation/navigation.component'
const Shop = () => {

    const {Product}=useContext(ProductContext);
  return (
    <> <Navigation/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {Product.map((product) => (
          <ProductCard product={product} key={product.id}/>
          
        ))}
      </div>
    </>
  );
};

export default Shop;