import React from 'react'
import mic_2 from '../../assets/mic-2.jpg'

import './About.css'

const About = () =>{

    return (
        <div className="about" id='about'>
            <div className="about-container">

                <div className='aboutText'>
                    <p>Founded to spread the message of hope and faith through music, 
                        the brand has become a beacon of inspiration in gospel circles,
                        combining heartfelt lyrics with soulful melodies to uplift and transform lives.
                    </p>

                    <button className='btn'> More About Us</button>
                </div>

                <div className="aboutImg">
                    <img src={mic_2} alt="" />
                </div>
            </div>

        </div>
    )
}

export default About