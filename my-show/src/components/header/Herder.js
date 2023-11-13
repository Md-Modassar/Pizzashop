import React from 'react'
//import { Link } from 'react-scroll'
import "./header.css"
import { Link } from 'react-router-dom'

const Herder = () => {
  return (
   <div className='header'>
       <img src='logo2.jpg' alt='' className='logo'/>
     <div className='menu'>
        <Link to="/"className='menulist'>Home</Link>
        <Link to="/menu" className='menulist'>Menu</Link>
        <Link to="/about" className='menulist'>About</Link>
        <Link to="/contact" className='menulist'>Contect</Link>
     </div>
   </div>
  )
}

export default Herder