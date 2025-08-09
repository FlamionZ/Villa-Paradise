'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Villa Paradise</h2>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Beranda
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              Tentang
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('rooms')} className="nav-link">
              Kamar
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('facilities')} className="nav-link">
              Fasilitas
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('gallery')} className="nav-link">
              Galeri
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Kontak
            </button>
          </li>
        </ul>
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
