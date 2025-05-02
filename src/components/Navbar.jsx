import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowNavbar(scrollTop > window.innerHeight * 0.8);
    };

    const handleLinkClick = () => {
      const navbarMenu = document.getElementById('navbarMenu');
      if (navbarMenu && navbarMenu.classList.contains('show')) {
        const collapse = new window.bootstrap.Collapse(navbarMenu, { toggle: false });
        collapse.hide();
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="container">
        <a className="navbar-brand text-white" href="#inicio">Marcos Turcis</a>

        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
            <ul className="navbar-nav d-flex align-items-center gap-3">
              <li className="nav-item">
                <a className="nav-link d-inline text-white" href="#about">Sobre mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-inline text-white" href="#certificates">Certificados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-inline text-white" href="#projects">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-inline text-white" href="#contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-inline text-white" href="https://www.linkedin.com/in/marcos-turcis-292a99233/" target="_blank">Linkedin</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}
