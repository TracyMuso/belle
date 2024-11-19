import { MapPin, PhoneIcon, MailIcon, WhatsappIcon } from '../icons';

const Contact = () => {
  return (
    <section className="w-full px-20 py-16">
      <h1 className="text-5xl font-semibold text-center py-2">
        Book your appointment
      </h1>
      <div className="flex flex-col items-center justify-between mx-auto py-6 w-full space-y-2">
        <p className="text-2xl py-2 text-center">
          Call any of the numbers below to make an appointment or enquiry. We
          have the most qualified professionals ready to give you
        </p>
        <span className="inline-flex gap-2 text-[17px]">
          <PhoneIcon />
          Toll free: <a href="tel:+260778997256">260778997256</a>
        </span>
        <span className="inline-flex gap-2 text-[17px]">
          <WhatsappIcon />
          Whatsapp: <a href="#">260 776 234 678</a>
        </span>
        <span className="inline-flex gap-2 text-[17px]">
          <MailIcon />
          Mail: <a href="mailto:name@mail.com">mahekbeauty@ymail.com</a>
        </span>
        <span className="inline-flex gap-2 text-[17px]">
          <MapPin />
          Address: 2260 Bovaird Dr E Unit #117, Brampton, ON
        </span>
      </div>
    </section>
  );
};

export default Contact;
