import React, { useState } from 'react'; 

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [outOfStock, setOutOfStock] = useState(false); // Estado para manejar el mensaje de sin stock

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
      setOutOfStock(false); // Reiniciar el mensaje de sin stock
    }
  };
  
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  const addToCart = () => {
    if (count <= stock) {
      onAdd(count);
      if (count === stock) {
        setOutOfStock(true); // Mostrar mensaje de sin stock si se alcanza el máximo
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.counter}>
        <button onClick={decrease} style={styles.button}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={increase} style={styles.button}>+</button>
      </div>
      <button 
        onClick={addToCart} 
        style={{ ...styles.addButton, opacity: stock ? 1 : 0.5 }} 
        disabled={stock === 0}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
      {outOfStock && (
        <p style={styles.outOfStockMessage}>Sin stock</p> // Mensaje de sin stock
      )}
    </div>
  );
};

// Estilos
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#6f42c1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
  count: {
    width: '30px',
    textAlign: 'center',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  },
  outOfStockMessage: {
    color: 'red', // Color rojo para el mensaje de sin stock
    marginTop: '10px',
  },
};

export default ItemCount;
