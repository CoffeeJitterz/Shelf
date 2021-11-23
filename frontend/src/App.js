//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { render } from "react-dom";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bookmark from './components/Home/Bookmark';
import Login from './components/Login/Register/Login';
import Register from './components/Login/Register/Register';
import Home from './components/Home/Home';

function App() {

  useEffect(() => {
    axios.get('http://localhost:3000/bookmarks')
    .then(res => {
      console.log(res);
    })}, [])
  

  return(

    <BrowserRouter>
      <div className="App">
      <h1>Bookmarks</h1>
      <nav>
        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      </div>

    </BrowserRouter> 
  ); 
}

export default App;
