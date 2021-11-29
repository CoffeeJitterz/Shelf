import React, { Fragment, useState } from "react";

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWrench, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

//import components
import { HuePicker} from "react-color";
import { Edit_bookmark_panel } from "./Edit_bookmark_panel";

//import hooks
import { ToggleWindow } from "../../hooks/useToggleWindow";

//import helpers
import { hextoRgb, complimentaryColor } from '../../helpers/color_helpers';

//import styles
import './styles/bookmark.css'

export function Bookmark(props){
//deconstruct props
const {Delete, Update, id, url, name, websiteColor, shelfId, onClick, shelfCompColor} = props;

//Create modes for handelClick (toggle)
const Closed = 'Closed';
const Open = 'Open'
  const [mode, setMode] = useState(Closed)
  const handleClick = () => {

      if (mode === Closed) {
        setMode(Open)
      } else {
        setMode(Closed)
      }
  };

//set state for bookmarkName
const [newBookmarkName, setNewBookmarkName] = useState(name)

//Set state for bookmarkColor
const [bookmarkColor, setBookmarkColor] = useState(websiteColor ? websiteColor : '#fff')

//set complimentary colors
const compColor = complimentaryColor(hextoRgb(bookmarkColor), 255)
const compColor2 = complimentaryColor(hextoRgb(bookmarkColor), -90)
  return (
    <Fragment>
    {/* Bookmark_stack */}
    {mode === Closed && (
      <section className="bookmark_container">
        <div className="bookmark_wrapper" style={{backgroundColor: shelfCompColor}}>
      <div className="bookmark" style={{backgroundColor: bookmarkColor, borderColor: 'black' }}>
      <div className="click_box"  onClick={()=> window.open(url, "_blank")}>
        
          <p className="bookmark_name" style={{color: compColor}}>{newBookmarkName}</p>
      </div>
      <button className="bookmark_wrench" onClick={handleClick}><FontAwesomeIcon icon={faWrench}></FontAwesomeIcon></button>
      </div>
      </div>
      </section>
    )}
    {/* Bookmark with edit_panel */}
    {mode === Open && (
      <section className="bookmark_container">
        <div className="bookmark_wrapper" style={{backgroundColor: shelfCompColor}}>
      <div className="bookmark" style={{backgroundColor: bookmarkColor}}>
        <div className="click_box"  onClick={()=> window.open(url, "_blank")}>
          <p className="bookmark_name" style={{color: compColor}}>{newBookmarkName}</p>
          <p>{url}</p>
        </div>
        <button className="bookmark_wrench" onClick={handleClick}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
        </div>
      </div>
      
      <Edit_bookmark_panel 
          id={id} 
          name={name} 
          website={url} 
          color={bookmarkColor}
          setColor={setBookmarkColor} 
          newName={newBookmarkName} 
          setNewName={setNewBookmarkName} 
          shelf_id={shelfId}
          Delete={Delete}
          Update={Update}
          onClick={onClick}
          />
          
      </section>
    )}
  </Fragment>
  )
}