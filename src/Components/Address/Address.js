import React from 'react';

import './Address.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'


const Address = () =>{

    return(
        <div className = "address-section">

                <div className="address-container">

                    <div className="aboutt division">
                    <FontAwesomeIcon className='icon' icon={faAddressCard} 
                                            color='rgb(241, 71, 10)'
                                            size="2x"/>
                        <h3>About</h3>
                        <p>Running Guide Workout</p>
                    </div>
                    <div className="call division">

                    <FontAwesomeIcon className='icon' icon={faPhone} 
                                            color='rgb(241, 71, 10)'
                                            size="2x"/>
                        <h3>Phone</h3>
                        <p>+222 887 467826</p>
                        <p>+222 887 467826</p>

                    </div>

                    <div className="location division">
                         <FontAwesomeIcon className='icon' icon={faLocationCrosshairs} 
                                            color='rgb(241, 71, 10)'
                                            size="2x"/>
                        <h3>Our Office Location</h3>
                        <p>The Musical Studio Company,
                           Ilorin, Nigeria </p>
                    </div>
            </div>
            
            <div className="copyright">
                <p>© 2025 Musical Website. 
                    All rights reserved.</p>
            </div>
        </div>
    )
}

export default Address;
