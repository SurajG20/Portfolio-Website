import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div className="px-8 sm:px-12 md:px-24 lg:px-48 xl:px-72 bg-gray-1000">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
