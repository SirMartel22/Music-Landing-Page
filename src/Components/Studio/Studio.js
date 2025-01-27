import React from 'react';
import './Studio.css';

import bassPlayer from '../../assets/collab.jpg'

import studioMic from https://fontawesome.com/icons/microphone-lines?f=classic&s=solid

const Studio = () =>{

    return (


        <div className="studio-section">

            <div className="studio-header">

                <h1>Studio Services</h1>
                <p> Join Exclusive VVIP of our Studio </p>
            </div>

            <div className="studio-grid">

                <div className="studio-work">
                    <h1>Studio Work</h1>
                    <p>Our state-of-the-art studio provides a 
                        professional environment with top-notch
                        equipment, ensuring the perfect space for creativity, 
                        collaboration, and high-quality audio production.
                    </p>
                </div>

                <div className="recording">
                    <h1>Recording</h1>
                    <p>We offer premium recording services, 
                        capturing crystal-clear vocals and 
                        instruments with advanced technology 
                        to deliver polished, industry-standard 
                        audio for artists, bands, and creators.</p>
                </div>

                <div className="production">
                    <h1>Production Services</h1>
                    <p>From composing and arranging to mixing 
                       and mastering, our production services 
                       transform ideas into fully produced tracks 
                       that stand out across all platforms and genres.
                    </p>
                </div>


            </div>

        </div>


    )
}