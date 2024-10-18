import React, { useMemo, useState } from 'react'

function UseMemoChild({text}) {
    const[count,setcount]=useState(0)

    // const capitalize=()=>{
    //     return text.toUpperCase()
    // }
    const capitalize=useMemo(()=>{
      return text
    })
    const increment=()=>{
        setcount(count+1)
    }
  return (
    <div>
      <h3>{capitalize}</h3>
      <button onClick={increment}>{count} Increment</button>
    </div>
  )
}

export default UseMemoChild