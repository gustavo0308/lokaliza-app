import React from 'react';
import './App.css'; // Importando o CSS principal do App
import BottomNavigation from './components/BottomNavigation';  // Importando o componente de navegação inferior

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Bem-vindo ao meu App!</h1>

      {/* Aqui você pode adicionar mais conteúdo ou componentes */}
      <p>Esta é a área principal do aplicativo.</p>

      {/* BottomNavigation é chamado aqui */}
      <BottomNavigation />

      {/* Mais conteúdo abaixo se necessário */}
    </div>
  );
}

export default App;
