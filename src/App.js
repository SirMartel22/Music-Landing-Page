import React from 'react'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Title from './Components/Title/Title'

console.log(Title);

const App = () => {
  return (
    
    <div className='App'>
      <Navbar />

      <Title subtitle ="Who we are" Title = "About Us" />
      <About />

      <Title subtitle ="Our Services" Title = "What we Offer" />
    </div>


  )

}

export default App



