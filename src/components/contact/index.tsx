import ContactForm from './contactForm';

const Contact = () => {
  return (
    <section className="w-full px-20 py-24">
      <h1>Book your appointment with us</h1>
      <div className="flex items-start justify-between w-full">
        <div>
          <p>
            Call any of the numbers below to make an appointment <br /> 0779 234
            5689
          </p>
          <span>Come visit us at our store</span>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
