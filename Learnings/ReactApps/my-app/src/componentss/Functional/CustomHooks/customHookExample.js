import React from 'react'
import UseAxios from './useAxios'

function CustomHookExample() {
    const[data]=UseAxios()
    console.log(data)
  return (
    <div>
      Custom Hook Example
    </div>
  )
}

export default CustomHookExample

