import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <NavBar />

      {/* Contenedor de la lista de productos */}
      <ItemListContainer greeting="¡Bienvenido a la Tienda de Ropa Anime!" />
    </div>
  );
};

export default App;
