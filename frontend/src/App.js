//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bookmark from './components/Bookmark';

function App() {


  useEffect(() => {
    axios.get('http://localhost:3000/bookmarks')
    .then(res => {
      console.log(res);
    })}, [])
  
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Bookmarks</h1>
      <nav>
        <Link to="/">Login / Register</Link>
      </nav>
      

      <Routes>
        <Route path="/bookmarks" element={<Bookmark />}> </Route>
        <Route></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
