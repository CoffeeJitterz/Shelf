import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";
import Select from 'react-select'

//import helpers
import {complimentaryColor, hextoRgb} from '../../helpers/color_helpers'

//Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

//import styles
import './styles/create_bookmark_panel.css'

export function Create_bookmark_panel(props){

//deconstruct props
const {Create, name, setName, url, setUrl, color, setColor, shelfName, shelfId,  onClick, shelfCompColor} = props;

const [option, setOption] = useState();
const handleChange = e => {
  setOption(e.target.value )

//create complimentary color
const newColor = complimentaryColor(hextoRgb(color ? color : '#fff'), 255);
}

  
  return (
    <div className="create_bookmark_panel" >
      <div className="display_bookmark_container" style={{backgroundColor: shelfCompColor}}>
      <div className="display_bookmark" style={{backgroundColor: color}} >
        <p style={{fontFamily: option, color: complimentaryColor(hextoRgb(color), 255)}}>{name}</p>
      </div>
      </div>
        <form className="create_bookmark_form" onSubmit={Create}>
        <input 
          className="name_input"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select name='option' onChange={handleChange}>
    <option value='Arial'>Arial</option>
    <option value='Copperplate Gothic'>Copperplate Gothic</option>
    <option value='fantasy'>fantasy</option>
    <option value='Brush Script MT'>Brush Script MT</option>
    </select>
        <input 
          className="url_input"
          type="text"
          required
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button>Create</button>
        </div>
        </form>
        <button onClick={onClick}><FontAwesomeIcon icon={faTimesCircle} /></button>
      </div>
  )
}