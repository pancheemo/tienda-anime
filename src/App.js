import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Estado para el carrito
  const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems(prev => {
      const updatedCart = [...prev, product];
      localStorage.setItem('carrito', JSON.stringify(updatedCart)); // Guarda el carrito en localStorage
      return updatedCart;
    });
    console.log('Producto agregado:', product); // Para verificar en la consola
  };

  // Función para alternar la visibilidad del carrito
  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <div>
      <Header />
      <NavBar onToggleCart={toggleCart} /> 
      {showCart && <Cart cartItems={cartItems} setCartItems={setCartItems} />} {/* Mostrar el carrito si showCart es verdadero */}
      <ItemListContainer 
        greeting="¡Bienvenido a la Tienda de Hajime!" 
        onAddToCart={addToCart} 
      />
      <Footer />
    </div>
  );
};

export default App;
