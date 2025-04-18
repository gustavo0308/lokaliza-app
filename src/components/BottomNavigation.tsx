import React from 'react';
import './BottomNavigation.css';

import homeIcon from '../assets/icons/Home.png';
import ofertasIcon from '../assets/icons/Ofertas.png';
import leilaoIcon from '../assets/icons/Leilao.png';
import lojasIcon from '../assets/icons/Localizacao.png';

function BottomNavigation() {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <img src={homeIcon} alt="Home" />
        <span>Início</span>
      </div>
      <div className="nav-item">
        <img src={ofertasIcon} alt="Ofertas" />
        <span>Ofertas</span>
      </div>
      <div className="nav-item">
        <img src={leilaoIcon} alt="Leilão" />
        <span>Leilão</span>
      </div>
      <div className="nav-item">
        <img src={lojasIcon} alt="Lojas" />
        <span>Lojas</span>
      </div>
    </div>
  );
}

export default BottomNavigation;
