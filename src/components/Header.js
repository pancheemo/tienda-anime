import React from 'react';
import headerImage from '../img/header.jpg';

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={headerImage} alt="Header" style={styles.image} />
      <div style={styles.welcome}>
        <h1>Bienvenidos a Hajime</h1>
        <p>Página dedicada al anime de culto JoJo's Bizarre Adventure</p>
      </div>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    position: 'relative',
    height: '500px', // Ajusta la altura del header según tu preferencia
    overflow: 'hidden', // Evita que se vea más allá de la altura definida
  },
  image: {
    width: '100%',
    height: '100%', // Hace que la imagen ocupe todo el contenedor
    objectFit: 'cover', // Asegura que la imagen cubra el área sin recortarse
  },
  welcome: {
    position: 'absolute',
    top: '30%', // Ajusta la posición vertical según sea necesario
    left: '50%',
    transform: 'translate(-50%, -50%)', // Centra el texto
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que el texto resalte
  },
};

export default Header;