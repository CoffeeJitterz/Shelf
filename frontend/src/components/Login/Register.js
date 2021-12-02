
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import './styles/register.css'

import books1 from '../books1.png'

export default function Register(props){
  const {handleHover} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    axios.post('http://localhost:3000/users', { user: {
      email,
      password
    }},
    // { withCredentials: true }
    )
    .then(res => {
      console.log(res)
    } )
    .catch(e => {
      console.log(e)
    })
    event.preventDefault();

  }
  return (
    <div className="register" onMouseEnter={handleHover}>
      <h1 className="register_header">Register</h1>
      <form className="register_form"onSubmit={handleSubmit}>
        <input type="text" 
        className="register_email"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}>
        </input>
        <input
            className="register_password"
            type="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login_message">
          <p className="login_message_text">Already A Member? &nbsp;</p><Link to="/landing" className="login_message_link">Click Here</Link>
          </div>
          <button className="register_button" type="submit" onClick={handleSubmit} >Register</button>
      </form>
    </div>
  )
}
    
  
