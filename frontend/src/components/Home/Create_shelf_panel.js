//import { useState } from "react";
import { HuePicker} from "react-color";

export function Create_shelf_panel(props){
  //deconstruct props
  const {shelfName, color, setColor, onClick} = props;

  return (
    <div className="stack_edit">
      <h3>Create Shelf Panel</h3>
        <p>Name: <input type="text" placeholder={shelfName}></input></p>
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button onClick={onClick}>Cancel</button>
        <button onClick={onClick}>Create</button>
        </div>
      </div>
  )
}