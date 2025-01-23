import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
   <nav className="navigation">

    <img src={logo} alt="Company Logo" />

      <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Music Library</a></li>
          <li><a href="">Studio Services</a></li>
          <li><button className="btn">Contact Us</button> </li>
      </ul>
      
   </nav>
  )
}

export default Navbar
