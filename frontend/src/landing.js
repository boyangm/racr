<<<<<<< HEAD
import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
=======

import React, {useState}  from 'react'

>>>>>>> 8b1e39691d11d0041d3083b717dda062a4dc9059
const Landing =() =>{
    const email = useInput('');
    const password = useInput('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('this is where i send shit');
        
    }
    return(
<<<<<<< HEAD
=======

>>>>>>> 8b1e39691d11d0041d3083b717dda062a4dc9059
        <div className="loginWrap">
            <form id="login">
                <label id="email">Email:</label>
                <input {...email}type ='text' name = 'name'></input>
<<<<<<< HEAD
                <label id="password">Password:</label>
                <input {...password}type ='password' name = 'name'></input>
                <div><button id="submitButton" onClick ={handleSubmit} type ='submit'>Submit</button></div>
                <div class="registerLink"><Link to="/signup">Register</Link></div>
=======
                <label id="password">password:</label>
                <input {...password}type ='password' name = 'name'></input>
                <button onClick ={handleSubmit} type ='submit'>Submit</button>

>>>>>>> 8b1e39691d11d0041d3083b717dda062a4dc9059
            </form>
        </div>
    )
}

const useInput = (initialvalue) => {
    const [inputs, setInputs] = useState(initialvalue);
    const handlevaluechange =(e) =>{
        setInputs(e.target.value)
        console.log(e.target.value)

    }
    return {
        value:inputs,
        onChange: handlevaluechange
    }

  }
export default Landing