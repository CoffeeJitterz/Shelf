import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

import { Create_bookmark } from "./Create_bookmark";

//import styles
import './styles/create_shelf_panel.css'

export function Create_shelf_panel(props){
  //deconstruct props
  const {Create, shelfName, color, setColor, onClick, user_id, shelf_id} = props;
  const [newShelfName, setNewShelfName] = useState('New Shelf');
  const newShelf = {user_id, name: newShelfName, color};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(newShelf)
  //   //axios request
  // axios.post('http://localhost:3000/shelves', newShelf)
  // .then((response) => {
  //   console.log("Shelf added")
  // })
  // }
  const createShelf = (e) => {
    e.preventDefault();
    Create('shelves', newShelf).then(()=>{
      console.log("Then I did this")
    })
  }
  return (
    <div className="create_shelf_panel">
      <h3>{newShelfName}</h3>
      <form className="create_shelf_form" onSubmit={createShelf}>
        <input 
          type="text"
          required
          value={newShelfName}
          onChange={e => setNewShelfName(e.target.value)}
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