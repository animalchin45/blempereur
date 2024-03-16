import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Quote from '../../img/quote.svg';

const Testimonial = ({ name, testimonial }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });

  return (
    <div className='testimonial'>
      {isDesktop && (
        <Quote
          style={{
            transform: 'rotate(180deg)',
            marginBottom: '30px',
          }}
        />
      )}
      <div className='testimonial__text'>
        <h4 className='testimonial--quote'>{name}</h4>
        <p>{testimonial}</p>
      </div>
      {isDesktop && (
        <Quote
          style={{
            marginTop: '30px',
          }}
        />
      )}
    </div>
  );
};

export default Testimonial;
