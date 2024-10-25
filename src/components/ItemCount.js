import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const addToCart = () => {
    onAdd(count);
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
        style={styles.addButton} 
        disabled={stock === 0}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  },
};

export default ItemCount;
