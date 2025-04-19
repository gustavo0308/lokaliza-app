import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import homeDark from '../assets/dark-icons/home-dark.png';
import homeLight from '../assets/light-icons/home-light.png';

import ofertasDark from '../assets/dark-icons/ofertas-dark.png';
import ofertasLight from '../assets/light-icons/ofertas-light.png';

import leilaoDark from '../assets/dark-icons/leilao-dark.png';
import leilaoLight from '../assets/light-icons/leilao-light.png';

import lojasDark from '../assets/dark-icons/lojas-mapa-dark.png';
import lojasLight from '../assets/light-icons/lojas-mapa-light.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div style={styles.navbar}>
      <img
        src={isActive('/') ? homeDark : homeLight}
        alt="Home"
        style={styles.icon}
        onClick={() => navigate('/')}
      />
      <img
        src={isActive('/ofertas') ? ofertasDark : ofertasLight}
        alt="Ofertas"
        style={styles.icon}
        onClick={() => navigate('/ofertas')}
      />
      <img
        src={isActive('/leilao') ? leilaoDark : leilaoLight}
        alt="Leilão"
        style={styles.icon}
        onClick={() => navigate('/leilao')}
      />
      <img
        src={isActive('/lojas') ? lojasDark : lojasLight}
        alt="Lojas"
        style={styles.icon}
        onClick={() => navigate('/lojas')}
      />
    </div>
  );
};

const styles = {
  navbar: {
    position: 'fixed' as 'fixed',
    bottom: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #ccc',
  },
  icon: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  },
};

export default Navbar;
