// src/pages/Ofertas.tsx
import React from 'react';

const Ofertas: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.welcomeText}>Ofertas</div>
      <div style={styles.subText}>Aqui estão as melhores ofertas para você!</div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex' as 'flex', // Tipo explícito para o flex
    flexDirection: 'column' as 'column', // Tipo explícito para o flexDirection
    alignItems: 'center' as 'center', // Tipo explícito para o alignItems
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    justifyContent: 'flex-start' as 'flex-start', // Tipo explícito para justifyContent
    paddingTop: '20px',
  },
  welcomeText: {
    textAlign: 'center' as 'center', // Tipo explícito para textAlign
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subText: {
    textAlign: 'center' as 'center', // Tipo explícito para textAlign
    fontSize: '18px',
    marginTop: '10px',
  },
};

export default Ofertas;
