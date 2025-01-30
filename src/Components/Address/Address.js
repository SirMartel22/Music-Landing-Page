import React from 'react';

import './Address.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'


const Address = () =>{

    return(
        <div className = "address-section">
            
            <div className="addresscontainer">

                <div className="address-box">

                    <div className="about">
                    <FontAwesomeIcon className='icon' icon={faAddressCard} 
                                            color='rgb(241, 71, 10)'
                                            size="3x"/>
                        <h3>About</h3>
                        <p>Running Guide Workout</p>
                    </div>

                    <div className="Phone">

                    <FontAwesomeIcon className='icon' icon={faPhone} 
                                            color='rgb(241, 71, 10)'
                                            size="3x"/>
                        <h3>Phone</h3>
                        <p>+222 887 467826</p>
                        <p>+222 887 467826</p>

                    </div>

                    <div className="about">
                         <FontAwesomeIcon className='icon' icon={faLocationCrosshairs} 
                                            color='rgb(241, 71, 10)'
                                            size="3x"/>
                        <h3>Our Office Location</h3>
                        <p>The Interior Design Studio Company,
                            The Couryard. AI Colorado, USA </p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Address;
