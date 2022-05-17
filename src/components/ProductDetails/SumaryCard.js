import React from "react";
import Divider from "@mui/material/Divider";
const SumaryCard = ({totalAmount,productsArrayInCard}) => {
  return (
    <div className="summary-card gap-1 ">
      <div className="row justify-center">
       <p className="summary-title"> Card Summary  <Divider /></p>
        
      </div>
      <div className="row justify-space-between">
          
        <p className="summary-subtitle"> Total of Products:  </p> 
         <p className="summary-text">{totalAmount.toFixed(2)} $</p> 
      </div>
      
      <div className="row justify-space-between">
        <p className="summary-subtitle"> Total Pieces of Products:</p>
        <p className="summary-text">{productsArrayInCard.length}</p>
      </div>
      <div className='row justify-center go-payment' >Pay Shopping</div>
          
    </div>
  );
};

export default SumaryCard;
