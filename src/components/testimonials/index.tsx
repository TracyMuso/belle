import TestimonialCard from '../cards/testimonialCard';

const Testimonials = () => {
  return (
    <section className="py-20 px-24 flex flex-col items-center gap-4">
      <div className="space-x-3 p-2">
        <h2>Testimonials</h2>
        <p>See what our valued clients have to say about us!</p>
      </div>
      <div>
        {}
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
