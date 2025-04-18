import React from 'react';
import './App.css';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <div className="app-container">
      <h1>Meu App</h1>
      {/* Conteúdo principal aqui */}
      <BottomNavigation />
    </div>
  );
}

export default App;
