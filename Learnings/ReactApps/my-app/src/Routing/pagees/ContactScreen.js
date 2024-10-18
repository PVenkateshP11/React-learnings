import React, { useContext } from 'react'
import Header from '../Component/Header'
import { SharedData } from '../contextes/ContextProvider'

function ContactScreen() {
  const ContactDetails=useContext(SharedData)
  console.log(ContactDetails,"i am from contact screen")
  return (
    <>
    <Header/>
      <h1>Iam from contact screen</h1>
      <h6>my name is{ContactDetails["name"]}</h6>
    </>
  )
}

export default ContactScreen
