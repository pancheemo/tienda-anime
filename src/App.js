import React, { useState } from 'react'; 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Cart from './components/Cart'; // Asegúrate de importar el Cart

const App = () => {
  const [cart, setCart] = useState([]); // Estado para el carrito
  const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]); // Agregar el producto al carrito
    console.log('Producto agregado:', product); // Para verificar en la consola
  };

  // Función para alternar la visibilidad del carrito
  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <div>
      <Header />
      <NavBar onToggleCart={toggleCart} /> {/* Pasar la función para alternar el carrito */}
      {showCart && <Cart cartItems={cart} />} {/* Mostrar el carrito si showCart es verdadero */}
      <ItemListContainer 
        greeting="¡Bienvenido a la Tienda de Hajime!" 
        onAddToCart={addToCart} // Pasar la función al ItemListContainer
      />
      <Footer />
    </div>
  );
};

export default App;
