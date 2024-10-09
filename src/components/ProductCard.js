import React, { useState } from 'react';

const ProductCard = ({ name, price, img }) => {
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
        <div
          style={{
            ...styles.overlay,
            ...(isHovered ? styles.overlayHover : {}),
          }}
        >
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
    padding: '0', // Eliminamos padding para maximizar el espacio de la imagen
    textAlign: 'center',
    width: '250px',  // Tamaño de la tarjeta
    height: '350px',  // Altura fija para la tarjeta
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    margin: '20px', // Espacio de 20px entre tarjetas
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Espacia elementos
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    flexGrow: 1, // Permite que el contenedor de imagen ocupe espacio
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Asegura que la imagen cubra el contenedor
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
    backgroundColor: '#6f42c1', // Color violeta
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%', // Botón ocupa el ancho completo
  },
  cardHover: {
    transform: 'scale(1.05)', // Efecto de escala al pasar el mouse
  },
  imageHover: {
    transform: 'scale(1.1)', // Aumento de escala en la imagen
  },
  overlayHover: {
    opacity: 1,
  },
};

export default ProductCard;
