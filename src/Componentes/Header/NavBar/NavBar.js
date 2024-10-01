import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <a href='/Page202409/'><img src={"./imagenes/iconPage.png"} alt="Logo" className="navbar-logo" /></a>
      </div>

      {!isMobile ? (
        <ul className="nav-links">
          <li className='navbar-item'><Link to="/Banner">Inicio</Link></li>
          <li className='navbar-item'><Link to="/About">Acerca de mii</Link></li>
          <li className='navbar-item'><Link to="/Gallery">Experiencia</Link></li>
        </ul>
      ) : (
        <div className="mobile-nav">
          <Link to="/Banner" className="mobile-nav-item">Inicio</Link>
          <Link to="/About" className="mobile-nav-item">Sobre Mi</Link>
          <Link to="/Gallery" className="mobile-nav-item">Experiencia</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
