import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard"; 
const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products?limit=12")
      .then((response) => setAllProducts(response.data));
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container">
      <div className="product-list row gap-1 justify-center">
        <>
          {allProducts &&
            allProducts.map((product, index) => (
              <ProductCard 
              product={product} 
              index={index} />
            ))}
        </>
      </div>
    </div>
  );
};

export default ProductList;
