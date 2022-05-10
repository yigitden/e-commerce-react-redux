import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useAppDispatch, useAppSelector } from "../../store";
const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const productsArrayInCard = useAppSelector((state) => state.basket.data);
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
      <div className="row gap-1 justify-center">
     
            <>
              {allProducts &&
                allProducts.map((product) => (


                  <ProductCard product={product}  />


                  
                ))}
            </>
        
      </div>
    </div>
  );
};

export default ProductList;
