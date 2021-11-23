import React, { Fragment, useState } from "react";
import {Bookmark_stack} from './Bookmark_stack'
import './styles/shelf.css'

export function Shelf (props) {
  const {onClick} = props;

  const shelves = ['my shelf', 'classic games', 'science articles', 'funny', 'thing'];
  
  const output = Array.isArray(shelves) && shelves.map(shelf => {
   return <Bookmark_stack shelfName={shelf} onClick={onClick} />
  }) 
  return (
   
    <div className="shelf" >
      {output}

    </div>  
  
   
  )
}