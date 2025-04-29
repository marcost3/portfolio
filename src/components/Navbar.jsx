import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowNavbar(scrollTop > window.innerHeight * 0.8); // aparece después de 80% de la altura de la pantalla
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="container">
        <a className="navbar-brand text-white" href="#inicio">Mi Portfolio</a>
        <div className="d-flex gap-4">
          <a className="nav-link d-inline text-white" href="#about">Sobre mí</a>
          <a className="nav-link d-inline text-white" href="#projects">Proyectos</a>
          <a className="nav-link d-inline text-white" href="#certificates">Certificados</a>
        </div>
      </div>
    </nav>
  );
}
