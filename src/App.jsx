import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col px-8 xl:pl-24">
        <Home />
        <div className="flex flex-col gap-16 xl:gap-24 md:mr-16 xl:mr-32">
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
