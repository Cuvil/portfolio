import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaCode, FaUserAstronaut, FaComments, FaTimes, FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para cambio de color al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', name: 'Inicio', icon: <FaRocket /> },
    { path: '/about', name: 'Acerca de', icon: <FaUserAstronaut /> },
    { path: '/projects', name: 'Proyectos', icon: <FaCode /> },
    
    { path: '/contact', name: 'Contacto', icon: <FaComments /> }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.div 
          className="logo"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <span>{"<OscarDev />"}</span>
        </motion.div>

        {/* Menú para desktop */}
        <div className="nav-links desktop">
          {navLinks.map((link) => (
            <div 
              key={link.path} 
              className="nav-item"
              onMouseEnter={() => setHoveredLink(link.path)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link to={link.path} className="nav-link">
                <span className="nav-icon">{link.icon}</span>
                {link.name}
                <motion.div
                  className="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: hoveredLink === link.path || location.pathname === link.path ? 1 : 0,
                    backgroundColor: hoveredLink === link.path ? '#00ffff' : '#ff00ff'
                  }}
                  transition={{ type: 'spring', stiffness: 500 }}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Botón hamburguesa para móvil */}
        <button 
          className="hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </button>

        {/* Menú móvil con animación */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-icon">{link.icon}</span>
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      className="mobile-underline"
                      layoutId="mobile-underline"
                    />
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Efecto de partículas */}
        <AnimatePresence>
          {hoveredLink && (
            <motion.div
              className="particle-effect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;