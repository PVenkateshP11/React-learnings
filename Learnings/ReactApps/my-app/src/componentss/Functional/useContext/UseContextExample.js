import React, { createContext, useState } from 'react'
import ComponentA from '../ComponentA'
export const UserDetails=createContext()

function UseContextExample() {
 
    const[name]=useState("venky")
    
  return (
    <div>
      <UserDetails.Provider value={name}>
      <ComponentA />
      </UserDetails.Provider>
       
    </div>
  )
}

export default UseContextExample
