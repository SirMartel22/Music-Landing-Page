import React from 'react'

import './Title.css'

const Title = (props) => {

    return (

        <div className="title">
            <h4>{props.subtitle}</h4>
            <h2>{props.Title}</h2>
        </div>
    )
}

export default Title;