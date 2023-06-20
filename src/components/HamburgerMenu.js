import React, { useState } from "react";
import "./hamburger-menu.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="hamburger-menu-container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle"
        checked={isExpanded}
        onChange={toggleNavbar}
      />
      <label htmlFor="toggle" className="hamburger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </label>
      <nav className={`navigation ${isExpanded ? "expanded" : ""}`}>
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
        <a href="#" className="nav-link">
          Payment Status
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Help
        </a>
        <a href="#" className="nav-link">
          Language
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
