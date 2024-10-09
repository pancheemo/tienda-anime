import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Asegúrate de que ProductCard esté en la misma carpeta

const ItemListContainer = ({ greeting, onAddToCart }) => {
  // Estado para el mensaje de éxito
  const [successMessage, setSuccessMessage] = useState('');

  const allProducts = [
    { name: "Camiseta Naruto", price: 25, img: "./img/naruto.jpg" },
    { name: "Camiseta One Piece", price: 30, img: "./img/onepiece.jpg" },
    { name: "Sudadera Attack on Titan", price: 50, img: "./img/aot.jpg" },
    { name: "Camiseta Dragon Ball", price: 28, img: "./img/dragonball.jpg" },
    { name: "Sudadera My Hero Academia", price: 45, img: "./img/mha.jpg" },
    { name: "Camiseta Tokyo Ghoul", price: 22, img: "./img/tokyoghoul.jpg" },
    { name: "Camiseta Death Note", price: 20, img: "./img/deathnote.jpg" },
    { name: "Sudadera Demon Slayer", price: 48, img: "./img/demonslayer.jpg" },
    { name: "Camiseta Fairy Tail", price: 25, img: "./img/fairytail.jpg" },
    { name: "Sudadera Bleach", price: 50, img: "./img/bleach.jpg" },
    { name: "Camiseta Hunter x Hunter", price: 27, img: "./img/hxh.jpg" },
    { name: "Camiseta Sailor Moon", price: 24, img: "./img/sailormoon.jpg" },
    { name: "Sudadera Fullmetal Alchemist", price: 47, img: "./img/fullmetal.jpg" },
    { name: "Camiseta JoJo's Bizarre Adventure", price: 26, img: "./img/jojo.jpg" },
    { name: "Camiseta Black Clover", price: 29, img: "./img/blackclover.jpg" },
    { name: "Sudadera Sword Art Online", price: 49, img: "./img/sao.jpg" },
  ];
  
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, allProducts.length));
  };

  // Maneja la adición al carrito y muestra el mensaje
  const handleAddToCart = (product) => {
    onAddToCart(product); // Llama a la función de agregar al carrito
    setSuccessMessage(`"${product.name}" fue añadido exitosamente al carrito!`); // Muestra el mensaje
    setTimeout(() => {
      setSuccessMessage(''); // Oculta el mensaje después de 3 segundos
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>} {/* Mensaje de éxito */}
      <div style={styles.productList}>
        {allProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            img={product.img}
            onAddToCart={() => handleAddToCart(product)} // Llama a la nueva función para agregar al carrito
          />
        ))}
      </div>
      {visibleProducts < allProducts.length && (
        <button onClick={loadMore} style={styles.loadMoreButton}>
          Cargar más
        </button>
      )}
    </div>
  );
};

// Estilos
const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columnas
    gap: '20px', // Espacio entre las tarjetas
    justifyItems: 'center',
  },
  loadMoreButton: {
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#6f42c1', // Color violeta
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#d4edda', // Color de fondo verde claro
    color: '#155724', // Color de texto verde
    border: '1px solid #c3e6cb', // Borde verde
    borderRadius: '5px',
  },
};

export default ItemListContainer;
