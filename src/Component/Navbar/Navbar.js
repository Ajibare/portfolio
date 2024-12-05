import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { data } from './data.js';
// import logo from '../../Asset/logo.png';
import download from '../../Asset/download.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className= {`navbar ${isMenuOpen ? 'nav-open' : ''}`}>
      <img src={download} alt="Portfolio logo" className='logo' />
      <nav>
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={id}>
              <Link
                to={url}
                activeClass="active"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-190}
                duration={500}
                delay={1000}
                onClick={toggleMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul> 
      </nav>
      <div className='hamburger' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
    </header>
  );
};

export default Navbar;