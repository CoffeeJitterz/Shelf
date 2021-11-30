
import React, { useState } from "react";
import App from "../../App"
import bookmark from '../bookmark.jpeg'
import books1 from '../books1.png'
import books2 from '../books2.png'

import Login from '../Login/Login'

import './styles/landing.css'

export default function Landing(props){
const {loggedIn, setloggedIn} = props;
//Create modes for handelClick (toggle)
const First = 'First';
const Second = 'Second'
  const [mode, setMode] = useState(Second)
  const handleHover = () => {

      if (mode === First) {
        setMode(Second)
        console.log(mode)
      } else {
        setMode(First)
        console.log(mode)
      }
  };

  return (
   <div className="landing_container"> 
     <Login loggedIn={loggedIn} setloggedIn={setloggedIn}/>
    {mode === First && (
      <div onMouseEnter={handleHover}>
        <img src={books1} /> 
      </div>
    )}
    {mode === Second && (
       <div onMouseEnter={handleHover}>
         <img src={books2} />       
       </div>
    )}
   </div>

  )
}