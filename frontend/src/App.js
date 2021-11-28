
import './App.css';
//import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login/Register/Login';
import Register from './components/Login/Register/Register';
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
        <Route path="/" element={loggedIn ? <Home/> : <Login/>} /> 
        <Route path="/login" element={loggedIn.loggedInStatus ? <Navigate to="/"/> : <Login loggedIn={loggedIn} setloggedIn={setloggedIn}  />} />
        <Route path="/register" element={<Register/>} />
     
      </Routes>   
    </BrowserRouter> 
  ); 
}

export default App;
