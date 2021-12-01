import React, { Fragment, useState } from "react";

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWrench, faTimesCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

//import components
import { HuePicker} from "react-color";
import { Edit_bookmark_panel } from "./Edit_bookmark_panel";
import Confirm_delete_boomark from "./Confirm_delete_bookmark"

//import hooks
import { ToggleWindow } from "../../hooks/useToggleWindow";

//import helpers
import { hextoRgb, complimentaryColor } from '../../helpers/color_helpers';

//import styles
import './styles/bookmark.css'

export function Bookmark(props){
//deconstruct props
const {Delete, Update, id, url, name, websiteColor, shelfId, onClick, onDeleteClick, shelfColor, shelfCompColor, shelfCompColor2, bookmarkFont} = props;

const [font, setFont] = useState(bookmarkFont);

const deleteBookmark = () => {
  Delete('bookmarks', id).then(()=>{
    onDeleteClick()
  })
}
//Create modes for handelClick (toggle)
const Closed = 'Closed';
const Open = 'Open'
const confirmDelete = 'Delete'
  const [mode, setMode] = useState(Closed)
  const handleClick = () => {

      if (mode === Closed) {
        setMode(Open)
        console.log(mode)
      } else {
        setMode(Closed)
        console.log(mode)
      }
  };
  const handleConfirmDelete = () => {
    setMode(confirmDelete)
  }
  const handleConfirmClick = () => {
    setMode(Closed)
  }
  const handleChange = e => {
    setFont(e.target.value )
  }  
  

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
          <p className="bookmark_name" style={{color: compColor, fontFamily: bookmarkFont}}>{newBookmarkName}</p>
          <p className="bookmark_url">{url}</p>
      </div>
      <div className="bookmark_buttons">
      <button className="bookmark_wrench" onClick={handleClick}><FontAwesomeIcon icon={faWrench}></FontAwesomeIcon></button>
      <button className="bookmark_delete" onClick={handleConfirmDelete}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
      </div>
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
            <p className="bookmark_name" style={{color: compColor, fontFamily: font}}>{newBookmarkName}</p>
          <p className="bookmark_url">{url}</p>
        </div>
        <div className="bookmark_buttons">
        <button className="bookmark_exit" onClick={handleClick}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
        </div>
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
          font={font}
          setFont={setFont} 
          handleChange={handleChange}
          shelf_id={shelfId}
          Delete={Delete}
          Update={Update}
          onClick={handleClick}
          shelfColor={shelfColor}
          shelfCompColor={shelfCompColor}
          shelfCompColor2={shelfCompColor2}
          bookmarkCompColor={compColor}
          />
          
      </section>
    )}
    {mode === confirmDelete && (
      <section className="bookmark_container">
      <div className="bookmark_wrapper" style={{backgroundColor: shelfCompColor}}>
       <Confirm_delete_boomark 
          deleteBookmark={deleteBookmark}
          handleClick={handleConfirmClick}
          bookmarkName={name}/>
        </div>
      </section>
    )} 
  </Fragment>
  )
}