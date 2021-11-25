import React, { Fragment, useState } from "react";

//import components
import { HuePicker} from "react-color";
import { Edit_bookmark_panel } from "./Edit_bookmark_panel";

//import styles
import './styles/bookmark.css'

export function Bookmark(props){
//deconstruct props
const {url, name, websiteColor} = props;

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

//Set state for bookmarkColor
const [bookmarkColor, setBookmarkColor] = useState(websiteColor)

  return (
    <Fragment>
    {/* Bookmark_stack */}
    {mode === First && (
      <section>
      <div className="bookmark" style={{backgroundColor: bookmarkColor}} onClick={()=> window.open(url, "_blank")}>
        <div>
          <p>{name}</p>
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
          <p>{name}</p>
          <p>{url}</p>
        </div>
      <button onClick={handleClick}>^</button>
      </div>
      <Edit_bookmark_panel name={name} website={url} color={bookmarkColor} setColor={setBookmarkColor}/>
      </section>
    )}
  </Fragment>
  )
}