import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store';
import Basket from './Basket'

const BasketProductList = () => {
    
  const productsArrayInCard = useAppSelector((state) => state.basket.data);
  let totalAmount = 0;
  productsArrayInCard.forEach(element => {
    totalAmount += Number(element.price*element.amount); 
  });

  let navigate = useNavigate();
  const cardDetailsClick = () => {
    navigate('/carddetails')
  }
  const paymentClick = () => {
    navigate('/payment')
  } 
  return (
      <>
    <div className='basket-product-list'> 
    {productsArrayInCard && productsArrayInCard.map((product)=>(
        <Basket product={product}/>
    ))}

   </div>
   <div>
     <div className='row justify-space-between'> <h2>Total Amount:</h2> <h2>{totalAmount.toFixed(2)} $</h2> </div>
     <div className='row justify-center details-card' onClick={()=>cardDetailsClick()}>View Your Card Details</div>
     <div className='row justify-center go-payment' onClick={()=>paymentClick()}>Pay Shopping</div>
   </div>
   </>
  )
}

export default BasketProductList