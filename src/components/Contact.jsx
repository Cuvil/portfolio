import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [selectedLang, setSelectedLang] = useState('');
  const [formStatus, setFormStatus] = useState(null); // Track submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_f0er0ct'; // Replace with your EmailJS Service ID
    const templateID = 'template_crjasad'; // Replace with your EmailJS Template ID
    const publicKey = 'ayN5z2iFUGUm2pKBy'; // Replace with your EmailJS Public Key

    // Send email via EmailJS
    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        setTimeout(() => setFormStatus(null), 5000); // Clear message after 5s
      }, (error) => {
        setFormStatus('error');
        setTimeout(() => setFormStatus(null), 5000); // Clear message after 5s
      });
  };

  return (
    <motion.section
      className="contact-section"
      style={{ paddingTop: '6rem' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className="contact-title"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🌌 Conecta Conmigo
      </motion.h2>

      <p className="contact-intro">
        ¿Tienes un proyecto en mente o simplemente quieres saludar? <br />
        ¡Estoy disponible para colaborar!
      </p>

      <motion.form
        className="contact-form"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto (opcional)"
          value={formData.subject}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Enviar Mensaje</button>

        {formStatus === 'success' && (
          <p style={{ color: '#00ff00', marginTop: '1rem' }}>
            ¡Mensaje enviado con éxito! 🚀
          </p>
        )}
        {formStatus === 'error' && (
          <p style={{ color: '#ff0000', marginTop: '1rem' }}>
            Error al enviar el mensaje. Por favor, intenta de nuevo.
          </p>
        )}
      </motion.form>

      <motion.div
        className="contact-methods"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
          <FaGithub className="icon" />
          <a href="https://github.com/Cuvil?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
        </motion.div>

        <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/oscar-luis-cumapa-vilchez-456204327/" target="_blank" rel="noreferrer">LinkedIn</a>
        </motion.div>

        <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
          <FaEnvelope className="icon" />
          <span>oscar.luiscumapa11@gmail.com</span>
        </motion.div>

        <motion.div className="contact-item" whileHover={{ scale: 1.05 }}>
          <FaFileDownload className="icon" />
          <div>
            <label htmlFor="cv-lang">Descargar CV:</label>
            <select
              id="cv-lang"
              onChange={(e) => setSelectedLang(e.target.value)}
              value={selectedLang}
              style={{
                marginLeft: '0.5rem',
                backgroundColor: '#0f0f3e',
                color: '#fff',
                border: '1px solid #94b3fd',
                borderRadius: '6px',
                padding: '0.4rem'
              }}
            >
              <option value="">-- Idioma --</option>
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>

            {selectedLang && (
              <a
                href={selectedLang === 'es' ? '/cv/cv-es.pdf' : '/cv/cv-en.pdf'}
                download
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Descargar CV
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="galaxy-glow"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
    </motion.section>
  );
};

export default Contact;