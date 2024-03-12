import React from 'react';
import Quote from '../../img/quote.svg';

const Testimonial = ({ name, testimonial }) => {
  return (
    <div className='testimonial'>
      <Quote
        style={{
          transform: 'rotate(180deg)',
          marginBottom: '30px',
        }}
      />
      <div className='testimonial__text'>
        <h4 className='testimonial--quote'>{name}</h4>
        <p>{testimonial}</p>
      </div>
      <Quote
        style={{
          marginTop: '30px',
        }}
      />
    </div>
  );
};

export default Testimonial;
