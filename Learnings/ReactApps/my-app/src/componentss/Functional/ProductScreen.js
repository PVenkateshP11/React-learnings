import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductScreen() {
    
    const product=useParams()
    // console.log(product.id)
    const[productes,setproductes]=useState(null)
    

    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${product.id}`)
        .then(res=>setproductes(res.data))
    },[])
    
  return (
    <div>
      <h4>{productes?.title}</h4>
      <h4>{productes?.description}</h4>
      <h4>{productes?.brand}</h4>
      <img src={productes?.thumbnail} alt={productes.thumbnail}/>      
    </div>
  )
}

export default ProductScreen
