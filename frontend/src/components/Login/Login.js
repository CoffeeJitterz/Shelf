
import axios from "axios";
import React, { useState } from "react";
//import { browserHistory } from 'react-router';
//import { useHistory } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

import './styles/login.css'


export default function Login(props){
  const [email, setEmail] = useState("");
  //const navigate = useNavigate ();
  
  const [password, setPassword] = useState("");
   console.log("render")
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {

    // console.log(email);
    axios.post('http://localhost:3000/login', {
      email,
      password
    })
    .then(res => {
      props.setloggedIn({
        ...props.loggedIn,
        loggedInStatus: true,
        user: res.data,
        email: res.data.email
        
      })
      
      
      console.log(res.data.email);
     
    })
    .catch(e => console.log(e))
    event.preventDefault();
  }

  return (
    <div className="login">
      <h1>Login</h1>
      
      <input
            className="login_form"
            type="email"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login_form_password"
            type="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit} disabled={!validateForm()}>Login</button>
      
      
    </div>
  )
}



