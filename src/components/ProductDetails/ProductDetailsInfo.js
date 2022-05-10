import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeFromCard } from '../../features/BasketSlice';
import { useAppDispatch } from '../../store';

const ProductDetailsInfo = ({product}) => {
    const dispatch = useAppDispatch();
  return (
    <div className='row  basket-list justify-space-between '>
             
            <div className='product-image col-1-xl'><img className='product-detail-image' src={product.image}/></div>
            <div className='row product-title col-5-xl'>{product.title}</div>
      
            <div className='row'>
            <div className='product-count col-5-xl'>asdfas</div>
            <div className='product-price col-6-xl'><h4>{product.price} $</h4></div>
            <div className='basket-delete-icon col-1-xl '><DeleteOutlineIcon sx={{ cursor:'pointer'}} onClick={()=>dispatch(removeFromCard(product.id))}  /></div> 
            </div>
             </div>
  )
}

export default ProductDetailsInfo