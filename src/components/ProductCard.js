import React, { useState } from 'react';

const ProductCard = ({ name, price, img, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddToCart = () => {
    onAddToCart();
    setSuccessMessage('¡Añadido con éxito!');
    setTimeout(() => {
      setSuccessMessage(''); // Ocultar el mensaje después de 3 segundos
    }, 3000);
  };

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
        <div style={styles.overlay}>
          <h3>{name}</h3>
          <p>Precio: ${price}</p>
        </div>
      </div>
      <button style={styles.button} onClick={handleAddToCart}>
        Agregar al carrito
        {successMessage && <div style={styles.successMessage}>{successMessage}</div>} {/* Mensaje de éxito */}
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
  button: {
    backgroundColor: '#6f42c1',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
    position: 'relative',
  },
  successMessage: {
    position: 'absolute',
    top: '-20px', // Posición sobre el botón
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    color: '#28a745', // Color verde
    opacity: 0.8,
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  imageHover: {
    transform: 'scale(1.1)',
  },
  overlayHover: {
    opacity: 1,
  },
};

export default ProductCard;
