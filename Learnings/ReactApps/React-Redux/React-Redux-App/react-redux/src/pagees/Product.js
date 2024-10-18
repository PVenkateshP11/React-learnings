import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { ProductAction } from '../redux/products/action'
function Product() {
  const dispatch=useDispatch()

  const storeData=useSelector(state=>state)
  console.log(storeData)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    // axios.get("https://api.jsonbin.io/v3/b/67077716ad19ca34f8b5ee07")
    .then(response=>dispatch(ProductAction(response.data)))
  },[])
  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default Product
