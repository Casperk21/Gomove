import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo */}
        <Link to="/">
          <span className="logo-icon">🚛</span> Gomove
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Hjem</Link>
        <Link to="/flyttebilberegner">Flyttebilsberegner</Link>
        <Link to="/tjekliste">Tjekliste</Link>
        <Link to="/kontakt-os">Kontakt os</Link>
        <Link to="/om-os">Om os</Link>
      </div>
    </nav>
  );
};

export default Navbar;
