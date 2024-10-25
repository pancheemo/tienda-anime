import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'; // Importar el componente ItemCount

const ItemDetailContainer = ({ onAddToCart }) => {
  const { productId } = useParams(); // Obtener el ID del producto de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulación de llamada a una API o base de datos
  useEffect(() => {
    const fetchProductDetails = async () => {
      // Simulación de retardo
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      
      await delay(1000); // Esperar 1 segundo

      // Simulación de productos
      const allProducts = [
        { id: 1, name: "Manga de JoJo's Bizarre Adventure: Phantom Blood", price: 50000, img: "../img/jojo_phantom_blood.jpg", category: 'Mangas' },
        { id: 2, name: "Manga de JoJo's Bizarre Adventure: Battle Tendency", price: 30000, img: "../img/jojo_battle_tendency.jpg", category: 'Mangas' },
        { id: 3, name: "Manga de JoJo's Bizarre Adventure: Stardust Crusaders", price: 15000, img: "../img/jojo_stardust_crusaders.jpg", category: 'Mangas' },
        { id: 4, name: "Manga de JoJo's Bizarre Adventure: Diamond is Unbreakable", price: 30000, img: "../img/jojo_diamond_unbreakable.jpg", category: 'Mangas' },
        { id: 5, name: "Manga de JoJo's Bizarre Adventure: Steel Ball Run", price: 50000, img: "../img/jojo_steel_ball_run.jpg", category: 'Mangas' },
        { id: 6, name: "Manga de JoJo's Bizarre Adventure: Golden Wind", price: 15000, img: "../img/jojo_golden_wind.jpg", category: 'Mangas' },
        { id: 7, name: "Manga de JoJo's Bizarre Adventure: Stone Ocean", price: 30000, img: "../img/jojo_stone_ocean.jpg", category: 'Mangas' },
        { id: 8, name: "Camiseta de JoJo's Bizarre Adventure: Jotaro Kujo", price: 50000, img: "../img/jojo_jotaro_shirt.jpg", category: 'Ropa' },
        { id: 9, name: "Camiseta de JoJo's Bizarre Adventure: Dio Brando", price: 50000, img: "../img/jojo_dio_shirt.jpg", category: 'Ropa' },
        { id: 10, name: "Peluche de JoJo's Bizarre Adventure: Jotaro Kujo", price: 15000, img: "../img/jojo_jotaro_plush.jpg", category: 'Peluche' },
        { id: 11, name: "Peluche de JoJo's Bizarre Adventure: Dio Brando", price: 15000, img: "../img/jojo_dio_plush.jpg", category: 'Peluche' },
        { id: 12, name: "Funko Pop de JoJo's Bizarre Adventure: Jotaro Kujo", price: 30000, img: "../img/jojo_jotaro_funkopop.png", category: 'Figuras' },
        { id: 13, name: "Funko Pop de JoJo's Bizarre Adventure: Dio Brando", price: 30000, img: "../img/jojo_dio_funkopop.png", category: 'Figuras' },
        { id: 14, name: "Poster de JoJo's Bizarre Adventure", price: 15000, img: "../img/jojo_poster.jpg", category: 'Merchandising' },
        { id: 15, name: "Sudadera de JoJo's Bizarre Adventure", price: 50000, img: "../img/jojo_sweater.jpg", category: 'Ropa' },
        { id: 16, name: "Taza de JoJo's Bizarre Adventure", price: 15000, img: "../img/jojo_mug.jpg", category: 'Merchandising' },
      ];

      const productDetails = allProducts.find(item => item.id === parseInt(productId));
      setProduct(productDetails);
      setLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Cargando...</div>; // Mensaje de carga
  }

  if (!product) {
    return <div>Producto no encontrado.</div>; // Manejo de producto no encontrado
  }

  return (
    <div style={styles.container}>
      <img src={product.img} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <ItemCount 
        stock={10} // Ajusta según la cantidad en stock
        onAdd={(quantity) => {
          onAddToCart({ ...product, quantity }); // Agregar al carrito con cantidad
        }}
      />
      <p>Categoría: {product.category}</p>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  image: {
    width: '200px', // Ajusta según sea necesario
    height: 'auto',
  },
};

export default ItemDetailContainer;
