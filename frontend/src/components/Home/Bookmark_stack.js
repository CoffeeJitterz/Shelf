import React, { Fragment, useState } from "react";
import { HuePicker} from "react-color";
import { hextoRgb, complimentaryColor } from '../../helpers/color_helpers';
import {Bookmark} from './Bookmark'
import './styles/bookmark_stack.css'

export function Bookmark_stack(props){
  const First = 'First';
const Second = 'Second';
const [mode, setMode] = useState(First)
const [color, setColor] = useState('#fff')
const handleClick = () => {
  if (mode === First) {
    setMode(Second)
    console.log(mode)
  } else {
    setMode(First)
    console.log(mode)
  }
};

  const {onClick, shelfName} = props;
 const websites = [{name:'Facebook', site: 'www.facebook.com'}, {name:'google', site: 'www.google.com'}, {name:'youtube', site: 'www.youtube.com'}, {name:'tmall', site: 'www.tmall.com'}, {name:'baidu', site: 'www.baidu.com'}, {name:'qq', site: 'www.qq.com'}, {name:'yahoo', site: 'www.yahoo.com'}, {name:'wikipedia', site: 'www.wikipedia.org'}, {name:'zoom', site: 'www.zoom.com'}, {name:'reddit', site: 'www.reddit.com'}];
 
 const compColor = complimentaryColor(hextoRgb(color), 180)
 const compColor2 = complimentaryColor(hextoRgb(color), 20)

 const output = Array.isArray(websites) && websites.map((website) => {return <Bookmark name={website.name} website={website.site} onClick={onClick}/>})
  return (
    <Fragment>
    {mode === First && (
    <section className="Spine_Stack" >
      <div style={{backgroundColor: color}}>
        <div className="shelf_name" style={     {backgroundColor:`rgb(${compColor[0]}, ${compColor[1]}, ${compColor[2]})`}}>
          <h1  style={{color:`rgb(${compColor2[0]}, ${compColor2[1]}, ${compColor2[2]})`}}>{shelfName}</h1>
          <button onClick={handleClick}>V</button>
        </div>
        <div>
          {output}
        </div>
      </div>
    </section>
    )}
     {mode === Second && (
    <section className="Spine_Stack" >
      <div style={{backgroundColor: color}}>
        <div className="shelf_name" style={{backgroundColor:`rgb(${compColor[0]}, ${compColor[1]}, ${compColor[2]})`}}>
          <h1 style={{color:`rgb(${compColor2[0]}, ${compColor2[1]}, ${compColor2[2]})`}}>{shelfName}</h1>
          <button onClick={handleClick}>^</button>
        </div>
      </div>
      <div className="Spine_Stack_edit">
        <p>Name: <input type="text" placeholder={shelfName}></input></p>
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
          {output}
        </div>
      </div>
    </section>
    )}
    </Fragment>
  )
}