import React from 'react'
import './Hero.css'

import vid_2 from '../../assets/vid-2.mp4'

const Hero = () => {

    return (
        <div className = "Hero">

            <video src={vid_2} autoPlay loop muted >


            </video>

            <div className="vid-content">
                <h1>Musical Website Content</h1> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Reiciendis sed facere quae nulla debitis? 
                </p> 
                <button className="btn">Explore More</button>
            </div>
        </div>
    )
}

export default Hero;