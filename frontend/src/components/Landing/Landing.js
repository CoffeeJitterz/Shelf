
import App from "../../App"
import bookmark from '../bookmark.jpeg'

import Login from '../Login/Login'

import './styles/landing.css'

export default function Landing(props){
const {loggedIn, setloggedIn} = props;

  return (
   <div className="landing_container"> 
     <Login loggedIn={loggedIn} setloggedIn={setloggedIn}/>
    
    <img src={bookmark} />
   
   </div>

  )
}