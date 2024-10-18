import React from 'react'
import { useParams } from 'react-router-dom'

function UserScreen() {
    const data=useParams()
  return (
    <>
     <h1>I am a User screen,my id is{data.id}</h1> 
    </>
  )
}

export default UserScreen
