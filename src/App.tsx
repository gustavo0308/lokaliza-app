//Esse é o App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando o Router e as Rotas
import Home from './Home'; // Tela Home
import Ofertas from './pages/Ofertas'; // Tela Ofertas
import Navbar from './Navbar'; // A barra de navegação

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* A Barra de Navegação ficará fixa */}
      <Routes>
        {/* Defina as rotas para cada página */}
        <Route path="/" element={<Home />} /> {/* Rota para a Home */}
        <Route path="/ofertas" element={<Ofertas />} /> {/* Rota para as Ofertas */}
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default App;
