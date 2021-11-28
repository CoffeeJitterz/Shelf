import { useEffect } from 'react'
import { useApplicationData } from "../../hooks/useApplicationData";
//import component
import { Shelf } from './Shelf'

import './styles/home.css'

export default function Home(props){
const { shelves, handleDelete, handleUpdate, handleCreate, handleGet} = useApplicationData();
  return (
    <div className="home">
      <Shelf 
      shelves={shelves}
      Delete={handleDelete}
      Update={handleUpdate}
      Create={handleCreate}
      Get={handleGet}
      />
    </div>
  )
}