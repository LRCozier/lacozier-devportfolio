import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
    <header>
      <nav>
        <div className="portfolio-logo">

        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Projects'>Projects</Link>
          <Link to='/Blog'>Blog</Link>
          <Link to='/Contact'>Contact</Link>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar;