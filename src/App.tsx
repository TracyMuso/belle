import './index.css';
import Header from './components/layout/header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/testimonials';

function App() {
  return (
    <>
      <div className="max-w-[1536px]">
        <Header />
        <Hero />
        <Services />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
