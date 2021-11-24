import React, { Fragment, useState } from "react";
import './styles/bookmark.css'
import { HuePicker} from "react-color";
import { Bookmark_panel } from "./Bookmark_panel";
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
      <div className="bookmark" style={{backgroundColor: color}}>
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
      <Bookmark_panel name={name} website={website} color={color} setColor={setColor}/>
      </section>
    )}
  </Fragment>
  )
}