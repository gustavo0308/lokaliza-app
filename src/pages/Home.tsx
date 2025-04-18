import React from 'react';
import HomeIcon from '../components/HomeIcon';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <HomeIcon />
        <h1>Bem-vindo ao LokalizeA!</h1>
        <p>Seu app para conectar clientes a lojistas locais.</p>
      </div>
    </div>
  );
};

export default Home;
