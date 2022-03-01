import React from 'react'

const Banner = ({ img }) => {
    return (
        <div 
            className="banner"
            style={{backgroundImage:`url(${img})`}}
        >
        {/*no content in this div*/}
        </div>
    )
}

export default Banner