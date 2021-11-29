import React, { Fragment, useState, useEffect } from "react";
import {Create_shelf_panel} from './Create_shelf_panel'

//import helpers
import { hextoRgb, complimentaryColor, increaseBrightness } from '../../helpers/color_helpers';

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

import './styles/create_shelf.css'

export function Create_shelf(props){
  const {Create, user_id, shelves} = props;
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

// const [createShelfColor] = shelves;
// console.log("shelvesShelves", createShelfColor)
// const createShelfColor = shelves[0].color 
// const brightColor = increaseBrightness(createShelfColor, 50)
  return (
    <Fragment>
      {mode === First && (
        <div className="create_shelf" style={{backgroundColor:newShelfColor}}>
            <button className="open_create_shelf" onClick={handleClick}><FontAwesomeIcon icon={faPlusCircle}/></button>
          </div>
  
      )}
      {mode === Second && (
        <div className="create_shelf_open">
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