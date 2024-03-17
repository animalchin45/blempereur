import React from 'react';

const Testimonial = ({ name, testimonial }) => {
  return (
    <div className='testimonial'>
      <div className='testimonial__text'>
        <h4 className='testimonial--quote'>{name}</h4>
        <p>{testimonial}</p>
      </div>
    </div>
  );
};

export default Testimonial;
