import React, { useEffect } from 'react'
import LoginScreen from './LoginScreen'
import { useNavigate } from 'react-router-dom'

function RegisterScreen() {
    const navigate=useNavigate("user")

    useEffect(()=>{
    const[data]=localStorage.getItem("username")
    alert(data)
    },[])
    const redirectLogin=()=>{
        navigate("/login")
    }
  return (
    <>
      <LoginScreen/>
    </>
  )
}

export default RegisterScreen
