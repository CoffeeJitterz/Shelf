import { Link } from 'react-router-dom';
import './styles/navbar.css'
import { useEffect, useState } from 'react';     
import header_books1 from '../header_books1.png'
import header_books2 from '../header_books2.png'                            

export default function Navbar(props){
  
  const logout = () => {
    localStorage.clear();
    window.location.href = '/landing';
  }
  const First = 'First';
const Second = 'Second'
  const [mode, setMode] = useState(Second)
  const handleHover = () => {

      if (mode === First) {
        setMode(Second)
        console.log(mode)
      } else {
        setMode(First)
        console.log(mode)
      }
  };
  
  return (
    
    <nav>
      <div className="logo_container">
      {mode === First && (
        <div onMouseEnter={handleHover}>
          <img className="logo_books" src={header_books1} /> 
        </div>
      )}
      {mode === Second && (
        <div onMouseEnter={handleHover}>
          <img className="logo_books" src={header_books2} /> 
        </div>
      )}
      <h1 className="logo">URLShelves</h1>   
      </div>
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