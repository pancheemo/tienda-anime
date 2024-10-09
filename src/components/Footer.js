import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importa los íconos

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h4 style={styles.title}>Síguenos en nuestras redes sociales:</h4>
      <ul style={styles.socialList}>
        <li style={styles.socialItem}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaTwitter size={24} /> {/* Ícono de Twitter */}
          </a>
        </li>
        <li style={styles.socialItem}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaInstagram size={24} /> {/* Ícono de Instagram */}
          </a>
        </li>
        <li style={styles.socialItem}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaFacebook size={24} /> {/* Ícono de Facebook */}
          </a>
        </li>
      </ul>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#6f42c1', // Color violeta, igual que el navbar
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'relative',
  },
  title: {
    margin: '0 0 10px 0',
  },
  socialList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  socialItem: {
    margin: '0 15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem', // Aumenta el tamaño del ícono
    transition: 'color 0.3s',
  },
};

export default Footer;
