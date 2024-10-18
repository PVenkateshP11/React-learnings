import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
// import Counter from '../../componentss/StateComponent'

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>  */}
    <ul>
        <li>
            <Link className='nav-link' to={"/"}>Home</Link>
            
        </li>
        
        <li>
            <Link className='nav-link' to={"/blogs"}>blogs</Link>
        </li>
        <li>
            <Link  className='nav-link' to={"/contact"}>Contact</Link>
        </li>
        <li>
            <Link className='nav-link' to={"/about"}>about</Link>
            
        </li>
        <li>
            <Link className='nav-link' to={`/users/${3}`}>Product3</Link>
            
        </li>
        
    </ul>
    </div> 

  </div>
</nav>
    </>
  )
}

export default Header
