import React, { Fragment, useState, useEffect } from "react";
import {Create_bookmark_panel} from './Create_bookmark_panel'
import axios from 'axios';


//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'


//import styles
import './styles/create_bookmark.css'


export function Create_bookmark(props){
  const {Create, name, setName, url, setUrl, color, setColor, shelfId, shelfName, shelfColor, shelfCompColor} = props;
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
        <div className="create_bookmark" style={{backgroundColor: shelfCompColor}}>
          <button className="open_create_bookmark"><FontAwesomeIcon icon={faPlusCircle} onClick={handleClick} /></button>        
          </div>
  
      )}
      {mode === Second && (
        <div >
            <Create_bookmark_panel
               color={color} 
               setColor={setColor} 
               name={name}
               setName={setName}
               url={url}
              setUrl={setUrl} 
              onClick={handleClick} 
              shelfId={shelfId} 
              shelfName={shelfName}
              Create={Create}
              />
          </div>
  
      )}
    </Fragment>
    )
}