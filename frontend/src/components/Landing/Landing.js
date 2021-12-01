
import React, { useState, Fragment } from "react";
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
    <Fragment>
      {mode === First && (
    <div className="landing_container" style={{backgroundImage: `url(${books1})`}}> 
     <div className="login_container" onMouseEnter={handleHover}>
      <Login loggedIn={loggedIn} setloggedIn={setloggedIn}/>
     </div>
       </div>
     )}
           {mode === Second && (
    <div className="landing_container" style={{backgroundImage: `url(${books2})`}}> 
     <div className="login_container" onMouseEnter={handleHover}>
      <Login loggedIn={loggedIn} setloggedIn={setloggedIn}/>
     </div>
       </div>
     )}
    </Fragment>
  

  )
}