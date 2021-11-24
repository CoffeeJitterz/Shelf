//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//import { render } from "react-dom";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
//import Bookmark from './components/Home/Bookmark';
import Login from './components/Login/Register/Login';
import Register from './components/Login/Register/Register';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'

function App() {

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(res => {
      console.log(res);
    })}, [])
  
  return(

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/register" element={<Register/>} />
        {/* <Route
        path="/login"
        element={<Navigate to="/" />}
    /> */}
      </Routes>
      

    </BrowserRouter> 
  ); 
}

export default App;
