import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdLogin } from "react-icons/md";

import { MdOutlinePersonAddAlt1 } from "react-icons/md"; 
import DrawerMenu from '../DrawerMenu/DrawerMenu';

const RightIcons = () => {
 

  return ( 
    <>
   
     <div className='row icon'> <MdLogin size='20px'/> Login </div>
     <div className='row icon'><MdOutlinePersonAddAlt1 size='20px'/> Register </div> 
     
     <DrawerMenu/>
     
     </>
    
  )
}

export default RightIcons