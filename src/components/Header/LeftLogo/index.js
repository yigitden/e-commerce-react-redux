import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.jpg' 
const LeftLogo = () => {
  return (
    <Link to='/'><img src={logo} className='logo'/></Link>
  )
}

export default LeftLogo