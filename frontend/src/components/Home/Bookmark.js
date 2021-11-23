import React, { Fragment, useState } from "react";
import './styles/bookmark.css'
import { HuePicker} from "react-color";
export function Bookmark(props){
  const {website, name} = props;

  //color hook
  const [color, setColor] = useState('#fff')

  //toggle for edit bookmark window
  const First = 'First';
  const Second = 'Second';
  const [mode, setMode] = useState(First)
  const handleClick = () => {

      if (mode === First) {
        setMode(Second)
      } else {
        setMode(First)
      }
  };

  return (
    <Fragment>
    {mode === First && (
      <section>
      <div className="spine" style={{backgroundColor: color}}>
        <div>
          <p>{name}</p>
          <p>{website}</p>
        </div>
      <button onClick={handleClick}>V</button>
      </div>
      </section>
    )}
    {mode === Second && (
      <section>
      <div className="bookmark_edit" style={{backgroundColor: color}}>
        <div>
          <p>{name}</p>
          <p>{website}</p>
        </div>
      <button onClick={handleClick}>^</button>
      </div>
      <div className="edit">
        <p>Name: <input type="text" placeholder={name}></input></p>
        <p>URL: <input type="text" placeholder={website}></input></p>
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
      </div>  
      </section>
    )}
  </Fragment>
  )
}