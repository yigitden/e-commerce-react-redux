import React from "react";
import { addToCard } from "../../features/BasketSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import AmountButton from "../AmountButton";
import Button from "../Button";
const ProductCard = ({ product  }) => {
  const dispatch = useAppDispatch();

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };
 
  const productInfo = {
    id: `${product.id}`,
    title: `${product.title}`,
    price: `${product.price}`,
    image: `${product.image}`,
  };

  const productsArrayInCard = useAppSelector((state) => state.basket.data);
  const productListAmount = productsArrayInCard.find(item=> item.id == product.id)
  return (
    <div className="col-12-xs col-6-sm col-4-md col-3-xl" key={product.id}>
      <div className="card">
        <div className="card-image">
          <img src={product.image} />
        </div>
        <div className="row  justify-space-between category">
          <span className="card-category">
            {product.category.toUpperCase()}
          </span>
          <span>{product.price.toFixed(2)} $</span>
        </div>
        <div className="row justify-center card-title">{product.title}</div>
        <p className="card-body">
          {truncateString(`${product.description}`, 120)}
        </p>

           {productListAmount && productListAmount.amount ? (
             <AmountButton productListAmount = {productListAmount}/>
           )
            :
            (
              <div className="row justify-center card-button" onClick={() =>dispatch(addToCard(productInfo))}>ADD TO CARD</div>
          
            )}
          
      </div>
    </div>
  );
};

export default ProductCard;
