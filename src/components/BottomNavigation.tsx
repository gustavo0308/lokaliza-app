import React from 'react';
import './BottomNavigation.css';
import homeIcon from '../assets/icons/Nova Home.png';
import ofertasIcon from '../assets/icons/Ofertas.png'; // 👈 novo ícone

const BottomNavigation: React.FC = () => {
  return (
    <div className="bottom-navigation">
      <div className="nav-item">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <img src={ofertasIcon} alt="Ofertas" />
        <span>Ofertas</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
