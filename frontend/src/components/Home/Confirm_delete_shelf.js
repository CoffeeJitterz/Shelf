import React from "react";

//import styles
import './styles/confirm_delete.css'

export function Confirm_delete_shelf(props){
 //deconstruct props
 const {deleteShelf, handleClick, shelfName} = props;
  return (
    <div className="confirm_delete_message">
    <p className="delete_message">Are You Sure You Want To Delete {shelfName}?</p>
    <div className="confirm_delete_buttons">
    <button className="confirm_yes" onClick={deleteShelf}>Yes</button>
    <button className="confirm_no" onClick={handleClick} >No</button>
    </div>
    </div>
  )
}