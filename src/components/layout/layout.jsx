import React from 'react'
import './layout.css';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

function Layout({children}) {
  return (
    <>
    <div className='nav'>
    <Navbar/>
    </div>
    
    <div className='content'>
        {children}
    </div>
    <Footer/>
    </> 
  )
}

export default Layout