import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { GridLoader, HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
       <div className='relative flex items-center justify-center w-full h-screen bg-black'>
       <HashLoader
         color={'#808080'}
         loading={loading}
         size={100}
       />
       <p className='text-white font-bold  mt-18 py-28 absolute z-10 opacity-25'>Portfolio</p>
     </div>
      ) : (
        <header>
          <NavBar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <SocialLinks />
        </header>
      )}
    </div>
  );
}

export default App;
