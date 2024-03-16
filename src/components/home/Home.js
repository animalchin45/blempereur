import React from 'react';
import { useMediaQuery } from 'react-responsive';
import articles from './articles';
import { testimonials } from './testimonials';
import Hero from './Hero';
import Services from './Services';
import RenderArticles from '../RenderArticles';
import Testimonial from './Testimonial';

const Home = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  const renderedReviews = testimonials.map((review) => {
    return <Testimonial name={review.name} testimonial={review.testimonial} />;
  });

  return (
    <div className='layout__body layout__body--home'>
      <Hero />
      {isDesktop && <Services />}
      <RenderArticles articles={articles} />
      <div className='reviews'>
        <h3>Client Reviews</h3>
        <div className='reviews__container'>{renderedReviews}</div>
      </div>
    </div>
  );
};

export default Home;
