
import { useState } from "react";

import './styles/login.css'

export default function Register(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

  }
  return (
    <div className="register">
      <h1>
        Register
      </h1>
      <form>
        <input type="text" 
        className="login_form"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}>
        </input>
        <input
            className="login_form_password"
            type="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit} >Login</button>
      </form>
    </div>
  )
}
    
  
