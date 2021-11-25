import React, { Fragment, useState, useEffect } from "react";
import {Create_bookmark_panel} from './Create_bookmark_panel'
import axios from 'axios';

export function Create(props){
//Create modes for handelClick (toggle)
const First = 'First';
const Second = 'Second';
const [mode, setMode] = useState(First)
const handleClick = () => {
    if (mode === First) {
      setMode(Second)
      console.log(mode)
    } else {
      setMode(First)
      console.log(mode)
    }
  };

//Set state for newBookmarkColor 
const [newBookmarkColor, setNewBookmarkColor] = useState('#fff')

  return (
    <Fragment>
      {mode === First && (
        <div >
            <button onClick={handleClick} >CREATE BOOKMARK</button>
          </div>
  
      )}
      {mode === Second && (
        <div >
            <Create_bookmark_panel onClick={handleClick} color={newBookmarkColor} setColor={setNewBookmarkColor}/>
          </div>
  
      )}
    </Fragment>
    )
}