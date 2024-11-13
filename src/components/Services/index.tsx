import ServiceCard from '../cards/serviceCard';
import { servicesCardData } from '../../constants/HomePage';

const Services = () => {
  return (
    <section className="xl:px-20 md:px-12 py-24 flex flex-col gap-8 items-center">
      <div className="mx-auto pb-6">
        <h2 className="text-4xl text-center font-semibold pb-4">
          Our Services
        </h2>
        <p className="text-center px-6 md:w-full">
          We do hairbraiding, mani-pedis, lash-extensions and brow henna
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-12 flex-wrap xl:w-11/12 lg:gap-0 w-full items-center justify-between">
        {servicesCardData.map((item, idx) => (
          <ServiceCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Services;