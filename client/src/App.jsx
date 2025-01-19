import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flyttebilberegner from './pages/Flyttebilberegner';
import Tjekliste from './pages/Tjekliste';
import Visualisering from './pages/Visualisering';
import Flytteguide from './pages/Flytteguide';
import OmOs from './pages/OmOs';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flyttebilberegner" element={<Flyttebilberegner />} />
      <Route path="/tjekliste" element={<Tjekliste />} />
      <Route path="/3d-visualisering" element={<Visualisering />} />
      <Route path="/flytteguide" element={<Flytteguide />} />
      <Route path="/om-os" element={<OmOs />} />
    </Routes>
  </Router>
);

export default App;
