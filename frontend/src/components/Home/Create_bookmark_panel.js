import { useState } from "react";
import axios from 'axios';
import { HuePicker} from "react-color";

export function Create_bookmark_panel(props){
  //axios request
axios.post('http://localhost:3000/bookmarks/create', {
  name: 'Facebook',
  url: 'https://www.facebook.com/'
})
.then((response) => {
  console.log(response)
})

  const [name, setName] = useState("null");
  
  //deconstruct props
  const {shelfName, color, setColor, onClick} = props;

  //set state for display_bookmark
  const [displayWebsite, setDisplayWebsite] = useState("Website")
  const [url, setUrl] = useState("Url")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookmark = {name, url, color};

    console.log(bookmark)
  }
  return (
    <div className="stack_edit" >
      <h6>Create Bookmark Panel</h6>
      <div className="displayBookmark" style={{backgroundColor: color}} >
        <p>{name}</p>
      </div>
        <form onSubmit={handleSubmit}>
        <input 
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
          type="text"
          required
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <HuePicker color={color} onChange={color => setColor(color.hex)}/>
        <div>
        <button onClick={onClick}>cancel</button>
        <button>Create</button>
        </div>
        </form>
      </div>
  )
}