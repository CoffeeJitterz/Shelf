import React, { Fragment, useState, useEffect } from "react";
import { useApplicationData } from "../../hooks/useApplicationData";
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
const {shelf, Delete, Create, Update, onClick, shelfName, bookmarks, shelfId, user_id, baseColor} = props;


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

//Create bookmark
const [url, setUrl] = useState("Url")
const [name, setName] = useState("null");
const [bookmarkColor, setBookmarkColor] = useState()

const newBookmark = {shelf_id: shelfId, name, url, color: bookmarkColor};
const createBookmark = (e) => {
  e.preventDefault();
  Create('bookmarks', newBookmark).then(()=>{
    
  })
}

//set state for newShelfName
const [newShelfName, setNewShelfName] = useState(shelfName);

//Set state for ShelfColor
const [shelfColor, setShelfColor] = useState(baseColor)

//create complimentary colors usering helper function complimentaryColor
// const compColor = complimentaryColor(hextoRgb(shelfColor), 180)
// const compColor2 = complimentaryColor(hextoRgb(shelfColor), 20)

//map through bookmarks array and pass props to <Bookmark />
const output = Array.isArray(shelf.bookmarks) && shelf.bookmarks.map((bookmark) => {return <Bookmark 
                        key={bookmark.id} 
                        name={bookmark.name} 
                        url={bookmark.url} 
                        id={bookmark.id}
                        websiteColor={bookmark.color} onClick={onClick} 
                        shelfId={shelfId} 
                        shelfName={shelfName} 
                        Delete={Delete}
                        Update={Update}
                        />})
  return (
    <Fragment>
   {/* Bookmark_stack */}
    {mode === First && (
    <section className="bookmark_stack" >
      <div style={{backgroundColor: shelfColor}}>
        <div className="shelf_name">
          <h1>{newShelfName}</h1>
          <button onClick={handleClick}>edit</button>
        </div>
        <div>
          <Create_bookmark 
              color={bookmarkColor} 
              setColor={setBookmarkColor} 
              name={name}
              setName={setName}
              url={url}
              setUrl={setUrl}
              shelfId={shelfId} 
              Create={createBookmark}
              />
          {output}
        </div>
      </div>
    </section>
    )}
    {/* Bookmark_stack with Edit_shelf_panel */}
     {mode === Second && (
    <section className="bookmark_stack" >
        <Edit_Shelf_panel 
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
    <div style={{backgroundColor: shelfColor}}>
      <div>
        <h1>{newShelfName}</h1>
        <button onClick={handleClick}>edit</button>
        </div>
      </div>
      
        <div>
          {output}
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
        </div>
    </section>
    )}
    </Fragment>
  )
}