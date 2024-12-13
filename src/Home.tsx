import './index.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/testimonials';
import ImageGallery from './components/gallery/gallery';
import Contact from './components/contact';
import Footer from './components/layout/footer';

function Home() {
  return (
    <>
      <div className="max-w-[1536px]">
        <Hero />
        <Services />
        <Testimonials />
        <ImageGallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
