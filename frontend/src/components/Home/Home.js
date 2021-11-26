import { useEffect } from 'react'
import { useApplicationData } from "../../hooks/useApplicationData";
//import component
import { Shelf } from './Shelf'

export default function Home(props){
const { shelves, handleDelete, handleUpdate, handleCreate, handleGet} = useApplicationData();
  return (
    <div>
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