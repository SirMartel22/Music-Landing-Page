import React from 'react'
import {useEffect, useState} from 'react';
import './Navbar.css'

import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener( "scroll", ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false); 
    })
  }, []);

  return (
   <nav className={`navigation ${sticky ? 'gradient': '' }`}>

    <img src={logo} alt="Company Logo" />

      <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#studio">Studio Services</a></li>
          <li><button className="btn"><a href="#contact">Contact</a></button> </li>
      </ul>
       
   </nav>
  )
}

export default Navbar
