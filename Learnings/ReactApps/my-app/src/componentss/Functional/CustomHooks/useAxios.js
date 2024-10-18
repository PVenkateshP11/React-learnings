import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseAxios() {

    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>setData(res.data))
    },[])
    return[data]  
}
      
export default UseAxios
