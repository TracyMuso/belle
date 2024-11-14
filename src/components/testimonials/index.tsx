import TestimonialCard from '../cards/testimonialCard';
import { TestimonialData } from '../../constants/HomePage';
import TestimonialCardCarousel from '../carousels/testimonialCarousel';

const Testimonials = () => {
  return (
    <section className="md:py-20 py-12 lg:px-24 sm:px-10 flex flex-col items-center sm:gap-12 gap-6">
      <div className="space-y-4 p-2">
        <h2 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-center font-semibold">
          Testimonials
        </h2>
        <p className="px-3 text-center">
          See what our valued clients have to say about us!
        </p>
      </div>
      <div className="hidden md:flex flex-row lg:flex-nowrap flex-wrap md:justify-around items-center xl:gap-9 gap-5 py-2">
        {TestimonialData.map((item, idx) => (
          <TestimonialCard key={idx} {...item} />
        ))}
      </div>
      <div className="md:hidden block w-[305px] h-[245px] mx-auto">
        <TestimonialCardCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
