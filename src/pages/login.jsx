import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 

//const urlDomain = "http://localhost:4008/";
const url = "http://localhost:4008/api/auth/";

export default function LoginPage() {
    const [formData, setFormData] = useState({username: "", password: "", });
    function updateFormData(e) {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    //console.log(formData);

    async function handleSubmit (e) { 
        e.preventDefault();
        try {
            let res = await axios.post(url, formData);
            
            //TODO: add redicret and cleanup function
        } catch (e) {
            console.error(e.message);
        }
    }


    return(<>
        <h1>Login</h1>

        {/*TODO: add CSS to make proper formatting, limited using <label>*/}
        <form onSubmit={handleSubmit}>
            <label>username:  
                <input 
                    type="text" 
                    name="username"
                    value={formData.username}
                    placeholder="Enter username"
                    onChange={updateFormData}
                    required
                />
            </label>
            <br />

            <label>password:  
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={updateFormData}
                    required
                />
            </label>
            <br /> 

            <input type="submit" value="Sign Up" />
        </form>
        <br /> 
     
        <div>
            New user? Then click
            <Link to="/signup"><div>here</div></Link>
        </div>
    </>)
}