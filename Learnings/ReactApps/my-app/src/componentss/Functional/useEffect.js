import React,{ useEffect, useState } from 'react'
// import { useState } from 'react'

function UseEffectComponent() {
    const[count,setcount]=useState(1)
    const[text,settext]=useState("")

    useEffect(()=>{
        document.title=`${count}`
    },[count,text])
  return (

    <>
      <h3>Iam from use effect</h3>
      <h3>{count}</h3>
      <input type="text" value={text} onChange={(e)=>settext(e.target.value)}/>
      <button onClick={()=>setcount(count+1)}>Increment App</button>
    </>
  )
}

export default UseEffectComponent
