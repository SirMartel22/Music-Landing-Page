import React from 'react'
import './Services.css'

// import studioImg from '../../assets/studio-services.jpg'
// import eventImg from '../../assets/event.jpg'
// import artistCollab from '../../assets/collab-2.jpg'

const Services = () => {

    
  return (
    <div className="services">
        <div className="service studio">
            <div className="studioTitle">
                <h3>Studio Services</h3> 
            </div>
            <div className='studioText'>
                <p>
                        <li> Information about studio work, recording, and production services. </li> 
                       <li> Packages offered (e.g., vocal recording, instrumentals, mastering). </li> 
                       <li> A booking form for studio sessions.</li>
                </p>
                <button className='btn'>Learn More </button>
            </div>
        </div>

        <div className="service Events">
            <div className="eventTitle">
                <h3>Events</h3> 
                <div className='studioText'>
                    <p>
                       <li> Calendar of upcoming gospel music concerts, workshops, or live recording sessions. </li> 
                       <li> Details of past events with photos or videos. </li> 
                       <li> Registration for events or workshops</li>
                    </p>
                    <button className='btn'>Learn More </button>

                </div>
            </div>
        </div>

        <div className="service Artist">
            <div className="artistTitle">
                <h3>Artist and Collaboration </h3>
                <div className='studioText'>
                    <p>
                       <li> Profiles of gospel artists, keyboardists, and musicians involved with the brand.</li> 
                       <li> Links to their music, performances, or social media. </li> 
                       <li> Information on how to collaborate with the brand.</li> 
                    </p>
                    <button className='btn'>Learn More </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
