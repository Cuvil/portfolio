import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';

import Home from './components/Hero';
import Projects from './components/projects/Projects';
import About from './components/About';
import Contact from './components/Contact';

// Este es el componente que deseas mostrar en la ruta "/portfolio"
function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        ¡Hola! Soy <span style={{ color: '#ffd700' }}>OscarDev</span>
      </h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
        Bienvenido a mi portafolio. Soy un desarrollador frontend apasionado por crear experiencias increíbles en la web.
      </p>
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} /> {/* Ruta para /portfolio */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
