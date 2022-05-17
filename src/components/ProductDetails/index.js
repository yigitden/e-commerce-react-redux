import React from "react";
import { useAppSelector } from "../../store";
import ProductDetailsInfo from "./ProductDetailsInfo";
import SummaryCard from "../ProductDetails/SumaryCard";
const ProductDetails = () => {
  const productsArrayInCard = useAppSelector((state) => state.basket.data);
  let totalAmount = 0;
  productsArrayInCard.forEach((element) => {
    totalAmount += Number(element.price * element.amount);
  });
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12-xl gap-3">
          <h1 className="card-details">Card Details ({productsArrayInCard.length})</h1>
        </div>
      </div>
      <div className="row ">
        <div className="product-details col-8-xl">
          {productsArrayInCard &&
            productsArrayInCard.map((product) => (
              <ProductDetailsInfo product={product} />
            ))}
        </div>
        <div className="col-3-xl">
          <SummaryCard
            productsArrayInCard={productsArrayInCard}
            totalAmount={totalAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
