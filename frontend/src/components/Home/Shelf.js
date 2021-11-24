import React, { Fragment, useState, useEffect } from "react";
import {Bookmark_stack} from './Bookmark_stack'
import axios from 'axios';
import './styles/shelf.css'

export function Shelf (props) {
  const [shelves, setShelves] = useState();

useEffect(() => {
  axios.get('http://localhost:3000/shelves').then(res => {
    console.log(res.data)
    setShelves(res.data)
  })
}, []);
  const {onClick} = props;

  // const shelves = ['my shelf', 'classic games', 'science articles', 'funny', 'thing'];
  console.log('shelves', shelves)
  const output = Array.isArray(shelves) && shelves.map(shelf => {
   return <Bookmark_stack shelfName={shelf.name} onClick={onClick} />
  }) 
  return (
   
    <div className="shelf" >
      {output}

    </div>  
  
   
  )
}