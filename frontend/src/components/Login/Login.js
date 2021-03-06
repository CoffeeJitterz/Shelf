
import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
//import { browserHistory } from 'react-router';
//import { useHistory } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

import './styles/login.css'


export default function Login(props){
  const {handleHover} = props;
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
    <div className="login" onMouseEnter={handleHover}>
      <h1 className="login_header" >Login</h1>
      
      <input
            className="login_email"
            type="email"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login_password"
            type="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="register_message">
          <p className="register_message_text">Not registered yet? &nbsp;</p><Link to="/register" className="register_message_link">Click Here</Link>
          </div>
          <button className="login_button" onClick={handleSubmit} disabled={!validateForm()}>Login</button>
      
      
    </div>
  )
}



