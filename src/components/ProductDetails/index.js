import React from 'react'
import { useAppSelector } from '../../store'
import ProductDetailsInfo from './ProductDetailsInfo' 
const ProductDetails = () => {
    const productsArrayInCard = useAppSelector((state) => state.basket.data);
  return (
    <div className='container'>
    <div className='row '>
        <div className='col-12-xl gap-3'>
        <h1>Card Details (sayı)</h1>
        </div>
    </div>
    <div className='row justify-space-between'>
        <div className='product-details col-8-xl'>
            {productsArrayInCard && productsArrayInCard.map(product => (
                 <ProductDetailsInfo product={product}/>
            ))}
      
        </div>
        <div className='payment-details col-4xl'>sa</div>
    </div>
    </div>
  )
}

export default ProductDetails