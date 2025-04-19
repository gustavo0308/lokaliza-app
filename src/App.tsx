import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import Leilao from './pages/Leilao';
import Lojas from './pages/Lojas';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/leilao" element={<Leilao />} />
          <Route path="/lojas" element={<Lojas />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
