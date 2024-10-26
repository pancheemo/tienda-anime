import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from './products';

const LoadingSpinner = () => {
  return (
    <div style={combinedStyles.loader}>
      <p>Cargando...</p>
      <div style={combinedStyles.spinner}></div>
    </div>
  );
};

const combinedStyles = {
  loader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontSize: '24px',
  },
  spinner: {
    border: '8px solid #f3f3f3',
    borderTop: '8px solid #3498db',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  },
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyItems: 'center',
  },
  loadMoreButton: {
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#6f42c1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

const ItemListContainer = ({ onAddToCart }) => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const filtered = category
        ? products.filter(product => product.category === category)
        : products;
      setFilteredProducts(filtered);
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  return (
    <div style={combinedStyles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2 style={{ marginBottom: '20px' }}>Productos</h2>
          <div style={combinedStyles.productList}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                stock={product.stock}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
