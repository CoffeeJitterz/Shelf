import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

export function Edit_bookmark_panel(props){
//deconstruct props
const {id, website, color, setColor, onClick, newName, setNewName, shelf_id} = props;
console.log('bookmark id', id)
const [url, setUrl] = useState(website)
const editedBookmark = {shelf_id, id: id, name: newName, url: url, color: color};
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(editedBookmark)
  //axios update request
axios.put(`http://localhost:3000/bookmarks/${id}`, editedBookmark)
.then((response) => {
  console.log("Bookmark Updated")
})
}

const handleDelete = (e) => {
    //axios delete request
axios.delete(`http://localhost:3000/bookmarks/${id}`)
.then((response) => {
  console.log("Bookmark Deleted")
})
}
  return (
    <div className="edit_bookmark_panel">
     <form className="edit_bookmark_form" onSubmit={handleSubmit}>
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