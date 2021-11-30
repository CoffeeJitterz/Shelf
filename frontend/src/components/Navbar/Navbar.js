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
      <h1>URLShelves</h1>

      <div>
       
      {props.loggedIn ? 
      <div>
        <div>
        {props.email}
        </div>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </div> : <Link to="/login">Login</Link> }
      </div>
    </nav>

    
  )
}