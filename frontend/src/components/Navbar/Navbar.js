import { Link } from 'react-router-dom';
import './styles/navbar.css'
import { useEffect, useState } from 'react';                                               

export default function Navbar(props){
  
  
  
  return (
    
    <nav>
      <h1>URLShelves</h1>

      <Link to="/home">Home</Link>

      <div>
       
      {props.loggedIn ? <Link to="/landing">{props.email} Logout</Link> : <Link to="/login">Login</Link> }
      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>  */}
      {/* <Link to="/logout">Logout</Link> */}
      </div>
    </nav>

    
  )
}