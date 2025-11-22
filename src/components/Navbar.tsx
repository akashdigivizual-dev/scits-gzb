import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo Section */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__icon">
            {/* logo image */}
            <img src="/Images/scitslogo.png" alt="SCITS Logo" className="navbar__image" />
          </div>
          <div className="navbar__text">
            <span className="navbar__brand">SCITS</span>
            <span className="navbar__location">Ghaziabad</span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <nav className="navbar__links">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/about" className="navbar__link">
            About
          </Link>
          <Link to="/courses" className="navbar__link">
            Courses
          </Link>
          <Link to="/gallery" className="navbar__link">
            Gallery
          </Link>
          <Link to="/contact" className="navbar__link navbar__link--cta">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isOpen ? "open" : ""}`}>
        <Link to="/" className="navbar__mobile-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="navbar__mobile-link" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/courses" className="navbar__mobile-link" onClick={toggleMenu}>
          Courses
        </Link>
        <Link to="/gallery" className="navbar__mobile-link" onClick={toggleMenu}>
          Gallery
        </Link>
        <Link to="/contact" className="navbar__mobile-link navbar__mobile-link--cta" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
