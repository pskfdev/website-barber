import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ImFacebook, ImTwitter, ImPinterest, ImMenu, ImCross } from "react-icons/im";
import './Navbar.css';

function Navbar() {

  const [fix, setFix] = useState(false);              //ใช้กับการเลื่อน scrollNav
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);         //ใช้เพื่อ toggle humberkerMenu
  const closeMenu = () => setClick(false);

  function fixNav() {                                 //ถ้ามีการเลื่อน scrollY >200 setFix(true)
    if (window.scrollY >= 200) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  window.addEventListener("scroll", fixNav)           //ถ้ามีการเลื่อน scroll ให้เรียกใช้ function fixNav()

  return (
    <nav className={fix ? "nav fix" : "nav"}>
      <div className="logo">
        <Link to="/">
          <img src={'/img/logo-nav.png'} alt="" />
        </Link>
      </div>

      <div className="nav-side">
        <ul className={click ? "menu active" : "menu"}>                             {/* ใช้สำหรับการแสดงเมนูหน้าจอขนาดเล็ก */}
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/" className="nav-link">HOME</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/price-list" className="nav-link">PRICE LIST</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/gallery" className="nav-link">GALLERY</NavLink>
          </li>
          <li className="menu-link" onClick={closeMenu}>
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
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
        <div className={fix ? "toggle-menu fix" : "toggle-menu"} onClick={handleClick}>
          {click ? (<ImCross />) : (<ImMenu />)}                                         {/* //condition ? true : false. */}
        </div>
      </div>

    </nav>
  )
}

export default Navbar

