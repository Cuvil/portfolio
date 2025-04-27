import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useDragControls } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound";
import hoverSound from "../sounds/hover.mp3";

// Importar iconos
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiThreedotjs, SiFramer } from 'react-icons/si';

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [playHover] = useSound(hoverSound, { volume: 0.3 });
  const navigate = useNavigate();
  const dragControls = useDragControls();
  const constraintsRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const technologies = [
    { name: "React", level: 90, color: "#61DAFB", icon: <FaReact size={24} /> },
    { name: "JavaScript", level: 85, color: "#F7DF1E", icon: <FaJs size={24} /> },
    { name: "HTML5", level: 95, color: "#E34F26", icon: <FaHtml5 size={24} /> },
    { name: "CSS3", level: 90, color: "#1572B6", icon: <FaCss3Alt size={24} /> },
    { name: "Node.js", level: 75, color: "#339933", icon: <FaNodeJs size={24} /> },
    { name: "Three.js", level: 70, color: "#FFFFFF", icon: <SiThreedotjs size={24} /> },
    { name: "Git", level: 85, color: "#F05032", icon: <FaGitAlt size={24} /> },
    { name: "Framer Motion", level: 80, color: "#0055FF", icon: <SiFramer size={24} /> },
  ];

  // Efecto de inclinación con acelerómetro
  useEffect(() => {
    const handleDeviceOrientation = (e) => {
      if (e.beta && e.gamma) {
        setTilt({
          x: (e.gamma / 20) || 0,
          y: (e.beta / 40) || 0
        });
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
    
    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      }
    };
  }, []);

  // Efecto de rotación para el nombre
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x + 0.2,
        y: prev.y + 0.3
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    // Simular inclinación con mouse en desktop
    if (!window.DeviceOrientationEvent) {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setTilt({
        x: ((clientX - innerWidth / 2) / innerWidth) * 2,
        y: -((clientY - innerHeight / 2) / innerHeight) * 2
      });
    }
  };

  const [text, setText] = useState("");
  const fullText = "Desarrollador Frontend con React";
  const controls = useAnimation();
  const techControls = useAnimation();
  const buttonControls = useAnimation();
   
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 }
        });
        
        // Animación de caída con rebote para los iconos (en cámara lenta)
        techControls.start(i => ({
          opacity: [0, 1],
          y: [-100, 20, -10, 0], // Falling effect with bounce
          scale: [0.8, 1.1, 0.95, 1], // Scale for impact
          transition: { 
            delay: i * 0.15, // Staggered delay for cascading effect
            duration: 2.5, // Slower for slow-motion effect
            times: [0, 0.6, 0.8, 1], // Adjusted timing for smooth bounce
            type: "tween",
            ease: "easeOut"
          }
        })).then(() => {
          // Continuous floating effect after falling (en cámara lenta, como burbujas)
          techControls.start(i => ({
            y: [0, -5, 0], // Subtle floating motion like bubbles
            transition: {
              delay: i * 0.1,
              duration: 4, // Slower for slow-motion effect
              repeat: Infinity,
              repeatType: "loop",
              type: "tween",
              ease: "easeInOut"
            }
          }));
        });

        buttonControls.start({
          y: 0,
          opacity: 1,
          scale: [1, 1.05],
          transition: { 
            delay: 1.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }
        });
      }
    }, 100);
    
    return () => clearInterval(typing);
  }, [controls, techControls, buttonControls]);

  // Efecto palpitante continuo para el botón
  useEffect(() => {
    buttonControls.start({
      scale: [1, 1.15, 1], // More dramatic palpitating effect
      boxShadow: [
        "0 0 20px rgba(0, 255, 255, 0.7)",
        "0 0 40px rgba(255, 0, 255, 0.9)",
        "0 0 20px rgba(0, 255, 255, 0.7)"
      ], // Glowing pulse
      transition: {
        duration: 1.5, // Slower for striking effect
        repeat: Infinity,
        repeatType: "loop",
        type: "tween",
        ease: "easeInOut"
      }
    });

    return () => buttonControls.stop();
  }, [buttonControls]);

  // Función para manejar el arrastre de iconos
  const startDrag = (e) => {
    dragControls.start(e);
  };

  return (
    <section 
      className="hero" 
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(circle at center, #000000 0%, #130f40 100%)",
        paddingTop: "80px",
      }}
    >
      {/* Watermark con efecto de rebote, más pequeño */}
      <motion.div
        style={{
          position: "absolute",
          fontSize: "2.5rem",
          color: "rgba(255, 255, 255, 0.1)",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
          pointerEvents: "none",
          zIndex: 1,
          whiteSpace: "nowrap",
        }}
        animate={{
          x: [0, 100, -100, 0], // Bouncing horizontally
          y: [0, 50, -50, 0], // Bouncing vertically
        }}
        transition={{
          x: { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      >
        {text}
      </motion.div>

      <motion.div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "calc(100vh - 80px)",
          paddingTop: "2rem",
          transform: `perspective(1000px) rotateX(${tilt.y * 5}deg) rotateY(${tilt.x * 5}deg)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h1
          style={{
            fontSize: "3rem",
            margin: "1rem 0",
            textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
            background: "linear-gradient(90deg, #00ffff, #ff00ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            zIndex: 5 // Ensure it stays above icons
          }}
          animate={{
            textShadow: [
              "0 0 10px #00ffff, 0 0 20px #00ffff",
              "0 0 15px #ff00ff, 0 0 30px #ff00ff",
              "0 0 10px #00ffff, 0 0 20px #00ffff"
            ],
            rotate: [0, 5, -5, 0], // More pronounced rotation
            y: [0, -10, 0, 10, 0], // Wave-like motion
            translateX: tilt.x * 20, // Dynamic tilt effect
            translateY: tilt.y * 20
          }}
          transition={{
            textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            translateX: { duration: 0.1, ease: "easeOut" },
            translateY: { duration: 0.1, ease: "easeOut" }
          }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 20px #ff00ff, 0 0 40px #ff00ff"
          }}
          initial={{ y: -30 }}
        >
          Oscar Cumapa
        </motion.h1>

        {/* Contenedor de tecnologías con efecto de inclinación, más abajo */}
        <motion.div 
          ref={constraintsRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            maxWidth: "700px",
            margin: "3rem 0", // Increased margin to position icons lower
            position: "relative",
            minHeight: "200px",
            transform: `perspective(1000px) rotateX(${tilt.y * 3}deg) rotateY(${tilt.x * 3}deg) translateX(${tilt.x * 10}px) translateY(${tilt.y * 10}px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              drag
              dragControls={dragControls}
              dragConstraints={{ top: 0, bottom: 300, left: -300, right: 300 }} // Allow more downward drag
              dragElastic={0.2}
              whileDrag={{ scale: 1.2, zIndex: 4 }} // Below Oscar Cumapa
              onPointerDown={startDrag}
              style={{
                width: "75px",
                textAlign: "center",
                margin: "0.5rem 0",
                cursor: "grab",
                position: "relative",
                transform: `translateX(${tilt.x * 15}px) translateY(${tilt.y * 15}px)`,
                transition: "transform 0.1s ease-out"
              }}
              custom={index}
              initial={{ opacity: 0, y: -100 }}
              animate={techControls}
              whileHover={{
                y: -5, // Smooth lift on hover, no scale
                transition: { 
                  duration: 0.3,
                  type: "tween",
                  ease: "easeOut"
                }
              }}
            >
              <motion.div
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: `radial-gradient(circle at center, ${tech.color} 0%, #000 70%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 10px ${tech.color}`,
                  marginBottom: "0.3rem",
                  transform: `rotateX(${tilt.y * 10}deg) rotateY(${tilt.x * 10}deg)`,
                  transition: "transform 0.1s ease-out"
                }}
                whileHover={{ 
                  y: -5, // Smooth lift, no scale
                  boxShadow: `0 0 15px ${tech.color}`,
                  transition: { 
                    duration: 0.3,
                    type: "tween",
                    ease: "easeOut"
                  }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div style={{ 
                  color: "white",
                  transform: `rotateX(${-tilt.y * 10}deg) rotateY(${-tilt.x * 10}deg)`,
                  transition: "transform 0.1s ease-out"
                }}>
                  {tech.icon}
                </div>
              </motion.div>
              
              <motion.div
                style={{
                  height: "6px",
                  width: "100%",
                  background: "#333",
                  borderRadius: "5px",
                  marginTop: "0.3rem",
                  overflow: "hidden",
                  transform: `rotateX(${tilt.y * 5}deg) rotateY(${tilt.x * 5}deg)`,
                  transition: "transform 0.1s ease-out"
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    background: tech.color,
                    borderRadius: "5px",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ delay: 1 + index * 0.1, duration: 1 }}
                />
              </motion.div>
              
              <div style={{ 
                color: "white", 
                marginTop: "0.2rem",
                fontSize: "0.7rem",
                fontWeight: "bold",
                textShadow: `0 0 3px ${tech.color}`,
                transform: `rotateX(${tilt.y * 5}deg) rotateY(${tilt.x * 5}deg)`,
                transition: "transform 0.1s ease-out"
              }}>
                {tech.name} - {tech.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          style={{
            margin: "1rem 0 3rem 0",
            padding: "12px 35px",
            background: "linear-gradient(45deg, #00ffff, #ff00ff)",
            color: "#000",
            border: "none",
            fontSize: "1.1rem",
            cursor: "none",
            position: "relative",
            borderRadius: "50px",
            fontWeight: "bold",
            overflow: "hidden",
            zIndex: 1,
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
            transform: `perspective(1000px) rotateX(${tilt.y * 2}deg) rotateY(${tilt.x * 2}deg) translateX(${tilt.x * 5}px) translateY(${tilt.y * 5}px)`,
            transition: "transform 0.1s ease-out"
          }}
          animate={buttonControls}
          initial={{ opacity: 0, y: 20 }}
          whileHover={{
            boxShadow: "0 0 30px rgba(255, 0, 255, 0.7)",
            background: "linear-gradient(45deg, #ff00ff, #00ffff)",
            scale: 1.1,
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            playHover();
          }}
          onMouseLeave={() => setIsHovered(false)}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/projects')}
        >
          <span style={{ 
            position: "relative", 
            zIndex: 2,
            textShadow: "0 0 5px rgba(255,255,255,0.5)"
          }}>
            EXPLORAR PROYECTOS
          </span>
          <motion.span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)",
              zIndex: 1,
              transform: "translateX(-100%)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "linear"
            }}
          />
        </motion.button>
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #00ffff, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{
          x: cursorPos.x - 15,
          y: cursorPos.y - 15,
          scale: isHovered ? 2 : 1,
        }}
      />
    </section>
  );
};

export default Hero;