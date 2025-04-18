//Esse é o Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import HomeIcon from './assets/icons/Home.png'; // Importe seu ícone de Home
import OfertasIcon from './assets/icons/Ofertas.png'; // Importe o ícone de Ofertas
import LeilaoIcon from './assets/icons/Leilao.png'; // Importe o ícone de Leilão
import LocalizacaoIcon from './assets/icons/Localizacao.png'; // Importe o ícone de Localização

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed' as 'fixed', // Corrigido para garantir que seja do tipo correto
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    height: '60px',
    borderTop: '1px solid #ccc',
    boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
    zIndex: 100,
  },
  icon: {
    borderRadius: '8px',
    padding: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
  },
  iconHover: {
    borderColor: '#007bff',
    transform: 'scale(1.1)',
  }
};

const Navbar: React.FC = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.icon}> {/* Link para Home */}
        <img src={HomeIcon} alt="Home" style={{ width: '44px', height: '44px' }} />
      </Link>
      <Link to="/ofertas" style={styles.icon}> {/* Link para Ofertas */}
        <img src={OfertasIcon} alt="Ofertas" style={{ width: '44px', height: '44px' }} />
      </Link>
      <Link to="/leilao" style={styles.icon}> {/* Link para Leilão */}
        <img src={LeilaoIcon} alt="Leilão" style={{ width: '44px', height: '44px' }} />
      </Link>
      <Link to="/localizacao" style={styles.icon}> {/* Link para Localização */}
        <img src={LocalizacaoIcon} alt="Localização" style={{ width: '44px', height: '44px' }} />
      </Link>
    </div>
  );
};

export default Navbar;
