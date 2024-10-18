import React, { useContext } from 'react'
import {UserDetails} from './useContext/UseContextExample'

function ComponentC() {
  const userName =useContext(UserDetails)
  console.log("userName")
  return (
    <div>
      <h3>i am lowest level</h3>
    </div>
  )
}

export default ComponentC
