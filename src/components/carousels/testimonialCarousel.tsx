import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import TestimonialCard from '../cards/testimonialCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TestimonialData } from '../../constants/HomePage';

const TestimonialCardCarousel = () => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    // This forces a rerender, so the carousel is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1028: {
      items: 3,
    },
  };

  return (
    <AliceCarousel
      animationDuration={250}
      autoPlay={true}
      activeIndex={1}
      animationType="slide"
      mouseTracking={true}
      responsive={responsive}
      autoPlayInterval={2000}
      autoPlayControls={false}
      autoPlayDirection="rtl"
      disableButtonsControls={true}
      infinite={true}
    >
      {TestimonialData.map((item, idx) => {
        return <TestimonialCard {...item} key={idx} />;
      })}
    </AliceCarousel>
  );
};

export default TestimonialCardCarousel;
