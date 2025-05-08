import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar;