import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { 
  FaCertificate, 
  FaGraduationCap, 
  FaMapMarkerAlt,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaServer,
  FaDatabase,
  FaCode,
  FaUserTie,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiGraphql,
  SiPostgresql,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';
import { TbApi, TbHeartCode } from 'react-icons/tb';
import './About.css'
const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const certifications = [
    {
      title: "Web Responsive Design",
      issuer: "freeCodeCamp",
      year: "2023",
      credential: "https://freecodecamp.org/certification/fccc071b194-ddab-4764-8a06-4e6ebb1d6054/responsive-web-design",
      icon: <FaCss3Alt className="card-icon" size={16} />
    },
    {
      title: "Frontend Development",
      issuer: "Platzi",
      year: "2023",
      credential: "#",
      icon: <FaReact className="card-icon" size={16} />
    }
  ];

  const frontendSkills = [
    { name: "React", icon: <FaReact className="skill-icon text-[#61DAFB]" size={18} />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="skill-icon text-[#F7DF1E]" size={18} />, level: 85 },
    { name: "TypeScript", icon: <SiTypescript className="skill-icon text-[#3178C6]" size={18} />, level: 75 },
    { name: "Next.js", icon: <SiNextdotjs className="skill-icon text-white" size={18} />, level: 70 },
    { name: "Redux", icon: <SiRedux className="skill-icon text-[#764ABC]" size={18} />, level: 80 },
    { name: "CSS/Tailwind", icon: <SiTailwindcss className="skill-icon text-[#38B2AC]" size={18} />, level: 85 },
    { name: "Framer Motion", icon: <SiFramer className="skill-icon text-[#0055FF]" size={18} />, level: 80 },
    { name: "Jest", icon: <SiJest className="skill-icon text-[#C21325]" size={18} />, level: 70 }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="skill-icon text-[#339933]" size={18} />, level: 75 },
    { name: "Express", icon: <SiExpress className="skill-icon text-white" size={18} />, level: 70 },
    { name: "GraphQL", icon: <SiGraphql className="skill-icon text-[#E535AB]" size={18} />, level: 65 },
    { name: "REST API", icon: <TbApi className="skill-icon text-[#5BC0EB]" size={18} />, level: 75 },
    { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon text-[#336791]" size={18} />, level: 65 },
    { name: "MongoDB", icon: <FaDatabase className="skill-icon text-[#47A248]" size={18} />, level: 60 }
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="skill-icon text-[#F05032]" size={18} />, level: 80 },
    { name: "Figma", icon: <FaFigma className="skill-icon text-[#F24E1E]" size={18} />, level: 75 },
    { name: "VS Code", icon: <FaCode className="skill-icon text-[#007ACC]" size={18} />, level: 90 },
    { name: "Terminal", icon: <FaServer className="skill-icon text-[#4D4D4D]" size={18} />, level: 70 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.4
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="about-section"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <motion.div 
          className="section-header"
          variants={itemVariants}
        >
          <h2 className="section-title">
            Sobre <span>Mí</span>
          </h2>
          <p className="section-subtitle">
            Desarrollador Frontend apasionado por crear experiencias digitales modernas, responsivas y visualmente impactantes.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="info-cards-container mb-12">
          {/* Tarjeta de presentación */}
          <motion.div
            className="info-card hover-effect card"
            variants={itemVariants}
          >
            <div className="card-header">
              <FaUserTie className="card-icon" />
              <h3>¿Quién soy?</h3>
            </div>
            <div className="card-content">
              <p>
                Soy un desarrollador frontend especializado en React y JavaScript, enfocado en interfaces modernas y experiencias de usuario fluidas.
              </p>
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div
            className="info-card hover-effect card"
            variants={itemVariants}
          >
            <div className="card-header">
              <FaGraduationCap className="card-icon" />
              <h3>Educación</h3>
            </div>
            <div className="card-content">
              <p className="font-medium text-cyan-400">SENATI</p>
              <p>Ing. Software con IA</p>
              <p className="date">2022 - 2024</p>
            </div>
          </motion.div>

          {/* Ubicación */}
          <motion.div
            className="info-card hover-effect card"
            variants={itemVariants}
          >
            <div className="card-header">
              <FaMapMarkerAlt className="card-icon" />
              <h3>Ubicación</h3>
            </div>
            <div className="card-content">
              <p>Iquitos, Perú</p>
              <div className="mt-4 h-48 rounded-lg overflow-hidden border border-gray-600/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.010363004684!2d-73.2477419250196!3d-3.745996996222548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e5a1e5e5a5a5a5%3A0x5a5a5a5a5a5a5a5!2sIquitos!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Enfoque */}
          <motion.div
            className="info-card hover-effect card"
            variants={itemVariants}
          >
            <div className="card-header">
              <FaLightbulb className="card-icon" />
              <h3>Mi enfoque</h3>
            </div>
            <div className="card-content">
              <p>
                Diseño y desarrollo con un equilibrio entre estética, funcionalidad y rendimiento, utilizando las últimas tecnologías.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Certificaciones */}
        <motion.div 
          className="certifications-container"
          variants={itemVariants}
        >
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h3 className="section-title">Mis <span>Certificaciones</span></h3>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card hover-effect card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2 }}
              >
                <div className="certification-header">
                  <h4>{cert.title}</h4>
                </div>
                <p className="issuer">{cert.issuer} • {cert.year}</p>
                <motion.a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Credencial
                  <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habilidades */}
        <motion.div 
          className="skills-sections"
          variants={itemVariants}
        >
          <div className="section-header">
            <TbHeartCode className="section-icon" />
            <h3 className="section-title">Todas mis <span>Habilidades</span></h3>
          </div>
          
          {/* Frontend Skills */}
          <div className="skills-section">
            <h3 className="text-center">Frontend</h3>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={`front-all-${index}`}
                  className="skill-card hover-effect card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {skill.icon}
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-progress">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      />
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skills-section">
            <h3 className="text-center">Backend</h3>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={`back-all-${index}`}
                  className="skill-card hover-effect card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {skill.icon}
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-progress">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      />
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skills-section">
            <h3 className="text-center">Herramientas</h3>
            <div className="skills-grid">
              {tools.map((skill, index) => (
                <motion.div
                  key={`tools-all-${index}`}
                  className="skill-card hover-effect card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {skill.icon}
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-progress">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      />
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filosofía de desarrollo */}
        <motion.div 
          className="info-cards-container"
          variants={itemVariants}
        >
          <div className="section-header">
            <h3 className="section-title">Mi Filosofía de <span>Desarrollo</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Diseño Centrado",
                description: "Interfaces intuitivas con UX/UI optimizadas para una experiencia de usuario excepcional.",
                icon: <FaFigma className="card-icon" size={18} />
              },
              {
                title: "Código Limpio",
                description: "Código mantenible y escalable siguiendo principios SOLID y buenas prácticas.",
                icon: <FaCode className="card-icon" size={18} />
              },
              {
                title: "Performance",
                description: "Aplicaciones optimizadas para velocidad y eficiencia, mejorando la experiencia del usuario.",
                icon: <FaRocket className="card-icon" size={18} />
              }
            ].map((item, index) => (
              <motion.div
                key={`philosophy-${index}`}
                className="info-card hover-effect card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2 }}
              >
                <div className="card-header">
                  {item.icon}
                  <h3>{item.title}</h3>
                </div>
                <div className="card-content">
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;