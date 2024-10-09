import React, { useState } from 'react';

const Cart = ({ cartItems }) => {
  const [purchaseMessage, setPurchaseMessage] = useState(''); // Estado para el mensaje de compra

  // Función para manejar la compra
  const handlePurchase = () => {
    setPurchaseMessage('¡Compra completada!'); // Establecer el mensaje de compra
    // Aquí puedes agregar lógica adicional para procesar la compra, como llamar a una API
  };

  return (
    <div style={styles.cartContainer}>
      <h2>Carrito de Compras</h2>
      {purchaseMessage && <p>{purchaseMessage}</p>} {/* Mostrar el mensaje si existe */}
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={handlePurchase} style={styles.purchaseButton}>
          Comprar
        </button>
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
    backgroundColor: '#28a745', // Color verde
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Cart;
