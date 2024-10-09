import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Asegúrate de que ProductCard esté en la misma carpeta

const ItemListContainer = ({ greeting }) => {
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

  const [visibleProducts, setVisibleProducts] = useState(8); // Número inicial de productos visibles

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, allProducts.length)); // Aumentar el número de productos visibles
  };

  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
      <div style={styles.productList}>
        {allProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            img={product.img}
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
};

export default ItemListContainer;
