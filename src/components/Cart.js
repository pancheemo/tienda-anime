import React, { useEffect, useState } from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const [purchaseMessage, setPurchaseMessage] = useState('');

  // Obtener el carrito desde localStorage
  const obtenerCarrito = () => {
    let carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
  };

  // Guardar el carrito en localStorage
  const guardarCarrito = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };

  // Cargar los productos del carrito al iniciar
  useEffect(() => {
    const carrito = obtenerCarrito();
    setCartItems(carrito);
  }, []);

  // Función para manejar la compra
  const handlePurchase = () => {
    setPurchaseMessage('¡Compra completada!');
    vaciarCarrito(); // Vacía el carrito al finalizar la compra
  };

  // Función para eliminar un producto del carrito
  const eliminarProducto = (index) => {
    const nuevoCarrito = cartItems.filter((_, i) => i !== index);
    setCartItems(nuevoCarrito);
    guardarCarrito(nuevoCarrito);
    mostrarMensaje('Producto eliminado del carrito.');
  };

  // Vaciar el carrito completamente
  const vaciarCarrito = () => {
    setCartItems([]);
    guardarCarrito([]);
    mostrarMensaje('El carrito ha sido vaciado.');
  };

  // Mostrar mensajes al usuario
  const mostrarMensaje = (mensaje) => {
    setPurchaseMessage(mensaje);
    setTimeout(() => {
      setPurchaseMessage('');
    }, 3000);
  };

  return (
    <div style={styles.cartContainer}>
      <h2>Carrito de Compras</h2>
      {purchaseMessage && <p>{purchaseMessage}</p>}
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

// Estilos
const styles = {
  cartContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '20px 0',
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

export default Cart;
