import React, { useState } from 'react'
import UseMemoChild from './useMemoChild'

function UseMemoExample() {
    const[text,settext]=useState("good Morning ")
  return (
    <UseMemoChild text={text}/>
  )
}

export default UseMemoExample
