import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

//import styles
import './styles/create_shelf_panel.css'

export function Create_shelf_panel(props){
  //deconstruct props
  const {shelfName, color, setColor, onClick} = props;
  const [newShelfName, setNewShelfName] = useState('New Shelf');
  const newShelf = {newShelfName, color};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newShelf)
    //axios request
  axios.post('http://localhost:3000/shelves', newShelf)
  .then((response) => {
    console.log("Shelf added")
  })
  }
  return (
    <div className="create_shelf_panel">
      <h3>{newShelfName}</h3>
      <form className="create_shelf_form" onSubmit={handleSubmit}>
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