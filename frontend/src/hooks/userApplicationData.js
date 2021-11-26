import React, { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
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
     console.log(`${param} Created`)
   })
}
return { handleDelete, handleUpdate, handleCreate}
}