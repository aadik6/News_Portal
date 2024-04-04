import React, { useState } from 'react';
import '../navbar/navbar.css';
import Breaking from '../breakingNews/breaking';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="parent-nav">
        <div className="navbar">
          <div className="log">Logo</div>
          <div className="nav-items">
            <ul className={isOpen ? "nav-items-open" : "nav-items-closed"}>
              <li><NavLink to="/News_Portal">Home</NavLink></li>
              <li><NavLink to="/News_Portal/technology">Technology</NavLink></li>
              <li><NavLink to="/News_Portal/entertainment">Entertainment</NavLink></li>
              <li><NavLink to="/News_Portal/politics">Politics</NavLink></li>
              <li><NavLink to="/News_Portal/education">Education</NavLink></li>
              <li><NavLink to="/News_Portal/sport">Sport</NavLink></li>
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
