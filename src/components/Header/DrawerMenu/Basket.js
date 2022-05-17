import React from 'react'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useAppDispatch } from '../../../store';
import { removeFromCard } from '../../../features/BasketSlice';
const Basket = ({product}) => {
  const dispatch = useAppDispatch();
  const totalProductPrice = product.amount*product.price
 
  return (
    <div className='row  basket-list justify-space-between'> 
          <div className='col-2-xl basket-image'><img src={product.image} /></div>
         
          <div className='basket-middle col-6-xl '>
            <h5>{product.title} </h5>
         <p>{product.amount} {product.amount == 1 ? <>piece</> : <>pieces</>}</p>
          </div>
        
          
          <div className='col-3-xl basket-delete-icon'> <span className='card-price'>{totalProductPrice.toFixed(2)} $</span><DeleteOutlineIcon sx={{ cursor:'pointer'}} onClick={()=>dispatch(removeFromCard(product))}  /></div> 
      </div>
  )
}

export default Basket