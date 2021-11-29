import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faSave} from '@fortawesome/free-solid-svg-icons'

//import styles
import './styles/edit_bookmark_panel.css'
export function Edit_bookmark_panel(props){
//deconstruct props
const {Delete, Update, id, website, color, setColor, newName, setNewName, shelf_id, onClick} = props;

const [url, setUrl] = useState(website)
const editedBookmark = {shelf_id, id: id, name: newName, url: url, color: color};

const updateBookmark = (e) => {
  e.preventDefault();
  Update('bookmarks', id, editedBookmark).then(()=>{
    console.log("THEN I DID THIS")
  })
}




  return (
    <div className="edit_bookmark_panel">
     <form className="edit_bookmark_form" onSubmit={updateBookmark}>
        <input 
          type="text"
          required
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
         <input 
          type="text"
          required
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <HuePicker className="color_picker" color={color} onChange={color => setColor(color.hex)}/>
        <div className="edit_bookmark_buttons">
        <button className="bookmark_save" onClick={onClick}><FontAwesomeIcon icon={faSave}></FontAwesomeIcon></button>
        </div>
        </form>
      </div>
  )
}