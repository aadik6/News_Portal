import React from 'react'
import '../layout/layout.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Breaking from '../breakingNews/breaking'

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