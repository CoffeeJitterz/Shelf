
import './App.css';
//import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'


function App() {

  const [loggedIn, setloggedIn] = useState({
    loggedInStatus: false,
    user: {}
  })    
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={!loggedIn ? <Navigate to="/landing"/> : <Home />} />
        <Route path="/login" element={loggedIn.loggedInStatus ? <Navigate to="/"/> : <Login loggedIn={loggedIn} setloggedIn={setloggedIn}  />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing/>} />
     
      </Routes>   
    </BrowserRouter> 
  ); 
}

export default App;
