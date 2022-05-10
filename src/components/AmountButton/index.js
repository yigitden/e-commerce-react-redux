import React from 'react'
import { addToCard,removeAmount } from '../../features/BasketSlice'
import { useAppDispatch } from '../../store'   
const AmountButton = ({productListAmount}) => {
    const dispatch = useAppDispatch()
  return (
    <div className="row justify-space-between amount">
    <div className="col-3 amount-button" onClick={() => dispatch(removeAmount(productListAmount)) }>
      <span>-</span>
      </div>
   
    <div className="col-6">{productListAmount.amount}</div>
   
    <div className="col-3 amount-button"  onClick={() => dispatch(addToCard(productListAmount)) }>    <span>+</span></div>
  </div>
  )
}

export default AmountButton