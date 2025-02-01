import React from 'react'
import Reeact, {useEffect, useState} from 'react';
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
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Studio Services</a></li>
          <li><button className="btn">Contact Us</button> </li>
      </ul>
       
   </nav>
  )
}

export default Navbar
