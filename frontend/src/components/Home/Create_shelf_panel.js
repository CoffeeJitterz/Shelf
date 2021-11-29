import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

import { Create_bookmark } from "./Create_bookmark";

//import helpers
import { hextoRgb, complimentaryColor, increaseBrightness } from '../../helpers/color_helpers';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

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
  //create colors
  const brightColor = increaseBrightness(color, 50);
  const compColor = complimentaryColor(hextoRgb(color), 255);
  return (
    <section className="create_shelf_panel" style={{backgroundColor: color}}>
      <div className="new_shelf_name_box" style={{backgroundColor: brightColor}}>
      <h1 className="new_shelf_name" style={{color: compColor}}>{newShelfName}</h1>
      </div>
      <form className="create_shelf_form" onSubmit={createShelf}>
        <input
          className="name_input"
          type="text"
          required
          value={newShelfName}
          onChange={e => setNewShelfName(e.target.value)}
        />
        <HuePicker className="color_picker" color={color} onChange={color => setColor(color.hex)}/>
        <div className="create_shelf_buttons">
        <button className="create_shelf_save"><FontAwesomeIcon  icon={faSave} /></button>
        <button className="create_shelf_exit" onClick={onClick}><FontAwesomeIcon   icon={faTimesCircle} /></button>
        </div>
        </form>
        </section>
      
  )
}