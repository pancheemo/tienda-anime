import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({ onToggleCart }) => {
  return (
    <nav style={styles.nav}>
      <h1>Tienda Anime</h1>
      <ul style={styles.menu}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <div onClick={onToggleCart} style={{ cursor: 'pointer' }}>
        <CartWidget />
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#6f42c1', // Asegúrate de que el color coincida
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
  },
  menuItem: {
    marginLeft: '15px',
  },
};

export default NavBar;
