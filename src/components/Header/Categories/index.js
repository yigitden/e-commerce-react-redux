import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
 
  
  const getAllCategories = async() => {
    await axios.get('https://fakestoreapi.com/products/categories')
    .then(response=>setCategories(response.data))  
  }
      useEffect(()=>{
        getAllCategories()
      },[])
  
  return (
    <div className="row justify-space-around gap-1">
      {categories && categories.map((cat,index)=>(
      <span className="cat-name" key={index}>  <Link to={`/${cat}`}> {cat.toUpperCase()}</Link></span>
      ))}
       
    </div>
  );
};

export default Categories;
