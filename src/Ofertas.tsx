import React from 'react';

const Ofertas: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.welcomeText}>Veja as promoções de hoje</div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex' as 'flex', // Garantir que o TypeScript entenda como 'flex'
    flexDirection: 'column' as 'column', // Tipo específico para 'flexDirection'
    justifyContent: 'center' as 'center', // Tipo específico para 'justifyContent'
    alignItems: 'center' as 'center', // Tipo específico para 'alignItems'
    minHeight: '100vh', // Altura mínima para ocupar toda a tela
    backgroundColor: '#f9f9f9', // Cor de fundo
  },
  welcomeText: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px', // Margem superior para espaçamento
  },
};

export default Ofertas;
