import React from 'react';
import './App.css'; // Importando o arquivo de estilos
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <div className="app-container">
      <h1>Meu App</h1>  {/* Título centralizado */}
      {/* conteúdo principal aqui */}
      <BottomNavigation />
    </div>
  );
}

export default App;
