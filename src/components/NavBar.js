import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Assurez-vous que le chemin d'accès à votre fichier CSS est correct

const NavItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Blog', path: '/blog' }
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className={`nav-links ${open ? 'show' : ''}`}>
          {NavItems.map((item, index) => (
            <Link key={index} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
