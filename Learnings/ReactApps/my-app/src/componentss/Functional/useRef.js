import React, { useEffect, useRef, useState } from 'react'

function UseRefInput() {
    const inputRef=useRef()
    const countRef=useRef(0)
    const [count,setCount]=useState(0)
    
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const increment=()=>{
        setCount(count+1)
        countRef.current=count
    }


  return (
    <>
    
    <input type='text' ref={inputRef}/>
    <h5>{count} use state doesn't preserve the previous data</h5>
    <h5>{countRef.current} use effect is used to preserve the previous state</h5>
    <button onClick={increment}>Click to Increment</button>
    </>
  )
}

export default UseRefInput
