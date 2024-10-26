import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import LoadingSpinner from './components/LoadingSpinner'; // Asegúrate de tener este componente

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  // Recuperar carrito desde localStorage al montar el componente
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('carrito')) || [];
    setCartItems(savedCart);
    
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado de carga después de 2 segundos
    }, 2000); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer); // Limpiar el timeout al desmontar
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(item => item.id === product.id);
      if (existingProduct) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      const updatedCart = [...prev, { ...product, quantity: product.quantity }];
      localStorage.setItem('carrito', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <Router>
      <Header />
      <NavBar onToggleCart={toggleCart} />
      {showCart && <Cart cartItems={cartItems} setCartItems={setCartItems} onClose={() => setShowCart(false)} />}
      
      {loading ? ( // Si está cargando, muestra el spinner
        <LoadingSpinner />
      ) : (
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la Tienda de Hajime!" onAddToCart={addToCart} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer onAddToCart={addToCart} />} />
            <Route path="/product/:productId" element={<ItemDetailContainer onAddToCart={addToCart} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      )}
      
      <Footer />
    </Router>
  );
};

// Estilos básicos
const styles = {
  main: {
    padding: '20px',
    minHeight: 'calc(100vh - 200px)', // Ajusta la altura para el espacio entre Header y Footer
  },
};

export default App;
