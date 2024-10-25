import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  const allProducts = [
    { id: 1, name: "Manga: Phantom Blood", category: "mangas", price: 50000, img: "../img/jojo_phantom_blood.jpg" },
    { id: 2, name: "Manga: Battle Tendency", category: "mangas", price: 30000, img: "../img/jojo_battle_tendency.jpg" },
    { id: 3, name: "Manga: Stardust Crusaders", category: "mangas", price: 15000, img: "../img/jojo_stardust_crusaders.jpg" },
    { id: 4, name: "Manga: Diamond is Unbreakable", category: "mangas", price: 30000, img: "../img/jojo_diamond_unbreakable.jpg" },
    { id: 5, name: "Manga: Steel Ball Run", category: "mangas", price: 50000, img: "../img/jojo_steel_ball_run.jpg" },
    { id: 6, name: "Manga: Golden Wind", category: "mangas", price: 15000, img: "../img/jojo_golden_wind.jpg" },
    { id: 7, name: "Manga: Stone Ocean", category: "mangas", price: 30000, img: "../img/jojo_stone_ocean.jpg" },
    { id: 8, name: "Camiseta: Jotaro Kujo", category: "remeras", price: 50000, img: "../img/jojo_jotaro_shirt.jpg" },
    { id: 9, name: "Camiseta: Dio Brando", category: "remeras", price: 50000, img: "../img/jojo_dio_shirt.jpg" },
    { id: 10, name: "Peluche: Jotaro Kujo", category: "peluches", price: 15000, img: "../img/jojo_jotaro_plush.jpg" },
    { id: 11, name: "Peluche: Dio Brando", category: "peluches", price: 15000, img: "../img/jojo_dio_plush.jpg" },
    { id: 12, name: "Funko Pop: Jotaro Kujo", category: "funkos", price: 30000, img: "../img/jojo_jotaro_funkopop.png" },
    { id: 13, name: "Funko Pop: Dio Brando", category: "funkos", price: 30000, img: "../img/jojo_dio_funkopop.png" },
    { id: 14, name: "Poster JoJo", category: "posters", price: 15000, img: "../img/jojo_poster.jpg" },
    { id: 15, name: "Sudadera JoJo", category: "ropa", price: 50000, img: "../img/jojo_sweater.jpg" },
    { id: 16, name: "Taza JoJo", category: "accesorios", price: 15000, img: "../img/jojo_mug.jpg" },
  ];

  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    const productsToShow = categoryId
      ? allProducts.filter(product => product.category === categoryId)
      : allProducts;
    setFilteredProducts(productsToShow);
  }, [categoryId]);

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, filteredProducts.length));
  };

  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
      <div style={styles.productList}>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            stock={10} // Definimos stock de 10 unidades
            onAddToCart={(quantity) =>
              onAddToCart({ ...product, quantity }) // Pasamos la cantidad seleccionada al carrito
            }
          />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
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

export default ItemListContainer;
