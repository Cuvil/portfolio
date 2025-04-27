import Swal from 'sweetalert2';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ObsoleteLinkAlert = ({ label = "Demo" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '⚠️ Demo no disponible',
      text: 'La demostración de este proyecto no está disponible actualmente.',
      icon: 'warning',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
    });
  };

  return (
    <button 
      onClick={handleClick}
      className="project-link"
      style={{ 
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: '#007bff',
        textDecoration: 'underline'
      }}
    >
      <FaExternalLinkAlt /> {label}
    </button>
  );
};

export default ObsoleteLinkAlert;
