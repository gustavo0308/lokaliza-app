import React from 'react';
import './BottomNavigation.css';
import homeIcon from '../assets/icons/Home.png'; // ajuste conforme o caminho real

const BottomNavigation = () => {
  return (
    <div className="bottom-nav">
      <img src={homeIcon} alt="Home" className="nav-icon" />
    </div>
  );
};

export default BottomNavigation;
