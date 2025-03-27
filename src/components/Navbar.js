import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ darkMode, toggleDarkMode, toggleSidebar }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={toggleSidebar}>
        <span>MarielaAI</span>
      </div>

      <button className="hamburger-btn" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#shop">SHOP</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
      </ul>

      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;