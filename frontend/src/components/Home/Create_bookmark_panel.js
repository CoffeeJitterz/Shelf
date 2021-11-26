import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//import styles
import './styles/create_bookmark_panel.css'

export function Create_bookmark_panel(props){
  //deconstruct props
  const {shelfName, shelfId, color, setColor, onClick} = props;
  const [url, setUrl] = useState("Url")
  const [name, setName] = useState("null");
  const bookmark = {shelfId, name, url, color};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookmark)
    //axios request
    console.log('line 14')
  axios.post('http://localhost:3000/bookmarks', bookmark)
  .then((response) => {
    console.log("Bookmark added")
  })
  }
  

  

  return (
    <div className="create_bookmark_panel" >
      <p>Create Bookmark on {shelfName}</p>

      <div className="displayBookmark" style={{backgroundColor: color}} >
        <p>{name}</p>
      </div>
        <form className="create_bookmark_form" onSubmit={handleSubmit}>
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