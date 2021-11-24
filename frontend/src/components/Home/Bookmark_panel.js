import { useState } from "react";
import { HuePicker} from "react-color";
export function Bookmark_panel(props){
  const {name, website, color, setColor} = props;
 
  return (
    <div className="edit">
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