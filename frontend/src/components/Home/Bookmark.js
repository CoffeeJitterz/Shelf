import React, { Fragment, useState } from "react";

//import components
import { HuePicker} from "react-color";
import { Edit_bookmark_panel } from "./Edit_bookmark_panel";

//import styles
import './styles/bookmark.css'

export function Bookmark(props){
//deconstruct props
const {id, url, name, websiteColor, shelfId} = props;

//Create modes for handelClick (toggle)
  const First = 'First';
  const Second = 'Second';
  const [mode, setMode] = useState(First)
  const handleClick = () => {

      if (mode === First) {
        setMode(Second)
      } else {
        setMode(First)
      }
  };

//set state for bookmarkName
const [newBookmarkName, setNewBookmarkName] = useState(name)

//Set state for bookmarkColor
const [bookmarkColor, setBookmarkColor] = useState(websiteColor)
console.log(shelfId)
  return (
    <Fragment>
    {/* Bookmark_stack */}
    {mode === First && (
      <section>
      <div className="bookmark" style={{backgroundColor: bookmarkColor}} onClick={()=> window.open(url, "_blank")}>
        <div>
          <p>{newBookmarkName}</p>
        </div>
      <button onClick={handleClick}>edit</button>
      </div>
      </section>
    )}
    {/* Bookmark with edit_panel */}
    {mode === Second && (
      <section>
      <div className="bookmark" style={{backgroundColor: bookmarkColor}}>
        <div>
          <p>{newBookmarkName}</p>
          <p>{url}</p>
        </div>
      <button onClick={handleClick}>^</button>
      </div>
      <Edit_bookmark_panel id={id} name={name} website={url} color={bookmarkColor} onClick={handleClick} setColor={setBookmarkColor} newName={newBookmarkName} setNewName={setNewBookmarkName} shelf_id={shelfId}/>
      </section>
    )}
  </Fragment>
  )
}