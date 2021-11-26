import React, { Fragment, useState, useEffect } from "react";

import {Bookmark_stack} from './Bookmark_stack'
import {Create_shelf} from './Create_shelf'

import './styles/shelf.css'

export function Shelf (props) {
//deconstruct props
const {onClick, shelves, Get, Delete, Update, Create} = props;


//get shelves array from api and set shelves state to array
useEffect(() => {
 Get('shelves')
}, []);

//map through shelves array and pass props to <Bookmark_stack />
const output = Array.isArray(shelves) && shelves.map(shelf => {
 return <Bookmark_stack 
          user_id={shelf.user_id} 
          shelfName={shelf.name} 
          shelfId={shelf.id} 
          onClick={onClick} 
          bookmarks={shelf.bookmarks}
          Delete={Delete}
          Update={Update}
          Create={Create}
          shelf={shelf}
          />
  }) 
  return (
   
    <div className="shelf">
      <Create_shelf 
        user_id='1' 
        onClick={onClick}
        Create={Create}
        />
      {output}

    </div>  
  
   
  )
}