import React from 'react'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'

console.log(Title);

const App = () => {
  return (
    
    <div className='App'>
      <Navbar />
      <Hero />

      <Title subtitle ="Who we are" Title = "About Us" />
      <About />

      <Title subtitle ="What we Offer" Title = "Our Services" />
      <Services />
    </div>


  )

}

export default App



