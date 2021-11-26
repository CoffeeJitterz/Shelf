import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//import styles
import './styles/create_bookmark_panel.css'

export function Create_bookmark_panel(props){
  //deconstruct props
  const {Create, shelfName, shelfId, color, setColor, onClick} = props;
  const [url, setUrl] = useState("Url")
  const [name, setName] = useState("null");
  const bookmark = {shelf_id: shelfId, name, url, color};
  
const createBookmark = (e) => {
  e.preventDefault();
  Create('bookmarks', bookmark).then(()=>{
    console.log("Then I did this")
  })
}
  return (
    <div className="create_bookmark_panel" >
      <p>Create Bookmark on {shelfName}</p>

      <div className="displayBookmark" style={{backgroundColor: color}} >
        <p>{name}</p>
      </div>
        <form className="create_bookmark_form" onSubmit={createBookmark}>
        <input 
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
          type="text"
          required
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Create</button>
        </div>
        </form>
      </div>
  )
}