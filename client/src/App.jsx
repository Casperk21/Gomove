import Tjekliste from './Tjekliste'; // Import af Tjekliste-komponenten
import KontaktOs from './pages/KontaktOs';

<Routes>
  <Route path="/kontakt-os" element={<KontaktOs />} />
</Routes>
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar-komponent
import Home from './pages/Home'; // Forsiden
import Flyttebilberegner from './pages/Flyttebilberegner'; // Flyttebilberegner-siden
import Tjekliste from './pages/Tjekliste'; // Tjekliste-siden
import Visualisering from './pages/Visualisering'; // 3D-Visualisering-siden
import OmOs from './pages/OmOs'; // Om Os-siden

const App = () => (
  <Router>
    <Navbar /> {/* Navigation vises på alle sider */}
    <Routes>
      {/* Definer ruter for hver side */}
      <Route path="/" element={<Home />} />
      <Route path="/flyttebilberegner" element={<Flyttebilberegner />} />
      <Route path="/tjekliste" element={<Tjekliste />} />
      <Route path="/3d-visualisering" element={<Visualisering />} />
      <Route path="/om-os" element={<OmOs />} />
    </Routes>
  </Router>
);

export default App;
