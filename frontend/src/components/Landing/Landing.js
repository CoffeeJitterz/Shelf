
import App from "../../App"
import books from '../books.jpeg'

import Login from '../Login/Login'

import './styles/landing.css'

export default function Landing(props){
const {loggedIn, setloggedIn} = props;

  return (
   <div className="landing_container"> 
     <Login loggedIn={loggedIn} setloggedIn={setloggedIn}/>
    <div>
    <img src={books} />
    </div>
   </div>

  )
}