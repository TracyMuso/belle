import {
  FaceBookIcon,
  WhatsappIcon,
  InstagramIcon,
  TiktokIcon,
} from '../icons';

export const Footer = () => {
  return (
    <section className="lg:px-24 md:px-16 px-10 py-10 w-full">
      <footer className="flex items-start gap-5 max-sm:flex-wrap justify-between w-full">
        <div className="flex flex-col px-3">
          <h1 className="italic text-pink-800 font-bold">_belle_beauty_</h1>
          <div className="flex items-start gap-3 p-3">
            <a href={'#'}>
              <WhatsappIcon />
            </a>
            <a href={'#'}>
              <TiktokIcon />
            </a>
            <a href={'#'}>
              <FaceBookIcon />
            </a>
            <a href={'#'}>
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl text-brown-800">Services</h2>
          <ul className="space-y-1">
            <li>Hair braiding</li>
            <li>Lash Extensions</li>
            <li>Nails</li>
            <li>Makeup</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-2xl text-brown-800">Contact</h2>
          <ul className="space-y-1">
            <li>+260 678 901 235</li>
            <li>name@mail.com</li>
            <li>Plot 99, Some road, Lusaka</li>
            <li className="font-bold">Mon-Sat</li>
            <li>8am to 6pm</li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
