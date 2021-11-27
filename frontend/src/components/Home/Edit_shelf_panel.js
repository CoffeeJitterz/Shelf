import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

export function Edit_Shelf_panel(props){
//deconstruct props
const {Delete, Update, id, shelfName, color, setColor, onClick, newName, setNewName, user_id} = props;
const editedShelf = {user_id, id, name: newName, color};

const updateShelf = (e) => {
  console.log(editedShelf)
  e.preventDefault();
  Update('shelves', id, editedShelf).then(()=>{
    console.log("THEN I DID THIS")
  })
}
const deleteShelf = () => {
  Delete('shelves', id).then(()=>{
    console.log("THEN I DID THIS")
  })
}
  return (
    <div className="edit_shelf_panel">
     <form className="edit_shelf_form" onSubmit={updateShelf}>
        <input 
          type="text"
          required
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button onClick={onClick}>Save</button>
        <button onClick={deleteShelf}>Delete</button>
        </div>
        </form>
        <button onClick={onClick}>cancel</button>
      </div>
  )
}