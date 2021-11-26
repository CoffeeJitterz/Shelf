import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//import helpers
import { hextoRgb, complimentaryColor } from '../../helpers/color_helpers';

//import components
import {Bookmark} from './Bookmark'
import { Edit_Shelf_panel } from "./Edit_shelf_panel";
import {Create_bookmark} from './Create_bookmark'

//import styles
import './styles/bookmark_stack.css'

export function Bookmark_stack(props){
//deconstruct props
const {onClick, shelfName, bookmarks, shelfId} = props;

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

//Set state for ShelfColor
const [shelfColor, setShelfColor] = useState('#fff')

//create complimentary colors usering helper function complimentaryColor
const compColor = complimentaryColor(hextoRgb(shelfColor), 180)
const compColor2 = complimentaryColor(hextoRgb(shelfColor), 20)

//map through bookmarks array and pass props to <Bookmark />
const output = Array.isArray(bookmarks) && bookmarks.map((bookmark) => {return <Bookmark key={bookmark.id} name={bookmark.name} url={bookmark.url} websiteColor={bookmark.color} onClick={onClick} shelfId={shelfId} shelfName={shelfName} />})
console.log(shelfName)
  return (
    <Fragment>
   {/* Bookmark_stack */}
    {mode === First && (
    <section className="bookmark_stack" >
      <div style={{backgroundColor: shelfColor}}>
        <div className="shelf_name" style={     {backgroundColor:`rgb(${compColor[0]}, ${compColor[1]}, ${compColor[2]})`}}>
          <h1  style={{color:`rgb(${compColor2[0]}, ${compColor2[1]}, ${compColor2[2]})`}}>{shelfName}</h1>
          <button onClick={handleClick}>edit</button>
        </div>
        <div>
          <Create_bookmark onClick={handleClick} color={shelfColor} setColor={setShelfColor} shelfId={shelfId} shelfName={shelfName}/>
          {output}
        </div>
      </div>
    </section>
    )}
    {/* Bookmark_stack with Edit_shelf_panel */}
     {mode === Second && (
    <section className="bookmark_stack" >
    <div style={{backgroundColor: shelfColor}}>
      <div className="shelf_name" style={     {backgroundColor:`rgb(${compColor[0]}, ${compColor[1]}, ${compColor[2]})`}}>
        <h1  style={{color:`rgb(${compColor2[0]}, ${compColor2[1]}, ${compColor2[2]})`}}>{shelfName}</h1>
        <button onClick={handleClick}>V</button>
        </div>
      </div>
        <Edit_Shelf_panel shelfName={shelfName} color={shelfColor} setColor={setShelfColor} />
        <div>
          {output}
          <Create_bookmark onClick={handleClick} color={shelfColor} setColor={setShelfColor} shelfId={shelfId} shelfName={shelfName}/>
        </div>
    </section>
    )}
    </Fragment>
  )
}