import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeFromCard } from '../../features/BasketSlice';
import { useAppDispatch } from '../../store';
import AmountButton from '../AmountButton'
const ProductDetailsInfo = ({product}) => {
    const dispatch = useAppDispatch();
  return (
    <div className='row  summary-list justify-space-between '>
             
            <div className='basket-image col-1-md col-6-xs '><img className='product-detail-image' src={product.image}/></div>
            <div className='row product-title col-4-md col-6-xs '>{product.title}</div>
      
             
            <div className='product-count col-3-md col-6-xs  '><AmountButton productListAmount={product}/></div>
            <div className='product-price col-2-md col-3-xs '><h4>{(product.price*product.amount).toFixed(2)} $</h4></div>
            <div className='basket-delete-icon col-1-md col-3-xs  '><DeleteOutlineIcon sx={{ cursor:'pointer'}} onClick={()=>dispatch(removeFromCard(product))}  /></div> 
           
             </div>
  )
}

export default ProductDetailsInfo