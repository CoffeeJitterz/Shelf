
import React, { useState, Fragment } from "react";
import App from "../../App"
import bookmark from '../bookmark.jpeg'
import books1 from '../books3.png'
import books2 from '../books4.png'

import Register from '../Login/Register'

import './styles/registration.css'

export default function Registration (props){
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
    <Fragment>
      {mode === First && (
    <div className="registration_container" style={{backgroundImage: `url(${books1})`}}> 
     <div className="register_container" onMouseEnter={handleHover}>
      <Register />
     </div>
       </div>
     )}
           {mode === Second && (
    <div className="registration_container" style={{backgroundImage: `url(${books2})`}}> 
     <div className="register_container" onMouseEnter={handleHover}>
     <Register />
     </div>
       </div>
     )}
    </Fragment>
  

  )
}