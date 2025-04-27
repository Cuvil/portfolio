import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import Projects from './components/projects/Projects'; // Nueva ruta
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Puedes añadir más rutas de proyectos específicos aquí */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;