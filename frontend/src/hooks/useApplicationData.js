import React, { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
const [shelves, setShelves] = useState()

  const handleDelete = (param, id) => {
    //axios delete request
return axios.delete(`http://localhost:3000/${param}/${id}`)
.then((response) => {
  console.log(`${param} Deleted`)
})
}
const handleUpdate = (param, id, update) => {
  //axios request
return axios.put(`http://localhost:3000/${param}/${id}`, update)
.then((response) => {
  console.log(`${param} Updated`)
})
}
const handleCreate = (param, creation) => {
   //axios request
   return axios.post(`http://localhost:3000/${param}`, creation)
   .then((response) => {
     axios.get(`http://localhost:3000/shelves`)
     .then ((response) => {
      console.log(response)
      setShelves(response.data)
     })
     console.log(`${param} Created`)
     console.log(response)
   })
}

const handleGet = (param) => {
  axios.get(`http://localhost:3000/${param}`).then(res => {
    console.log(res.data)
    setShelves(res.data)
  })
}
return { shelves, handleDelete, handleUpdate, handleCreate, handleGet, getBookmarks}
}