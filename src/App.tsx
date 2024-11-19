import './index.css';
import Header from './components/layout/header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/testimonials';
import ImageGallery from './components/gallery';
import Modal from 'react-modal';
import Contact from './components/contact';
import Footer from './components/layout/footer';

// Set the app element for accessibility
Modal.setAppElement('#root');

function App() {
  return (
    <>
      <div className="max-w-[1536px]">
        <Header />
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

export default App;
