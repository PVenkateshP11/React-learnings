import React, { useCallback, useState } from 'react'
import Heading from './useCallback/Heading'
import ShowText from './useCallback/ShowText'
import Button from './useCallback/Button'

function UseCallback() {
    const[salary,setSalary]=useState(10000)
    const[count,setCount]=useState(0)

    // const incrementCount=()=>{
    //     setCount(count+1)
    const incrementCount=useCallback(()=>{
        setCount(count+1)
    },[count])
    
    // const incrementSalary=()=>{
    //     setSalary(salary+1000)
    // }
    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    
  return (
    <>
      <Heading/>
      <ShowText value={salary} name={"salary"} />
      <ShowText value={count} name={"count"}/>
      <Button clickEvent={incrementSalary} name={"salary increment"}/>
      <Button clickEvent={incrementCount} name={"count increment"}/>
    </>
  )
}

export default UseCallback
