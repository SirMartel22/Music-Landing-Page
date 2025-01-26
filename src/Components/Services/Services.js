import React from 'react';
import './Services.css';
import servicesImg from '../../assets/mic-4.jpg'


const Services = () => {
  return (

    <div className="services-section">
        <div className='services-header'>
            <h1>Our services are tailored to meet your needs.</h1>
        </div>

        <div className="services-flex">
                <div className="services-container flex-section">
                    <div className='recording card'>
                        <h2>Recording Services</h2>
                        <p>Our studio is equipped with the latest technology to deliver the best sound quality. 
                            We offer vocal recording, instrumentals, and mastering. </p>
                        <a href="https://musical-website.com">Learn More</a>

                    </div>

                    <div className='Production card'>
                        <h2>Production and Mixing Services </h2>
                        <p>Our team of producers and sound engineers will help you create the perfect sound.</p>
                         <a href="https://musical-website.com">Learn More</a>

                    </div>

                    <div className='commercial card'>
                        <h2>Commercial and Media Projects</h2>
                        <p>We provide music production services for commercials, films, and other media projects.</p>
                         <a href="https://musical-website.com">Learn More</a>
                        
                    </div>

                    <div className='customizable-services card'>
                        <h2>Customizable Services</h2>
                        <p>Our studio is equipped with the latest technology to deliver the best sound quality. 
                            We offer vocal recording, instrumentals, and mastering. </p>
                         <a href="https://musical-website.com">Learn More</a>
                    </div>

            </div>

            <div className="image flex-section">
                <img src={servicesImg} alt="" />
            </div>
        </div>

      
    </div>
  )
}

export default Services
