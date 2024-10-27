import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import products from './products';

const ItemDetailContainer = ({ onAddToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      await delay(1000);

      const productDetails = products.find(item => item.id === parseInt(productId));
      setProduct(productDetails);
      setLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div style={styles.container}>
      <img src={product.img} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <ItemCount 
        stock={product.stock} 
        onAdd={(quantity) => {
          if (quantity <= product.stock) {
            onAddToCart({ ...product, quantity });
          }
        }}
      />
      <p>Categoría: {product.category}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  image: {
    width: '200px',
    height: 'auto',
  },
};

export default ItemDetailContainer;
