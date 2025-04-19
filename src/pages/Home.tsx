import React, { CSSProperties } from 'react';

const Home: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2>Página Home</h2>
        <p>Essa é a página inicial do app.</p>
      </div>
    </div>
  );
};

// Estilos com tipagem correta
const containerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100vh',
  paddingTop: '40px',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
};

export default Home;
