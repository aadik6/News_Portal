import React from 'react'
import '../navbar/navbar.css'
import Breaking from '../breakingNews/breaking'

function Navbar() {
  return (
   <>
        <div className="parent-nav">
            <div className="navbar">
                <div className="log">Logo</div>
                <div className="nav-items">
                    <ul>
                        <li>Trending</li>
                        <li>Home</li>
                        <li>Entertainment</li>
                        <li>Sport</li>
                        <li>Politics</li>
                        <li>Culture</li>
                        <li>Search</li>
                    </ul>
                </div>
            </div>
        </div>
        <Breaking/>
   </>
  )
}

export default Navbar