import React from 'react';

import Testimonial from './Testimonial';

import { testimonials } from './testimonials';

const Reviews = () => {
  const renderedReviews = testimonials.map((review) => {
    return <Testimonial name={review.name} testimonial={review.testimonial} />;
  });

  return (
    <div className='reviews'>
      <h3>Client Reviews</h3>
      <div className='reviews__container'>{renderedReviews}</div>
    </div>
  );
};

export default Reviews;
