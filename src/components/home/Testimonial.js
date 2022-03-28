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
                    <h4 className='testimonial--quote'>One of the most special souls I've met on this Earth. Thank you for your amazing healing energy. Much love</h4>
                    <p>Grazy Bliss Ferraz</p>
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