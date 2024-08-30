import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="home" smooth={true} duration={500} className="logo">
          LIC
        </Link>
      </div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onSetActive={() => handleLinkClick('home')}
        >
          HOME
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
          onSetActive={() => handleLinkClick('about')}
        >
          ABOUT
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
          onSetActive={() => handleLinkClick('services')}
        >
          SERVICES
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
          onSetActive={() => handleLinkClick('contact')}
        >
          CONTACT
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
