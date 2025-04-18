/* Home.tsx dentro de src (solto) */
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import HomeIcon from './components/HomeIcon';
import LeilaoIcon from './assets/icons/Leilao.png';
import LocalizacaoIcon from './assets/icons/Localizacao.png';
import OfertasIcon from './assets/icons/Ofertas.png';

const styles = {
  container: {
    position: 'relative' as 'relative',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed' as 'fixed',
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
  welcomeText: {
    textAlign: 'center' as 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
};

const Home: React.FC = () => {
  const navigate = useNavigate(); // Iniciando o hook useNavigate

  // Função de navegação para diferentes páginas
  const handleNavigation = (path: string) => {
    navigate(path); // Navega para o caminho informado
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeText}>Bem-vindo ao Lokalize!</div>

      <div style={styles.navbar}>
        <HomeIcon
          style={{
            ...styles.icon,
            width: '44px',
            height: '44px',
          }}
          size={44}
          onClick={() => handleNavigation('/')} // Navega para Home
        />
        <img
          src={OfertasIcon}
          alt="Ofertas"
          style={{
            ...styles.icon,
            width: '44px',
            height: '44px',
          }}
          onClick={() => handleNavigation('/ofertas')} // Navega para Ofertas
        />
        <img
          src={LeilaoIcon}
          alt="Leilão"
          style={{
            ...styles.icon,
            width: '44px',
            height: '44px',
          }}
          onClick={() => handleNavigation('/leilao')} // Navega para Leilão
        />
        <img
          src={LocalizacaoIcon}
          alt="Lojas"
          style={{
            ...styles.icon,
            width: '44px',
            height: '44px',
          }}
          onClick={() => handleNavigation('/localizacao')} // Navega para Localização
        />
      </div>
    </div>
  );
};

export default Home;
