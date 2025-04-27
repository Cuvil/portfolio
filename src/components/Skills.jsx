import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React', icon: <FaReact size={40} />, level: 90, color: '#61DAFB' },
    { name: 'JavaScript', icon: <FaJs size={40} />, level: 85, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, level: 75, color: '#3178C6' },
    { name: 'Next.js', icon: <SiNextdotjs size={40} />, level: 80, color: '#000000' },
    { name: 'Node.js', icon: <FaNodeJs size={40} />, level: 70, color: '#68A063' },
    { name: 'CSS3', icon: <FaCss3Alt size={40} />, level: 88, color: '#2965F1' },
    { name: 'Git', icon: <FaGitAlt size={40} />, level: 83, color: '#F05032' },
    { name: 'Firebase', icon: <SiFirebase size={40} />, level: 65, color: '#FFCA28' },
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Mis Habilidades
      </motion.h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-level-bar">
              <motion.div
                className="skill-level-fill"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                style={{ backgroundColor: skill.color }}
              />
              <span className="skill-percent">{skill.level}%</span>
            </div>
            {hoveredSkill === skill.name && (
              <motion.div
                className="skill-tooltip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {skill.name} - {skill.level}% de dominio
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;