import { useState } from "react";
import { HuePicker} from "react-color";

export function Edit_Shelf_panel(props){
//deconstruct props
const {shelfName, color, setColor} = props;

  return (
    <div className="stack_edit">
      <h3>Edit Shelf Panel</h3>
        <p>Name: <input type="text" placeholder={shelfName}></input></p>
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Delete</button>
        <button>Save</button>
        </div>
      </div>
  )
}