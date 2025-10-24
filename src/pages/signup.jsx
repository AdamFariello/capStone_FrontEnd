import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//TODO: in the full project make sure to swap this out with the actual
const serverURL = "http://localhost:4008/";
//const serverURL = "http://127.0.0.1:4008";


export default function SignupPage() {
    // Stealing from teacher's code instead since it's clearner and better to update
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    function updateFormData(e) {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate(); 


    //async function test_postUser(e) {
    async function handleSubmit(e) { //dont think I need it yet
        e.preventDefault();
        try {
            if (formData.password !== confirmPassword) {
                throw new Error("Passwords don't match");
            }
            
            let hasEmptyValue = false;
            Object.values(formData).map(e => {
                //TODO: test properly
                hasEmptyValue = hasEmptyValue || (e.length == 0) 
            })
            if (hasEmptyValue) {
                throw new Error("Invalid. Missing: username, email, and/or passwords")
            }
            
            const serverURLArg = `${serverURL}users`;
            await axios.post(serverURLArg, formData);
            //console.log(res);

            navigate(`/user/${formData.username}`);
        } catch (e) {
            console.error(e);
        }
    }
    

    return(<>
        <h1>Signup</h1>

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

            <label>email:  
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    placeholder="Enter Email"
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

            {/**TODO: add checks for password*/}
            <label>confirm password:  
                <input 
                    type="password" 
                    name="confirmPassword"
                    /*value={formData.confirmPassword}*/
                    placeholder="Enter Password Again"
                    onChange={e => setConfirmPassword(e.target.value)}
                    /*onChange={updateFormData}*/
                    required
                />
            </label>
            <br />

            {/**TODO: check if button will look different with <button> (and work) */}
            <input type="submit" value="Sign Up" />
        </form>
        <br /> 
     
        <div>
            <p>Have an account? Log in</p> 
            <Link to="/Login"><div>here</div></Link>
        </div>
    </>)
}