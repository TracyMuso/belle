import {
  FaceBookIcon,
  WhatsappIcon,
  InstagramIcon,
  TiktokIcon,
} from '../icons';

export const Footer = () => {
  return (
    <section>
      <footer>
        <div>
          <h1>_belle_</h1>
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
          <h2>Services</h2>
          <ul>
            <li>Hair braiding</li>
            <li>Lash Extensions</li>
            <li>Nails</li>
            <li>Makeup</li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>+260 678 901 235</li>
            <li>name@mail.com</li>
            <li>Plot 99, Some road, Lusaka</li>
            <li>Mon-Sat</li>
            <li>8am to 6pm</li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
