import React, { useEffect, useState } from 'react';
import products from './products';

const Cart = ({ cartItems, setCartItems }) => {
  const [purchaseMessage, setPurchaseMessage] = useState('');

  const obtenerCarrito = () => JSON.parse(localStorage.getItem('carrito')) || [];
  const guardarCarrito = (carrito) => localStorage.setItem('carrito', JSON.stringify(carrito));

  useEffect(() => {
    setCartItems(obtenerCarrito());
  }, [setCartItems]);

  const handlePurchase = () => {
    setPurchaseMessage('¡Compra realizada!');
    setTimeout(() => vaciarCarrito(), 2000);
  };

  const eliminarProducto = (productId) => {
    const nuevoCarrito = cartItems.filter((item) => item.id !== productId);
    setCartItems(nuevoCarrito);
    guardarCarrito(nuevoCarrito);
    mostrarMensaje('Producto eliminado del carrito.');
  };

  const vaciarCarrito = () => {
    setCartItems([]);
    guardarCarrito([]);
    mostrarMensaje('El carrito ha sido vaciado.');
  };

  const mostrarMensaje = (mensaje) => {
    setPurchaseMessage(mensaje);
    setTimeout(() => setPurchaseMessage(''), 3000);
  };

  const actualizarCantidad = (productId, nuevaCantidad) => {
    const producto = products.find((p) => p.id === productId);
    if (nuevaCantidad <= producto.stock && nuevaCantidad > 0) {
      const nuevoCarrito = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: nuevaCantidad } : item
      );
      setCartItems(nuevoCarrito);
      guardarCarrito(nuevoCarrito);
    } else {
      mostrarMensaje(`No hay suficiente stock disponible. Máximo: ${producto.stock}`);
    }
  };

  const totalAPagar = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.title}>Carrito de Compras</h2>
      {purchaseMessage && <div style={styles.message}>{purchaseMessage}</div>}
      {cartItems.length === 0 ? (
        <p style={styles.emptyCartMessage}>El carrito está vacío.</p>
      ) : (
        <ul style={styles.itemList}>
          {cartItems.map((item) => (
            <li key={item.id} style={styles.item}>
              <span style={styles.itemDetails}>
                {item.name} - {formatPrice(item.price)} x{' '}
                <input
                  type="number"
                  min="1"
                  max={products.find((p) => p.id === item.id).stock}
                  value={item.quantity}
                  onChange={(e) =>
                    actualizarCantidad(item.id, parseInt(e.target.value, 10))
                  }
                  style={styles.quantityInput}
                />{' '}
                = {formatPrice(item.price * item.quantity)}
              </span>
              <button
                onClick={() => eliminarProducto(item.id)}
                style={styles.deleteButton}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div style={styles.totalContainer}>
          <h3 style={styles.totalText}>
            Total a pagar:{' '}
            <span style={styles.totalAmount}>{formatPrice(totalAPagar)}</span>
          </h3>
          <div style={styles.buttonContainer}>
            <button onClick={handlePurchase} style={styles.purchaseButton}>
              Comprar
            </button>
            <button onClick={vaciarCarrito} style={styles.clearButton}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '20px 0',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: '0.3s',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  },
  message: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px 0',
    textAlign: 'center',
    animation: 'fadeIn 0.5s',
  },
  emptyCartMessage: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
  itemDetails: {
    flexGrow: 1,
    fontFamily: 'Arial, sans-serif',
  },
  quantityInput: {
    width: '50px',
    marginLeft: '10px',
    textAlign: 'center',
  },
  totalContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  totalText: {
    fontSize: '1.2em',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  totalAmount: {
    fontWeight: 'bold',
    color: '#28a745',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  purchaseButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'background-color 0.3s',
  },
  clearButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ffc107',
    color: '#000',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Cart;
