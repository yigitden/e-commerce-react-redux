import React from 'react'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useAppDispatch } from '../../../store';
import { removeFromCard } from '../../../features/BasketSlice';
const Basket = ({product,index}) => {
  const dispatch = useAppDispatch();
  const totalProductPrice = product.amount*product.price
 
  return (
    <div className='row  basket-list justify-space-between' key={index}> 
          <div className='col-2-xs basket-image'><img src={product.image} /></div>
         
          <div className='basket-middle col-6-xs'>
            <h5>{product.title} </h5>
         <p>{product.amount} {product.amount == 1 ? <>piece</> : <>pieces</>}</p>
          </div>
        
          
          <div className='col-4-xs basket-delete-icon'> <span className='card-price'>{totalProductPrice.toFixed(2)} $</span><DeleteOutlineIcon sx={{ cursor:'pointer'}} onClick={()=>dispatch(removeFromCard(product))}  /></div> 
      </div>
  )
}

export default Basket