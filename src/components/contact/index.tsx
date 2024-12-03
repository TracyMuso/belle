import { MapPin, PhoneIcon, MailIcon, WhatsappIcon } from '../icons';

const Contact = () => {
  return (
    <section className="w-full md:px-20 px-10 py-16 bg-white">
      <h1 className="xl:text-5xl w-full md:text-4xl sm:text-3xl text-2xl font-semibold text-center py-2">
        Book your appointment
      </h1>
      <p className="xl:text-2xl md:text-xl py-2 text-gray-800 text-center">
        Call any of the numbers below to make an appointment or enquiry. We have
        the most qualified professionals ready to give you a well-tailored
        experience.
      </p>
      <div className="flex flex-col sm:items-center text-gray-800 items-start justify-between mx-auto py-6 sm:w-full  space-y-2">
        <span className="inline-flex gap-2 md:text-[17px]">
          <PhoneIcon />
          Toll free: <a href="tel:+260778997256">260778997256</a>
        </span>
        <span className="inline-flex gap-2 md:text-[17px]">
          <WhatsappIcon />
          Whatsapp: <a href="#">260 776 234 678</a>
        </span>
        <span className="inline-flex gap-2 md:text-[17px]">
          <MailIcon />
          Mail: <a href="mailto:name@mail.com">belle@ymail.com</a>
        </span>
        <span className="inline-flex gap-2 md:text-[17px] md:text-center">
          <MapPin />
          Address: Plot 99, Some road, Lusaka Zambia
        </span>
      </div>
    </section>
  );
};

export default Contact;
