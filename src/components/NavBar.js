// components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Importamos NavLink para navegación
import CartWidget from './CartWidget';

const NavBar = ({ onToggleCart }) => {
  return (
    <nav style={styles.nav}>
      <h1>Tienda Anime</h1>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
            Inicio
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink
            to="/category/mangas"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Mangas
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink
            to="/category/remeras"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Remeras
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink
            to="/category/peluches"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Peluches
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink
            to="/category/funkos"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Funkos
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink
            to="/category/posters"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Posters
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink
            to="/category/ropa"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Ropa
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink
            to="/category/accesorios"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Accesorios
          </NavLink>
        </li>
      </ul>
      <div onClick={onToggleCart} style={{ cursor: 'pointer' }}>
        <CartWidget />
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#6f42c1',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
  },
  menuItem: {
    marginLeft: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  activeLink: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default NavBar;
