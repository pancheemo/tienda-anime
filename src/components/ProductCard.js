import React, { useState } from 'react';

const ProductCard = ({ name, price, img, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img
          src={img}
          alt={name}
          style={{
            ...styles.image,
            ...(isHovered ? styles.imageHover : {}),
          }}
        />
        {isHovered && (
          <div style={styles.nameOverlay}>
            <h3>{name}</h3> {/* Mostrar nombre al hacer hover */}
          </div>
        )}
        <div style={styles.overlay}>
          <p>Precio: ${price}</p>
        </div>
      </div>
      <button style={styles.button} onClick={onAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0',
    textAlign: 'center',
    width: '250px',
    height: '350px',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
  nameOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    opacity: 1,
    transition: 'opacity 0.3s ease',
  },
  button: {
    backgroundColor: '#6f42c1',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  imageHover: {
    transform: 'scale(1.1)',
  },
};

export default ProductCard;
