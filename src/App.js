// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer'; // Importar el detalle
import NotFound from './components/NotFound'; // Componente para la ruta 404

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Estado del carrito
  const [showCart, setShowCart] = useState(false); // Mostrar/ocultar carrito

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems((prev) => {
      const updatedCart = [...prev, product];
      localStorage.setItem('carrito', JSON.stringify(updatedCart));
      return updatedCart;
    });
    console.log('Producto agregado:', product);
  };

  // Alternar la visibilidad del carrito
  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <Router>
      <Header />
      <NavBar onToggleCart={toggleCart} />
      {showCart && <Cart cartItems={cartItems} setCartItems={setCartItems} />} 

      {/* Configuración de rutas */}
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer 
              greeting="¡Bienvenido a la Tienda de Hajime!" 
              onAddToCart={addToCart} 
            />
          }
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer onAddToCart={addToCart} />}
        />
        <Route
          path="/product/:productId"
          element={<ItemDetailContainer onAddToCart={addToCart} />}
        />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
