import React from 'react';
import ProductCard from './ProductCard'; // Asegúrate de que ProductCard esté en la misma carpeta

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
      <div style={styles.productList}>
        <ProductCard name="Camiseta Naruto" price={25} img="/img/naruto.jpg" />
        <ProductCard name="Camiseta One Piece" price={30} img="/img/onepiece.jpg" />
        <ProductCard name="Sudadera Attack on Titan" price={50} img="/img/aot.jpg" />
        <ProductCard name="Camiseta Dragon Ball" price={28} img="/img/dragonball.jpg" />
        <ProductCard name="Sudadera My Hero Academia" price={45} img="/img/mha.jpg" />
        <ProductCard name="Camiseta Tokyo Ghoul" price={22} img="/img/tokyoghoul.jpg" />
        <ProductCard name="Camiseta Death Note" price={20} img="/img/deathnote.jpg" />
        <ProductCard name="Sudadera Demon Slayer" price={48} img="/img/demonslayer.jpg" />
        <ProductCard name="Camiseta Fairy Tail" price={25} img="/img/fairytail.jpg" />
        <ProductCard name="Sudadera Bleach" price={50} img="/img/bleach.jpg" />
        <ProductCard name="Camiseta Hunter x Hunter" price={27} img="/img/hxh.jpg" />
        <ProductCard name="Camiseta Sailor Moon" price={24} img="/img/sailormoon.jpg" />
        <ProductCard name="Sudadera Fullmetal Alchemist" price={47} img="/img/fullmetal.jpg" />
        <ProductCard name="Camiseta JoJo's Bizarre Adventure" price={26} img="/img/jojo.jpg" />
        <ProductCard name="Camiseta Black Clover" price={29} img="/img/blackclover.jpg" />
        <ProductCard name="Sudadera Sword Art Online" price={49} img="/img/sao.jpg" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
};

export default ItemListContainer;
