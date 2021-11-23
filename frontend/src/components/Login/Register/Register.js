
import { useState } from "react";

export default function Register(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>
        Register
      </h1>
      <form>
        <input type="text" 
        className="login_form"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}>
        </input>
      </form>
    </div>
  )
}
    
  
