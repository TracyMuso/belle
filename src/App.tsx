import './index.css';
import Header from './components/layout/header';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <>
      <div className="max-w-[1536px]">
        <Header />
        <Hero />
        <Services />
      </div>
    </>
  );
}

export default App;
