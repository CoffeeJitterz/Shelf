import React, { Fragment, useState, useEffect } from "react";
import {Create_panel} from './Create_panel'
import axios from "axios";

export function Create(props){

//Create modes for handelClick (toggle)
const First = 'First';
const Second = 'Second';
const [mode, setMode] = useState(First)
const [desc, setDesc] = useState("");
const handleClick = () => {
    if (mode === First) {
      setMode(Second)
      console.log(mode)
    } else {
      setMode(First)
      console.log(mode)
    }
  };

const createItem = (desc) =>{
  console.log("Looking Great!");
  console.log("The value of desc ",desc);
  let temp = {desc: desc};
  
  axios.post('http://localhost:3000/bookmarks',temp)
   //To the route which is there in the backend.
  .then((result)=>{
    console.log(result);

  });

}
//Set state for newBookmarkColor 
const [newBookmarkColor, setNewBookmarkColor] = useState('#fff')

  return (

    <div>
      <h1>Testing only</h1>
      <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} />
      <button onClick={()=>createItem(desc)}>Create</button>
    </div>      
    // <Fragment>
    //   {mode === First && (
    //     <div >
    //         <button onClick={handleClick} >CREATE+</button>
    //       </div>
  
    //   )}
    //   {mode === Second && (
    //     <div >
    //         <Create_panel onClick={handleClick} color={newBookmarkColor} setColor={setNewBookmarkColor}/>
    //       </div>
  
    //   )}
    // </Fragment>
    )
}