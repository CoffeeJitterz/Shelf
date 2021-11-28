
import axios from "axios";
import React, { useState } from "react";

export default function Login(props){
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
   console.log("render")
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {

    console.log(email);
    axios.post('http://localhost:3000/login', {
      email,
      password
    })
    .then(res => {
      props.setloggedIn({
        ...props.loggedIn,
        loggedInStatus: true,
        user: res.data
      })
      console.log(res);
    })
    .catch(e => console.log(e))
    event.preventDefault();
  }

  return (
    <div>
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



