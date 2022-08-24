import { useContext } from "react";
import ProductCard from "../../component/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";
const Shop = () => {

    const {Product}=useContext(ProductContext);
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {Product.map((product) => (
          <ProductCard product={product} key={product.id}/>
          
        ))}
      </div>
    </>
  );
};

export default Shop;