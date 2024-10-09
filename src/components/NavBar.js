import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Tienda Anime</h1>
      <ul style={styles.menu}>
        <li style={styles.menuItem}><a href="/">Inicio</a></li>
        <li style={styles.menuItem}><a href="/productos">Productos</a></li>
        <li style={styles.menuItem}><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#6f42c1', // Color violeta
    padding: '15px', // Espacio alrededor
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Sombra sutil
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    padding: 0, // Eliminar padding por defecto
    margin: 0, // Eliminar margen por defecto
  },
  menuItem: {
    marginLeft: '20px', // Espacio entre los elementos del menú
  },
  link: {
    color: '#fff', // Color de los enlaces
    textDecoration: 'none', // Sin subrayado
    transition: 'color 0.3s', // Transición para el cambio de color
  },
  linkHover: {
    color: '#f8d7da', // Color al pasar el mouse (puedes ajustarlo)
  },
};

export default NavBar;
