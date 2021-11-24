import { useState } from "react";
import { HuePicker} from "react-color";
export function Shelf_panel(props){
  const {shelfName, color, setColor} = props;

  return (
    <div className="stack_edit">
        <p>Name: <input type="text" placeholder={shelfName}></input></p>
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Delete</button>
        <button>Save</button>
        </div>
      </div>
  )
}