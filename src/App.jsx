import Contact from './views/Contact';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import Projects from './views/Projects';
import Footer from './views/Footer';
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
