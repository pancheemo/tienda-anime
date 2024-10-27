import React, { useState, useEffect } from 'react';

const ItemCount = ({ stock, initial, onAdd, cartQuantity = 0, onQuantityChange }) => {
  const [count, setCount] = useState(initial);
  const [remainingStock, setRemainingStock] = useState(stock - cartQuantity);

  useEffect(() => {
    setRemainingStock(stock - cartQuantity);
  }, [cartQuantity, stock]);

  useEffect(() => {
    onQuantityChange(count);
  }, [count, onQuantityChange]);

  const increase = () => {
    if (count < remainingStock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    if (count <= remainingStock) {
      onAdd(count);
      setRemainingStock(remainingStock - count);
      setCount(1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.counter}>
        <button onClick={decrease} style={styles.button}>-</button>
        <span style={styles.count}>{count}</span>
        <button 
          onClick={increase} 
          style={styles.button} 
          disabled={count >= remainingStock}
        >
          +
        </button>
      </div>
      <button 
        onClick={addToCart} 
        style={{ ...styles.addButton, opacity: remainingStock ? 1 : 0.5 }} 
        disabled={remainingStock === 0}
      >
        {remainingStock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
      {remainingStock === 0 && (
        <p style={styles.outOfStockMessage}>Sin stock</p>
      )}
    </div>
  );
};

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
    color: 'red',
    marginTop: '10px',
  },
};

export default ItemCount;
