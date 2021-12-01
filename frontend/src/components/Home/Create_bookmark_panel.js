import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";
import Select from 'react-select'

//import components
import {Select_font} from './Select_font'

//import helpers
import {complimentaryColor, hextoRgb} from '../../helpers/color_helpers'

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle, faSave} from '@fortawesome/free-solid-svg-icons'

//import styles
import './styles/create_bookmark_panel.css'

export function Create_bookmark_panel(props){
//deconstruct props
const {Create, name, setName, url, setUrl, color, setColor, shelfName, shelfId,  onClick, shelfColor, shelfCompColor, shelfCompColor2} = props;


const [option, setOption] = useState();
const newBookmark = {shelf_id: shelfId, name, url, color, font: option}
const handleChange = e => {
  setOption(e.target.value )
}  
const createBookmark = (e) => {
  e.preventDefault();
  console.log(newBookmark)
  Create('bookmarks', newBookmark).then(()=>{
    onClick()
  })
}


//create complimentary color
const newColor = complimentaryColor(hextoRgb(color ? color : '#fff'), 255);
  return (
  <div className="create_bookmark_panel" style={{backgroundColor: shelfCompColor}}>
    <div className="display_bookmark_container">
      <div className="display_bookmark_wrapper">
        <div className="display_bookmark" style={{backgroundColor: color}} >
          <p style={{fontFamily: option, color: newColor}}>{name}</p>
        </div>
      </div>
    </div>
    <form className="create_bookmark_form" onSubmit={createBookmark}>
    <input 
      className="name_input"
      type="text"
      required
      value={name}
      onChange={e => setName(e.target.value)}
      style={{backgroundColor: shelfCompColor, borderColor: shelfColor, color: newColor}}
        />
        <Select_font
          shelfColor={shelfColor}
          color1={shelfCompColor}
          color2={shelfCompColor2}
          handleChange={handleChange}
        />
    <input 
      className="url_input"
      type="text"
      required
      value={url}
      onChange={e => setUrl(e.target.value)}
      style={{backgroundColor: shelfCompColor, borderColor: shelfColor, color: newColor}}
      />
    <HuePicker color={color} onChange={color => setColor(color.hex)}/>
      <button className="save_bookmark_button" ><FontAwesomeIcon icon={faSave} /></button>
    </form>
        <button className="create_bookmark_exit" onClick={onClick}><FontAwesomeIcon icon={faTimesCircle} /></button>
      </div>
  )
}