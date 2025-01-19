import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Importér CSS til navigationen

const Navbar = () => (
  <nav>
    <div>
      <Link to="/">Hjem</Link>
      <Link to="/flyttebilberegner">Flyttebilberegner</Link>
      <Link to="/tjekliste">Tjekliste</Link>
      <Link to="/3d-visualisering">3D-Visualisering</Link>
      <Link to="/flytteguide">Flytteguide</Link>
      <Link to="/om-os">Om os</Link>
    </div>
  </nav>
);

export default Navbar;
