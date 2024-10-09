import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div style={styles.cartWidget}>
      🛒 {itemCount > 0 && <span>{itemCount}</span>}
    </div>
  );
};

const styles = {
  cartWidget: {
    position: 'relative',
    cursor: 'pointer',
    fontSize: '20px',
  },
};

export default CartWidget;
