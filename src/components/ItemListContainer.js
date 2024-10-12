import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  // Lista de productos relacionados a JoJo's Bizarre Adventure
  const allProducts = [
    { name: "Manga de JoJo's Bizarre Adventure: Phantom Blood", price: 50000, img: "../img/jojo_phantom_blood.jpg" },
    { name: "Manga de JoJo's Bizarre Adventure: Battle Tendency", price: 30000, img: "../img/jojo_battle_tendency.jpg" },
    { name: "Manga de JoJo's Bizarre Adventure: Stardust Crusaders", price: 15000, img: "../img/jojo_stardust_crusaders.jpg" },
    { name: "Manga de JoJo's Bizarre Adventure: Diamond is Unbreakable", price: 30000, img: "../img/jojo_diamond_unbreakable.jpg" },
    { name: "Manga de JoJo's Bizarre Adventure: Steel Ball Run", price: 50000, img: "../img/jojo_steel_ball_run.jpg" },
    { name: "Manga de JoJo's Bizarre Adventure: Golden Wind", price: 15000, img: "../img/jojo_golden_wind.jpg" },
    { name: "Manga de JoJo's Bizarre Adventure: Stone Ocean", price: 30000, img: "../img/jojo_stone_ocean.jpg" },
    { name: "Camiseta de JoJo's Bizarre Adventure: Jotaro Kujo", price: 50000, img: "../img/jojo_jotaro_shirt.jpg" },
    { name: "Camiseta de JoJo's Bizarre Adventure: Dio Brando", price: 50000, img: "../img/jojo_dio_shirt.jpg" },
    { name: "Peluche de JoJo's Bizarre Adventure: Jotaro Kujo", price: 15000, img: "../img/jojo_jotaro_plush.jpg" },
    { name: "Peluche de JoJo's Bizarre Adventure: Dio Brando", price: 15000, img: "../img/jojo_dio_plush.jpg" },
    { name: "Funko Pop de JoJo's Bizarre Adventure: Jotaro Kujo", price: 30000, img: "../img/jojo_jotaro_funkopop.png" },
    { name: "Funko Pop de JoJo's Bizarre Adventure: Dio Brando", price: 30000, img: "../img/jojo_dio_funkopop.png" },
    { name: "Poster de JoJo's Bizarre Adventure", price: 15000, img: "../img/jojo_poster.jpg" },
    { name: "Sudadera de JoJo's Bizarre Adventure", price: 50000, img: "../img/jojo_sweater.jpg" },
    { name: "Taza de JoJo's Bizarre Adventure", price: 15000, img: "../img/jojo_mug.jpg" },
  ];

  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, allProducts.length));
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
            onAddToCart={() => onAddToCart(product)} // Llama a la función para agregar al carrito
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
    backgroundColor: '#6f42c1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ItemListContainer;
