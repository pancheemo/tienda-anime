import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import LoadingSpinner from './components/LoadingSpinner'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('carrito')) || [];
    setCartItems(savedCart);

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
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

  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <Router>
      <Header />
      <NavBar onToggleCart={toggleCart} />
      {showCart && (
        <Cart 
          cartItems={cartItems} 
          setCartItems={setCartItems} 
          onClose={() => setShowCart(false)} 
        />
      )}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<ItemListContainer onAddToCart={addToCart} />} />
            <Route path="/category/:category" element={<ItemListContainer onAddToCart={addToCart} />} />
            <Route path="/product/:productId" element={<ItemDetailContainer onAddToCart={addToCart} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      )}

      <Footer />
    </Router>
  );
};

const styles = {
  main: {
    padding: '20px',
    minHeight: 'calc(100vh - 200px)',
  },
};

export default App;
