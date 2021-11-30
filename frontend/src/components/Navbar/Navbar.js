import { Link } from 'react-router-dom';
import './styles/navbar.css'
import { useEffect, useState } from 'react';                                               

export default function Navbar(props){
  
  const logout = () => {
    localStorage.clear();
    window.location.href = '/landing';
  }
  
  console.log(props.email)
  return (
    
    <nav>
      <h1 className="logo">URLShelves</h1>
      <div>       
      {props.loggedIn ? 
      <div className="email_logout">    
      <h4 className="email">{props.email}</h4>
      <button className="logout_button" onClick={logout}>Logout</button>
      </div> : <button className="register_button"><Link to="/register">Register</Link></button>}
      </div>
    </nav>

    
  )
}