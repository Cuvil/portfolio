import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true, margin: "-100px" }}
      data-tech={project.tech}
    >
      <div className="project-image-container">
        <img 
          src={`/images/${project.image}`} 
          alt={project.title}
          className="project-image"
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
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub /> Código
          </a>
          <a href={project.liveDemo} className="project-link">
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;