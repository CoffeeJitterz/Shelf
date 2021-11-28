import React, { Fragment, useState } from "react";

//import components
import { HuePicker} from "react-color";
import { Edit_bookmark_panel } from "./Edit_bookmark_panel";

//import hooks
import { ToggleWindow } from "../../hooks/useToggleWindow";

//import styles
import './styles/bookmark.css'

export function Bookmark(props){
//deconstruct props
const {Delete, Update, id, url, name, websiteColor, shelfId, onClick} = props;

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
console.log(shelfId)
  return (
    <Fragment>
    {/* Bookmark_stack */}
    {mode === Closed && (
      <section className="bookmark_container">
      <div className="bookmark" style={{backgroundColor: bookmarkColor}} onClick={()=> window.open(url, "_blank")}>
        <div>
          <p>{newBookmarkName}</p>
        </div>
      </div>
      <input className="edit_button" type="button" Value="Edit Bookmark" onClick={handleClick}/>
      </section>
    )}
    {/* Bookmark with edit_panel */}
    {mode === Open && (
      <section>
      <div className="bookmark" style={{backgroundColor: bookmarkColor}}>
        <div>
          <p>{newBookmarkName}</p>
          <p>{url}</p>
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