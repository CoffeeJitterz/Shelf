import React from "react";

//import styles
import './styles/confirm_delete.css'

export default function Confirm_delete_bookmark(props){
 //deconstruct props
 const {deleteBookmark, handleClick, bookmarkName} = props;
  return (
    <div className="confirm_delete_message">
    <p className="delete_message">Are You Sure You Want To Delete {bookmarkName}?</p>
    <div className="confirm_delete_buttons">
    <button className="confirm_yes" onClick={deleteBookmark}>Yes</button>
    <button className="confirm_no" onClick={handleClick} >No</button>
    </div>
    </div>
  )
}