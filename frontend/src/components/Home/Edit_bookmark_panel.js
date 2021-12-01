import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//import components
import {Select_font} from './Select_font'

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faSave} from '@fortawesome/free-solid-svg-icons'

//import styles
import './styles/edit_bookmark_panel.css'
export function Edit_bookmark_panel(props){
//deconstruct props
const {Delete, Update, id, website, color, setColor, newName, setNewName, shelf_id, onClick, shelfColor, shelfCompColor, shelfCompColor2, bookmarkCompColor, font, setFont, handleChange} = props;

const [url, setUrl] = useState(website)
const editedBookmark = {shelf_id, id: id, name: newName, url: url, color: color, font: font};

const updateBookmark = (e) => {
  e.preventDefault();
  console.log('edited bookmark', editedBookmark)
  Update('bookmarks', id, editedBookmark).then(()=>{
    onClick()
  })
}

  return (
    <div className="edit_bookmark_panel" style={{backgroundColor: shelfCompColor}}>
      <form className="edit_bookmark_form" onSubmit={updateBookmark}>
        <input
          className="name_input"
          type="text"
          required
          value={newName}
          onChange={e => setNewName(e.target.value)}
          style={{backgroundColor: shelfCompColor, color: bookmarkCompColor, borderColor: shelfColor}}
        />
          <Select_font 
          shelfColor={shelfColor}
          color1={shelfCompColor}
          color2={shelfCompColor2}
          handleChange={e => setFont(e.target.value)}
          />
         <input 
         className="url_input"
          type="text"
          required
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={{backgroundColor: shelfCompColor, borderColor: shelfColor}}
        />
        <HuePicker className="color_picker" color={color} onChange={color => setColor(color.hex)}/>
        <button className="bookmark_save"><FontAwesomeIcon icon={faSave}></FontAwesomeIcon></button>
      </form>
    </div>
  )
}