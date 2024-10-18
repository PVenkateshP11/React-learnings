import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pagees/HomeScreen'
import BlogScreen from './pagees/BlogScreen'
import ContactScreen from './pagees/ContactScreen'
import AboutScreen from './pagees/AboutScreen'
// import NoRoute from './pagees/NoRoute'
import UserScreen from './pagees/UserScreen'
import ProductScreen from '../componentss/Functional/ProductScreen'
import ContextProvider from './contextes/ContextProvider'

 function AppRoutes() {
  return (
    
    <BrowserRouter>
    
    
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/blogs' element={<BlogScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        
      {/* Dynamic Routing  */}
      <Route path='/users/:id' element={<UserScreen/>}/>
      <Route path='/users/:id' element={<ProductScreen/>}/>
      {/* <Route path='*' element={<NoRoute/>}/>  */}



       
      </Routes>

    
    </BrowserRouter>
    
  )
}
export default AppRoutes
