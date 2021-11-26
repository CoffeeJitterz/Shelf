import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

export function Edit_bookmark_panel(props){
//deconstruct props
const {Delete, Update, id, website, color, setColor, onClick, newName, setNewName, shelf_id} = props;
console.log('bookmark id', id)
const [url, setUrl] = useState(website)
const editedBookmark = {shelf_id, id: id, name: newName, url: url, color: color};

const updateBookmark = (e) => {
  e.preventDefault();
  Update('bookmarks', id, editedBookmark).then(()=>{
    console.log("THEN I DID THIS")
  })
}
const deleteBookmark = () => {
  Delete('bookmarks', id).then(()=>{
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
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Save</button>
        <button onClick={deleteBookmark}>Delete</button>
        </div>
        </form>
        <button onClick={deleteBookmark}>cancel</button>
      </div>
  )
}