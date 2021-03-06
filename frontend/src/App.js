
import './App.css';
//import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Registration from './components/Landing/Registration'

 


function App() {

  const [loggedIn, setloggedIn] = useState({
    loggedInStatus: false,
    user: {},
    email: ""
  })   

  return(
    
    <BrowserRouter>
    <Navbar loggedIn ={loggedIn.loggedInStatus} email={loggedIn.email}/>
      <Routes>
        <Route path="/" element={!loggedIn.loggedInStatus ? <Navigate to="/landing"/> : <Home />} />
        <Route path="/login" element={loggedIn.loggedInStatus ? <Navigate to="/"/> : <Login loggedIn={loggedIn} setloggedIn={setloggedIn}  />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/landing" element={loggedIn.loggedInStatus ? <Navigate to="/"/> : <Landing loggedIn={loggedIn} setloggedIn={setloggedIn}/>} />
     
      </Routes>   
    </BrowserRouter> 
    
  ); 
}

export default App;
