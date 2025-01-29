import React from 'react';
import './Studio.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMicrophoneLines} from '@fortawesome/free-solid-svg-icons';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import {faHeadphones} from '@fortawesome/free-solid-svg-icons';


const Studio = () =>{

    return (


        <div className="studio-section">

            <div className="studio-header">

                <h1>Studio Services</h1>
                <p className="paragraph"> Join Exclusive VVIP of our Studio </p>
            </div>

            <div className="studio-grid">

                <div className="studio-work box">
                    <FontAwesomeIcon className='icon' icon={faMicrophoneLines} 
                    color='rgb(241, 71, 10)'
                    size="3x"/>
                    <h3>Studio Work</h3>
                    <p>Our state-of-the-art studio provides a 
                        professional environment with top-notch
                        equipment, ensuring the perfect space for creativity, 
                        collaboration, and high-quality audio production.
                    </p>
                </div>

                <div className="recording box">
                    <FontAwesomeIcon className='icon' icon={faMusic} 
                                     color='rgb(241, 71, 10)'
                                     size="3x"
                    />
                    <h3>Recording</h3>
                    <p>We offer premium recording services, 
                        capturing crystal-clear vocals and 
                        instruments with advanced technology 
                        to deliver polished, industry-standard 
                        audio for artists, bands, and creators.</p>
                </div>

                <div className="production box">
                <FontAwesomeIcon className='icon' icon={faHeadphones} 
                                     color='rgb(241, 71, 10)'
                                     size="3x"
                    />
                    <h3>Production Services</h3>
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

export default Studio;