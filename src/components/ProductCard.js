import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

const ProductCard = ({ id, name, price, img, stock, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);


  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity, price]);

  const handleAddToCart = (qty) => {
    if (qty <= stock && qty > 0) {
      const productToAdd = { id, name, price, quantity: qty };
      onAddToCart(productToAdd);
    } else {
      alert('No hay suficiente stock disponible o cantidad no válida.');
    }
  };

  const handleQuantityChange = (qty) => {
    setQuantity(qty);
  };

  const formatPrice = (amount) => {
    return amount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
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
        {isHovered && (
          <div style={styles.nameOverlay}>
            <h3 style={styles.name}>{name}</h3>
          </div>
        )}
        <div style={styles.overlay}>
          <p style={styles.price}>
            Precio: <span>{formatPrice(price)}</span>
          </p>
          <p style={styles.totalPrice}>
            Total: <span>{formatPrice(totalPrice)}</span>
          </p>
        </div>
      </div>

      <ItemCount 
        stock={stock} 
        initial={1} 
        onAdd={handleAddToCart} 
        onQuantityChange={handleQuantityChange} 
      />
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '0',
    textAlign: 'center',
    width: '250px',
    height: '450px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px 10px 0 0',
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    opacity: 1,
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
  name: {
    fontSize: '18px',
    margin: '0',
    padding: '5px',
  },
  price: {
    margin: '5px 0',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  totalPrice: {
    margin: '5px 0',
    fontSize: '16px',
    color: '#ffcc00',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
  imageHover: {
    transform: 'scale(1.1)',
  },
};

export default ProductCard;
