import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const[x,setX]=useState(null)
    const[y,setY]=useState(null)

    const mouseLog=(e)=>{
        console.log("mouse Log function")
        setX(e.clientX)
        setY(e.ClientY)
    }
    

    useEffect(
        ()=>{
            window.addEventListener("mousemove",mouseLog)
           
        
        return()=>{
            window.removeEventListener("mousemove",mouseLog)
        }
        },[]
    )
  return (
    <>
     <h3>Use effect example2</h3> 
     <h3>mouse x coordinate--{x}</h3>
     <h3>mouse y coordinate--{y}</h3>
    </>
  )
}

export default UseEffect1
