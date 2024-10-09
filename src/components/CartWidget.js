import React from 'react';

const CartWidget = () => {
  return (
    <div style={styles.cart}>
      🛒 3
    </div>
  );
};

const styles = {
  cart: {
    backgroundColor: '#f39c12',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
  }
};

export default CartWidget;
