import React, { Fragment, useState, useEffect } from "react";
import {Create_bookmark_panel} from './Create_bookmark_panel'
import axios from 'axios';

//import styles
import './styles/create_bookmark.css'


export function Create_bookmark(props){
  const {shelfId, shelfName} = props;
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
        <div className="create_bookmark">
          <input className="open_button" value="+" type="button" onClick={handleClick} />
         
          </div>
  
      )}
      {mode === Second && (
        <div >
            <Create_bookmark_panel onClick={handleClick} color={newBookmarkColor} setColor={setNewBookmarkColor} shelfId={shelfId} shelfName={shelfName}/>
            <input className="close_button" value="-" type="button" onClick={handleClick} data-hover="Create New Bookmark" />
          </div>
  
      )}
    </Fragment>
    )
}