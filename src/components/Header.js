import React from 'react';

const Header = () => {
  return (
    <div style={{ ...styles.header, backgroundImage: 'url(/img/header.jpg)' }}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Hajime</h1>
        <p style={styles.subtitle}>Página dedicada al anime de culto JoJo's Bizarre Adventure</p>
      </div>
    </div>
  );
};

const styles = {
  header: {
    position: 'relative',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    fontSize: '4rem',
    margin: '0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '20px 0 0 0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  },
};

export default Header;
