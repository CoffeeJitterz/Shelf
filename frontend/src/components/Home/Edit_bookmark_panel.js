import { useState } from "react";
import { HuePicker} from "react-color";

export function Edit_bookmark_panel(props){
//deconstruct props
const {name, website, color, setColor} = props;
 
  return (
    <div className="edit">
      <h3>Edit Panel</h3>
        <p>Name: <input type="text" placeholder={name}></input></p>
        <p>URL: <input type="text" placeholder={website}></input></p>
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Delete</button>
        <button>Save</button>
        </div>
    </div>  
  )
}