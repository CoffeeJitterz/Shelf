import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";
import Select from 'react-select'

//import helpers
import {complimentaryColor, hextoRgb} from '../../helpers/color_helpers'

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle, faSave} from '@fortawesome/free-solid-svg-icons'

//import styles
import './styles/create_bookmark_panel.css'

export function Create_bookmark_panel(props){
//deconstruct props
const {Create, name, setName, url, setUrl, color, setColor, shelfName, shelfId,  onClick, shelfCompColor, shelfCompColor2} = props;


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
  <div className="create_bookmark_panel" style={{borderColor: shelfCompColor}}>
    <div className="display_bookmark_container" style={{backgroundColor: shelfCompColor}}>
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
      style={{backgroundColor: shelfCompColor, borderColor: shelfCompColor2, color: complimentaryColor(hextoRgb(color ? color : '#fff'), 255)}}
        />
    <select className="select_font" style={{backgroundColor: shelfCompColor, borderColor: shelfCompColor2}} name='option' onChange={e => setOption(e.target.value)}>
    <option value='Arial'>Arial</option>
    <option value='Copperplate Gothic'>Copperplate Gothic</option>
    <option value='fantasy'>fantasy</option>
    <option value='Brush Script MT'>Brush Script MT</option>
    <option value='Comic Sans MS'>Comic Sans MS</option>
    <option value="American Typewriter">American Typewriter</option>
    <option value="Courier">Courier</option>
    <option value="Arial Black">Arial Black</option>
    <option value="Luminari">Luminari</option>
    </select>
    <input 
      className="url_input"
      type="text"
      required
      value={url}
      onChange={e => setUrl(e.target.value)}
      style={{backgroundColor: shelfCompColor, borderColor: shelfCompColor2}}
      />
    <HuePicker color={color} onChange={color => setColor(color.hex)}/>
      <div className="save_bookmark">
        <button className="save_bookmark_button" ><FontAwesomeIcon icon={faSave} /></button>
      </div>
    </form>
        <button className="close_create_bookmark" onClick={onClick}><FontAwesomeIcon icon={faTimesCircle} /></button>
      </div>
  )
}