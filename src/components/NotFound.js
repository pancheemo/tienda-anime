import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/" style={styles.link}>Volver a la página de inicio</a>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    textAlign: 'center',
    margin: '50px',
  },
  link: {
    color: '#6f42c1',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default NotFound;
