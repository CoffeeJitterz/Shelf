import { useEffect } from 'react'
import { useApplicationData } from "../../hooks/userApplicationData";
//import component
import { Shelf } from './Shelf'

export default function Home(props){
const { handleDelete, handleUpdate, handleCreate} = useApplicationData();
  return (
    <div>
      <Shelf 
      Delete={handleDelete}
      Update={handleUpdate}
      Create={handleCreate}
      />
    </div>
  )
}