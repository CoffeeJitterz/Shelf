import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faSave} from '@fortawesome/free-solid-svg-icons'

//import styles
import './styles/edit_shelf_panel.css'

export function Edit_Shelf_panel(props){
//deconstruct props
const {Delete, Update, id, shelfName, color, setColor, onClick, newName, setNewName, user_id, shelfCompColor, shelfCompColor2} = props;
const editedShelf = {user_id, id, name: newName, color};

const updateShelf = (e) => {
  console.log('edited shelf', editedShelf)
  e.preventDefault();
  Update('shelves', id, editedShelf).then(()=>{
    console.log("THEN I DID THIS")
  })
}
// const deleteShelf = () => {
//   Delete('shelves', id).then(()=>{
//     console.log("THEN I DID THIS")
//   })
// }
  return (
    <div className="edit_shelf_panel">
   
     <form style={{backgroundColor: shelfCompColor}} className="edit_shelf_form" onSubmit={updateShelf}>
       <HuePicker className="color_picker" color={color} onChange={color => setColor(color.hex)}/>
        <input
        style={{color: shelfCompColor2}}
          className="name_input"
          type="text"
          required
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <div className="edit_shelf_buttons">
            <button className="shelf_save"><FontAwesomeIcon icon={faSave}></FontAwesomeIcon></button>                   
          <div>
            
          </div>
        </div>
        </form>
      </div>
  )
}