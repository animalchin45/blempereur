import React from 'react'
import Quote from '../../img/quote.svg'

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <Quote style={
                {
                    transform: 'rotate(180deg)',
                    marginBottom: '30px'
                }
            } />
                <div className='testimonial__text'>
                    <h4 className='testimonial--quote'>Barbara is the best! It was a great experience working with her.</h4>
                    <p>Anonymous</p>
                </div>
            <Quote style={
                {
                    marginTop: '30px'
                }
            } />
        </div>
    )
}

export default Testimonial