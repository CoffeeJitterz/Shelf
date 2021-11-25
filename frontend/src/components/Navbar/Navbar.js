import { Link } from 'react-router-dom';
import './styles/navbar.css'

export default function Navbar(props){
  return (

    <nav>
      <h1>URLShelves</h1>

      <Link to="/home">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>
    </nav>

    
  )
}