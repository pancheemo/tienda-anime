import React, { useEffect, useState } from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const [purchaseMessage, setPurchaseMessage] = useState('');

  const obtenerCarrito = () => JSON.parse(localStorage.getItem('carrito')) || [];
  const guardarCarrito = (carrito) => localStorage.setItem('carrito', JSON.stringify(carrito));

  useEffect(() => {
    setCartItems(obtenerCarrito());
  }, [setCartItems]);

  const handlePurchase = () => {
    setPurchaseMessage('¡Compra realizada!');
    setTimeout(() => {
      vaciarCarrito();
    }, 2000);
  };

  const eliminarProducto = (index) => {
    const nuevoCarrito = cartItems.filter((_, i) => i !== index);
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

  return (
    <div style={styles.cartContainer}>
      <h2>Carrito de Compras</h2>
      {purchaseMessage && <div style={styles.message}>{purchaseMessage}</div>}
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => eliminarProducto(index)} style={styles.deleteButton}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <button onClick={handlePurchase} style={styles.purchaseButton}>
            Comprar
          </button>
          <button onClick={vaciarCarrito} style={styles.clearButton}>
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '20px 0',
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
  purchaseButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  clearButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    marginLeft: '10px',
  },
  deleteButton: {
    padding: '5px',
    backgroundColor: '#ffc107',
    color: '#000',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

const stylesAnimation = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${stylesAnimation}</style>`);

export default Cart;
