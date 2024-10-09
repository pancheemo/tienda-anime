import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header'; // Asegúrate de importar el Header
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      {/* Header con mensaje de bienvenida */}
      <Header />

      {/* Barra de navegación */}
      <NavBar />

      {/* Contenedor de la lista de productos */}
      <ItemListContainer greeting="¡Bienvenido a la Tienda de Ropa Anime!" />
    </div>
  );
};

export default App;
