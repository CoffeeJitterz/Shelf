
import React, { useState } from "react";
import { browserHistory } from 'react-router';
import { useHistory } from "react-router-dom";




export default function Login(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
          <button type="submit" onClick={props.onClick} disabled={!validateForm()}>Login</button>
      </form>
      
    </div>
  )
}

// function Login(props) {
//   //const history = useHistory();

//   const username = useFormInput('');
//   const password = useFormInput('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
 
//   // handle button click of login form
//   const handleLogin = () => {
//    useHistory.push('/');
//   //browserHistory.push('/')
//   }
 
//   return (
//     <div>
//       Login<br /><br />
//       <div>
//         Username<br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password<br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
//     </div>
//   );
// }
 
// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
 
//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }
 
// export default Login;
// import React, { Component } from 'react';
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// class Login extends Component {

//     state = {
//         username: '',
//         email: '',
//         password: '',
//         errors: ''
//     }

//     handleChange = (event) => {
//         const { name, value } = event.target

//         this.setState({
//             [name]: value
//         })

//     };

//     handleSubmit = (event) => {
//         event.preventDefault()
//     };

//     render() {
//         const { username, email, password } = this.state

//         return (
//             <div>
//                 <h1>Log In</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         placeholder="username"
//                         type="text"
//                         name="username"
//                         value={username}
//                         onChange={this.handleChange}
//                     />
//                     <input
//                         placeholder="email"
//                         type="text"
//                         name="email"
//                         value={email}
//                         onChange={this.handleChange}
//                     />
//                     <input
//                         placeholder="password"
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={this.handleChange}
//                     />
//                     <button placeholder="submit" type="submit">
//                         Log In
//                     </button>
//                     <div>
//                         or <Link to='/signup'>sign up</Link>
//                     </div>

//                 </form>
//             </div>
//         );
//     }
// }
// export default Login;

