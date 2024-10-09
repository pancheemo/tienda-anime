import React from 'react';

const ProductCard = ({ name, price, img }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={img} alt={name} style={styles.image} />
        <div style={styles.overlay}>
          <h3>{name}</h3>
          <p>Precio: ${price}</p>
        </div>
      </div>
      <button style={styles.button}>Agregar al carrito</button>
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    width: '200px',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  cardHover: {
    transform: 'scale(1.1)',
  },
  imageHover: {
    transform: 'scale(1.2)',
  },
  overlayHover: {
    opacity: 1,
  },
};

export default ProductCard;
