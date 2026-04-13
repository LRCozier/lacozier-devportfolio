import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import './navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main Navigation">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>LC</Link>
        
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
            <li><NavLink to="/projects" onClick={handleLinkClick}>Work</NavLink></li>
            <li><NavLink to="/services" onClick={handleLinkClick}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
          </ul>
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>
          
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`hamburger ${menuOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;