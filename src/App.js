import React from 'react'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import Studio from './Components/Studio/Studio'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Address from './Components/Address/Address';

console.log(Title);

const App = () => {
  return (
    
    <div className='App'>
      <Navbar />
      <Hero />

      <Title subtitle ="Who we are" Title = "About Us" />
      <About />

      <Services />

      <Studio />

      <Title subtitle ="check our past work" Title = "Gallery" />
      <Gallery />

      <Contact />

      <Address />


    </div>


  )

}

export default App



