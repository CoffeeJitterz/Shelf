import React, { Fragment, useState, useEffect } from "react";
import {Create_shelf_panel} from './Create_shelf_panel'

export function Create_shelf(props){
  const {Create, user_id} = props;
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
const [newShelfColor, setShelfColor] = useState('#fff')

  return (
    <Fragment>
      {mode === First && (
        <div >
            <button onClick={handleClick} >CREATE SHELF</button>
          </div>
  
      )}
      {mode === Second && (
        <div >
            <Create_shelf_panel 
              onClick={handleClick} 
              color={newShelfColor} 
              setColor={setShelfColor} 
              user_id={user_id}
              Create={Create}
              />
          </div>
  
      )}
    </Fragment>
    )
}