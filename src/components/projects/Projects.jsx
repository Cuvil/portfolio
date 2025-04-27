import { motion } from 'framer-motion';
import './Project.css';
import ObsoleteLinkAlert from '../ObsoleteLinkAlert';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import senamhiImage from '../../assets/img/web-senamhi.png';
import ecomerce from '../../assets/img/ecomerce.png';
import portafolio from '../../assets/img/3d-portafolio.png';
import clima from '../../assets/img/web-clima.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const projects = [
  {
    title: "Sistema de Monitoreo Hidrometeorológico",
    tech: "React, Chart.js, API REST, CSS Modules",
    description: "Dashboard en tiempo real que consume API del SENAMHI Iquitos para visualizar datos meteorológicos con gráficos interactivos.",
    features: [
      "Visualización de datos en tiempo real",
      "Gráficos interactivos con Chart.js",
      "Diseño responsive para dispositivos móviles",
      "Filtros avanzados de datos"
    ],
    github: "https://github.com/Cuvil/map-d3-react",
    liveDemo: "https://senamhidz8.org.pe/",
    image: senamhiImage
  },
  {
    title: "Portafolio Interactivo 3D",
    tech: "React, Three.js, Framer Motion, WebGL",
    description: "Experiencia inmersiva que muestra mis proyectos en un espacio 3D interactivo con realidad aumentada.",
    features: [
      "Navegación espacial 360°",
      "Visualización de proyectos en 3D",
      "Integración con GitHub API",
      "Modo VR compatible (WebXR)"
    ],
    github: "https://github.com/tuusuario/portfolio-3d",
    liveDemo: "#",
    image: portafolio
  },
  {
    title: "E-commerce Moderno",
    tech: "React, Redux Toolkit, Tailwind CSS, Stripe API",
    description: "Plataforma de comercio electrónico con carrito de compras y pasarela de pagos.",
    features: [
      "Carrito de compras persistente",
      "Integración con Stripe",
      "Búsqueda y filtrado de productos",
      "Reviews y valoraciones"
    ],
    github: "https://github.com/tuusuario/ecomerce",
    liveDemo: "#",
    image: ecomerce
  },
  {
    title: "Aplicación de Clima Global",
    tech: "React, OpenWeather API, Geolocation API",
    description: "Aplicación que muestra pronóstico del tiempo basado en ubicación con mapas interactivos.",
    features: [
      "Detección automática de ubicación",
      "Pronóstico a 5 días",
      "Mapas meteorológicos interactivos",
      "Modo offline básico"
    ],
    github: "https://github.com/tuusuario/weather-app",
    liveDemo: "#",
    image: clima
  }
];

const Projects = () => {
  const [showAlertIndex, setShowAlertIndex] = useState(null);

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Proyectos Destacados
      </motion.h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="project-image-container">
              <div 
                className="project-image"
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center'
                }}
              />
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Características:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-links">
  {/* Botón GitHub - siempre visible pero deshabilitado si es '#' */}
  <button
    onClick={() => {
      if (project.github !== '#') {
        window.open(project.github, '_blank');
      }
    }}
    className="project-link"
    style={{
      cursor: project.github !== '#' ? 'pointer' : 'default',
      opacity: project.github !== '#' ? 1 : 0.6
    }}
    disabled={project.github === '#'}
  >
    <FaGithub /> Código
    {project.github === '#' && <span style={{fontSize: '0.8em'}}> (No disponible)</span>}
  </button>

  {/* Botón Demo */}
  {project.liveDemo === '#' ? (
  <ObsoleteLinkAlert />
) : project.liveDemo.startsWith('http') ? (
  <a
    href={project.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    <FaExternalLinkAlt /> Demo
  </a>
) : (
  <Link 
    to={project.liveDemo}
    className="project-link"
  >
    <FaExternalLinkAlt /> Demo
  </Link>
)}

</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;