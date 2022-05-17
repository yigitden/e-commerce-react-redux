import React from "react";

const SumaryCard = ({totalAmount,productsArrayInCard}) => {
  return (
    <div className="summary-card gap-1 ">
      <div className="row justify-center">
       <p> Card Summary</p>
      </div>
      <div className="row justify-space-between">
          
        <p> Total of Products:  </p> 
         <p>{totalAmount.toFixed(2)} $</p> 
      </div>
      <div className="row justify-space-between">
        <p> Total Pieces of Products:</p>
        <p>{productsArrayInCard.length}</p>
      </div>
      <div className='row justify-center go-payment' >Pay Shopping</div>
          
    </div>
  );
};

export default SumaryCard;
