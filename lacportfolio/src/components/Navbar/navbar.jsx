import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>LC</Link>
        
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
            <li><NavLink to="/projects" onClick={handleLinkClick}>Work</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
          </ul>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className={`hamburger ${menuOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;