import { Link } from 'react-router-dom';
import './styles/navbar.css'
import { useState } from 'react';                                               

export default function Navbar(props){
  
  return (

    <nav>
      <h1>URLShelves</h1>

      <Link to="/home">Home</Link>

      <div>
      {/* {isLoggedin && (<Nav.Link><Link to='/logout'>Logout</Link></Nav.Link>)} */}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </div>
    </nav>

    
  )
}