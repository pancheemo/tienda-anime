import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ onToggleCart }) => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Tienda Anime</h1>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
            Inicio
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/category/mangas" style={styles.link} activeStyle={styles.activeLink}>
            Mangas
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/category/peluches" style={styles.link} activeStyle={styles.activeLink}>
            Peluches
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/category/funkos" style={styles.link} activeStyle={styles.activeLink}>
            Funkos
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/category/posters" style={styles.link} activeStyle={styles.activeLink}>
            Posters
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/category/ropa" style={styles.link} activeStyle={styles.activeLink}>
            Ropa
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/category/accesorios" style={styles.link} activeStyle={styles.activeLink}>
            Accesorios
          </NavLink>
        </li>
      </ul>
      <div onClick={onToggleCart} style={styles.cartContainer}>
        <CartWidget />
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#6f42c1',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  title: {
    margin: 0,
    fontSize: '1.5em',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  menuItem: {
    marginLeft: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    transition: 'color 0.3s ease',
  },
  activeLink: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  cartContainer: {
    cursor: 'pointer',
  },
};

export default NavBar;
