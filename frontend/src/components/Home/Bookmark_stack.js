import React, { Fragment, useState, useEffect } from "react";
import { useApplicationData } from "../../hooks/useApplicationData";
import { HuePicker} from "react-color";

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWrench, faTimesCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

//import helpers
import { hextoRgb, complimentaryColor, increaseBrightness} from '../../helpers/color_helpers';

//import components
import {Bookmark} from './Bookmark'
import { Edit_Shelf_panel } from "./Edit_shelf_panel";
import {Create_bookmark} from './Create_bookmark'
import {Confirm_delete_shelf} from './Confirm_delete_shelf'

//import styles
import './styles/bookmark_stack.css'

export function Bookmark_stack(props){
//deconstruct props
const {shelf, Delete, Create, Update, shelfName, bookmarks, shelfId, user_id, baseColor} = props;

//Create modes for handelClick (toggle)
const First = 'First';
const Second = 'Second';
const confirmDelete= 'confirmDelete';
const [mode, setMode] = useState(First)
const handleClick = () => {
  if (mode === First) {
    setMode(Second)
    console.log(mode)
  } else if (mode === confirmDelete) {
    setMode(Second)
  } else {
    setMode(First)
    console.log(mode)
  }
};



//Create bookmark
const [url, setUrl] = useState("Url")
const [name, setName] = useState("New Bookmark");
const [bookmarkColor, setBookmarkColor] = useState('#fff')
const [font, setFont] = useState();

const deleteShelf = () => {
    Delete('shelves', shelfId).then(()=>{
      handleClick()
    })
  }
const handleConfirmDelete = () => {
  setMode(confirmDelete)
}
const handleDeleteClick = () => {
  setMode(First)
}


//set state for newShelfName
const [newShelfName, setNewShelfName] = useState(shelfName);

//Set state for ShelfColor
const [shelfColor, setShelfColor] = useState(baseColor ? baseColor : '#fff')

//create complimentary colors usering helper function complimentaryColor
const compColor = complimentaryColor(hextoRgb(shelfColor), 255)
const compColor2 = complimentaryColor(hextoRgb(shelfColor), 90)
const brightColor = increaseBrightness(shelfColor, 50)

//map through bookmarks array and pass props to <Bookmark />
const output = Array.isArray(shelf.bookmarks) && shelf.bookmarks.map((bookmark) => {return <Bookmark 
                        key={bookmark.id}
                        shelfCompColor2={compColor}
                        shelfCompColor={brightColor}
                        shelfColor={shelfColor}
                        name={bookmark.name} 
                        url={bookmark.url} 
                        id={bookmark.id}
                        websiteColor={bookmark.color} 
                        font={font}
                        setFont={setFont}
                        bookmarkFont={bookmark.font}
                        onClick={handleClick} 
                        onDeleteClick={handleDeleteClick} 
                        shelfId={shelfId} 
                        shelfName={shelfName} 
                        Delete={Delete}
                        Update={Update}
                        />})
  return (
    <Fragment>
   {/* Bookmark_stack */}
    {mode === First && (
    <section className="bookmark_stack" style={{backgroundColor: shelfColor}}>
      <div className="bookmark_stack_buttons">
      <button className="bookmark_stack_wrench" onClick={handleClick}><FontAwesomeIcon icon={faWrench}></FontAwesomeIcon></button>
      <button className="bookmark_stack_trash" onClick={handleConfirmDelete}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
      </div>
      <div style={{backgroundColor: brightColor}}>
          <h1 className="shelf_name" style={{color: compColor}}>{newShelfName}</h1>
      </div>
          <Create_bookmark
              Create={Create}
              shelfCompColor2={compColor}
              shelfCompColor={brightColor}
              shelfColor={shelfColor}
              color={bookmarkColor} 
              setColor={setBookmarkColor} 
              name={name}
              setName={setName}
              url={url}
              setUrl={setUrl}
              shelfId={shelfId} 
              />
          {output}
    </section>
    )}
    {/* Bookmark_stack with Edit_shelf_panel */}
     {mode === Second && (
    <section className="bookmark_stack" style={{backgroundColor: shelfColor}}>
      <button className="bookmark_stack_exit" onClick={handleClick}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
        <Edit_Shelf_panel
        shelfCompColor2={compColor}
        shelfCompColor={brightColor} 
        shelfName={shelfName} 
        color={shelfColor} 
        setColor={setShelfColor} 
        onClick={handleClick} 
        newName={newShelfName} 
        setNewName={setNewShelfName} 
        id={shelfId} 
        user_id={user_id}
        Delete={Delete}
        Update={Update}
        />
      <div >
        <div style={{backgroundColor: brightColor}}>
        <h1 className="shelf_name" style={{color:compColor}}>{newShelfName}</h1>
        </div>
      </div>  
          <Create_bookmark 
            onClick={handleClick} 
            color={bookmarkColor} 
            setColor={setBookmarkColor} 
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
            shelfId={shelfId} 
            shelfName={shelfName}/>
          {output}    
    </section>
    )}
    {mode === confirmDelete && (
      <section className="bookmark_stack">
        {/* <div className="delete_confirm_message">
        <p className="bookmark_name" style={{color: compColor}}>AreYou Sure You Want To Delete?</p>
        <button onClick={deleteShelf}>Yes</button><button onClick={handleClick} >No</button>
        </div> */}
        <Confirm_delete_shelf 
            deleteShelf={deleteShelf}
            handleClick={handleClick}
            shelfName={shelfName}
        />
        <Create_bookmark 
            onClick={handleClick} 
            color={bookmarkColor} 
            setColor={setBookmarkColor} 
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
            shelfId={shelfId} 
            shelfName={shelfName}/>
          {output}            
      </section>
    )}
    </Fragment>
  )
}