import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListing() {
    const[product,setproduct]=useState([])
    useEffect(()=>{
        getProducts()
        axios.get("http://localhost:3000/products")
        .then(res=>setproduct(res.data))
    },[])
    const getProducts=() =>{
        axios.get(`http://localhost:3000/products/${product.id}`)
        .then(res=>setproduct(res.data))
    }
  return (
    <div>
       {/* {
        product?.map((product)=>{
            return(
                <>
                <h3>{product.title}</h3>
                </>
            )
        })
       }
         */}
         <div className='container'>
            <div className='row'>
                {
                    product?.map((product)=>{
                        return(
                            <div className='col-md-4'>
                                <div className='card'>
                                    <h4 className='card-title'>{product.title}</h4>
                                    <img src={product.thumbnail} alt={product.title} width={80} height={80}/>
                                    <h4 className='card-item' style={{color:"red"}}>${product.price}</h4>
                                    <Link to={`product/${product.id}`}>
                                        <button>
                                            View Details
                                        </button>
                                    </Link>
                                    <button onClick={()=>{
                                        axios.delete(`http://localhost:3000/products/${product.id}`)
                                        .then ( res=>{
                                            console.log(res)
                                            alert(`product deleted${product.title}`)
                                            getProducts()
                                        })
                                        
                                        
                                        
                                    }}>Delete Product</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
         </div>
      
    </div>
     )
    }


export default ProductListing
