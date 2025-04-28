import React, { useState } from 'react';
import './navbar.css';

import { NavLink } from 'react-router-dom';
import Breaking from '../breakingNews/breaking';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="parent-nav">
        <div className="navbar">
          <div className="log">NewsWave</div>
          <div className="nav-items">
            <ul className={isOpen ? "nav-items-open" : "nav-items-closed"}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/category/politics">Politics</NavLink></li>
              <li><NavLink to="/category/sport">Sport</NavLink></li>
              <li><NavLink to="/category/education">Education</NavLink></li>
              <li><NavLink to="/category/technology">Technology</NavLink></li>
              <li><NavLink to="/category/entertainment">Entertainment</NavLink></li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={isOpen ? "line line1-open" : "line"}></div>
            <div className={isOpen ? "line line2-open" : "line"}></div>
            <div className={isOpen ? "line line3-open" : "line"}></div>
          </div>
        </div>
      </div>
      <Breaking />
    </>
  );
}

export default Navbar;
