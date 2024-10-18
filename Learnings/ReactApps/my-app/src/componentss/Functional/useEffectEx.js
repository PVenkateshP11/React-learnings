
import axios from "axios"
import React, { useEffect, useState } from 'react'

function UseEffectEx() {
    const[data,setdata]=useState(null)
    useEffect(()=>{
        fetch("https://localhost:3000/users")
        .then(res=>res.json())
        .then(res=>setdata(res))
        
            // axios.get("http://localhost:3000/users")
            // .then(res=>setdata(res.data))
        
       
    },[])
  return (
    <div>
        {
          data?.map((users=>
          <h3>{users.name}</h3>)
        )}
      
    </div>
  )
}

export default UseEffectEx
