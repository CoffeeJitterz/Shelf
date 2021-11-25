import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';

import {Bookmark_stack} from './Bookmark_stack'
import {Create_shelf} from './Create_shelf'

import './styles/shelf.css'

export function Shelf (props) {
//deconstruct props
const {onClick} = props;

//set state for shelves array
const [shelves, setShelves] = useState();

//get shelves array from api and set shelves state to array
useEffect(() => {
  axios.get('http://localhost:3000/shelves').then(res => {
    console.log(res.data)
    setShelves(res.data)
  })
}, []);

//map through shelves array and pass props to <Bookmark_stack />
const output = Array.isArray(shelves) && shelves.map(shelf => {
 return <Bookmark_stack shelfName={shelf.name} onClick={onClick} bookmarks={shelf.bookmarks}/>
  }) 
  return (
   
    <div className="shelf">
      <Create_shelf />
      {output}

    </div>  
  
   
  )
}