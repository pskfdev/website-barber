import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ImFacebook, ImTwitter, ImPinterest, ImMenu, ImCross } from "react-icons/im";
import './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const activeNavLink = ({ isActive }) => {
    return {
      color: isActive ? '#fff' : '#777'
    }
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="http://heis.pro/rhythm/rhythm-original/images/logo-white.png" alt="" />
        </Link>
      </div>

      <div className="nav-side">
        <ul className={click ? "menu active" : "menu"}>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/" style={activeNavLink} className="nav-link">Home</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/about" style={activeNavLink} className="nav-link">About</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/price-list" style={activeNavLink} className="nav-link">Price List</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/gallery" style={activeNavLink} className="nav-link">Gallery</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/contact" style={activeNavLink} className="nav-link">Contact</NavLink>
          </li>
          <li>
            <p>0307-567-890</p>
          </li>
          <div className='icon-nav'>
            <a href='#' title='facebook' target='_blank'><ImFacebook /></a>
            <a href='#' title='twitter' target='_blank'><ImTwitter /></a>
            <a href='#' title='pinterest' target='_blank'><ImPinterest /></a>
          </div>
        </ul>
        <div className='toggle-menu' onClick={handleClick}>
          {click ? (<ImCross />) : (<ImMenu />)}
        </div>
      </div>

    </nav>
  )
}

export default Navbar

