import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header' 
import ProductCard from '../ProductCard'

const CategoryList = () => {
    const param = useParams(); 
    const [productsFromCategory,setProductsFromCategory] = useState([])
    const getAllProductsFromCategory = async () => {
             await axios.get(`https://fakestoreapi.com/products/category/${param.categoryName}`)
                   .then(response=>setProductsFromCategory(response.data));
    }

    useEffect(()=>{
        getAllProductsFromCategory();
    },[param.categoryName])
  return (
     
    <div className="container">
      <div className="row gap-1 justify-center">
        {productsFromCategory &&
          productsFromCategory.map((product) => (
            <ProductCard product={product}/>

          ))}
      </div>
    </div>

     
  )
}

export default CategoryList