import { useState } from "react";
import { HuePicker} from "react-color";

export function Create_bookmark_panel(props){
  const [name, setName] = useState("null");
  

  //deconstruct props
  const {shelfName, color, setColor, onClick} = props;

  //set state for display_bookmark
  const [displayWebsite, setDisplayWebsite] = useState("Website")
  const [url, setUrl] = useState("Url")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookmark = {name, url};


  }
  return (
    <div className="stack_edit" >
      <h6>Create Bookmark Panel</h6>
      <div className="displayBookmark" style={{backgroundColor: color}} >
        <p>{name}</p>
      </div>

        {/* <p>Name: <input type="text" placeholder={shelfName} onChange={e => setDisplayWebsite(e.target.value)}></input></p>
        <p>URL: <input type="text" placeholder={shelfName} ></input></p>
        <HuePicker color={color} onChange={color => setColor(color.hex)}/> */}
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