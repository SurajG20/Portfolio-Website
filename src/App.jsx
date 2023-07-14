import Contact from './layout/Contact';
import Navbar from './components/Navbar';
import About from './layout/About';
import Home from './layout/Home';
import Projects from './layout/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from './themeProvider';

function App() {
  return (
    <ThemeProvider>
      <>
        <div>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
