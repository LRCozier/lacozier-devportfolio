import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
    <header>
      <nav className="navbar">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to='/' onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to='/About' onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to='/Projects' onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to='/Contact' onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar;