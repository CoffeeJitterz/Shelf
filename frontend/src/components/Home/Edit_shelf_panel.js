import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

export function Edit_Shelf_panel(props){
//deconstruct props
const {id, shelfName, color, setColor, onClick, newName, setNewName, user_id} = props;
const editedShelf = {user_id, id, name: newName, color};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(editedShelf)
  //axios request
axios.put(`http://localhost:3000/shelves/${id}`, editedShelf)
.then((response) => {
  console.log("Shelf updated")
})
}
const handleDelete = (e) => {
  //axios delete request
axios.delete(`http://localhost:3000/shelves/${id}`)
.then((response) => {
console.log("Shelf Deleted")
})}
  return (
    <div className="edit_shelf_panel">
     <form className="edit_shelf_form" onSubmit={handleSubmit}>
        <input 
          type="text"
          required
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Save</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
        </form>
        <button onClick={onClick}>cancel</button>
      </div>
  )
}