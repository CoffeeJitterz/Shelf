
import { useState } from "react";
import axios from "axios";

import './styles/login.css'

import './styles/login.css'

import './styles/login.css'

export default function Register(props){
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
    <div className="register">
      <h1>
        Register
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        className="registration_form"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}>
        </input>
        <input
            className="registration_form_password"
            type="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
      </form>
    </div>
  )
}
    
  
