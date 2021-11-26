//import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//import styles
import './styles/create_shelf_panel.css'

export function Create_shelf_panel(props){
  //deconstruct props
  const {shelfName, color, setColor, onClick} = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    //axios request
    console.log('line 14')
  axios.post('http://localhost:3000/bookmarks')
  .then((response) => {
    console.log("Bookmark added")
  })
  }
  return (
    <div className="create_shelf_panel">
      <h3>Create Shelf Panel </h3>
      <form className="create_bookmark_form" onSubmit={handleSubmit}>
        <input 
          type="text"
          required
          // value={}
          // onChange={e => setName(e.target.value)}
        />
        <input 
          type="text"
          required
          // value={url}
          // onChange={e => setUrl(e.target.value)}
        />
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Create</button>
        </div>
        </form>
        <button onClick={onClick}>cancel</button>
        </div>
      
  )
}