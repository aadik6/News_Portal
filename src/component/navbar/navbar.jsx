import React from 'react'
import '../navbar/navbar.css'
import Breaking from '../breakingNews/breaking'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
        <div className="parent-nav">
            <div className="navbar">
                <div className="log">Logo</div>
                <div className="nav-items">
                    <ul>
                        <li> <NavLink to="/News_Portal">Home</NavLink></li>
                        <li> <NavLink to="/News_Portal/technology">Technology</NavLink></li>
                        <li> <NavLink to="/News_Portal/entertainment">Entertainment</NavLink></li>
                        <li> <NavLink to="/News_Portal/politics">Politics</NavLink></li>
                        <li> <NavLink to="/News_Portal/education">Education</NavLink></li>
                        <li> <NavLink to="/News_Portal/sport">Sport</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <Breaking/>
   </>
  )
}

export default Navbar