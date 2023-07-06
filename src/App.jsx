import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col px-8 xl:pl-24">
        <Home />
        <div className="flex flex-col gap-16 xl:gap-24 md:mr-16 xl:mr-32">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
