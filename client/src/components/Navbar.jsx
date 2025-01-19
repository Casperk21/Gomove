import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Importér CSS

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Hjem</Link>
        <Link to="/flyttebilberegner">Flyttebilberegner</Link>
        <Link to="/tjekliste">Tjekliste</Link>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Mere
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/3d-visualisering">3D-Visualisering</Link>
              <Link to="/flytteguide">Flytteguide</Link>
              <Link to="/om-os">Om os</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
