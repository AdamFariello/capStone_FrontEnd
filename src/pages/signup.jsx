import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv"
import cors from "cors";
import e from "cors";

//TODO: in the full project make sure to swap this out with the actual
const serverURL = "http://localhost:4008/";

// TODO:
// 1. Add an email checking pattern
// 2. Make it so text boxes are aligned (will probably need CSS)
// 3. Switch out the anchor tag at the bottom of the page with <Link> 
//    (after react-router-dom is setup of course)
// 4. Add a visual of where you don't give proper info, like duplicate usernames

async function btn_test() {
    //Function tests "/" route to make sure it can connect at all
    try {
        let res = await axios.get(serverURL);
        await console.log(res.data);    
    } catch (e) {
        console.error(e.message);
    }
}

async function createNewUser(usernameText, emailText, passwordText) {
    //console.log(usernameText, "-", emailText, "-", passwordText);
    if (!usernameText || !emailText || !passwordText) return;

    const serverURLArg = serverURLArg + "/user";
    try {
        let res = await axios.post(serverURLArg);
        await console.log(res.data);    
    } catch (e) {
        console.error(e.message);
    }
}

export default function SignupPage() {
    const [usernameText, setUserNameText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    // Stealing from teacher's code instead since it's clearner and better to update
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function updateFormData(e) {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    // function handleClick() //dont think I need it yet
    function handleSubmit(e) {
        e.preventDefault();
        try {
            let hasEmptyValue = false;
            Object.values(formData).map(e => {
                if (e.length == 0) {
                    hasEmptyValue = true;
                }
            })
            if (hasEmptyValue) {
                throw new Error("Invalid. Missing: username, email, and/or passwords")
            }
            if (formData.password !== formData.confirmPassword) {
                throw new Error("Passwords don't match");
            }
            
            let {"confirmPassword":_, ...formDataFilt} = formData;
            
            console.log(formData);
            console.log(formDataFilt);


            
            
                //TODO: fill
                //await createNewUser(formData);

                //nav("userDash") //TODO: create a page highlighting this

        } catch (e) {
            console.error(e.message);
        }
    }
    

    return(<>
        <h1>Signup</h1>

        {/*TODO: add CSS to make proper formatting, limited using <label>*/}
        <form onSubmit={handleSubmit}>
            <label>Username:  
                <input 
                    type="text" 
                    name="userName"
                    value={formData.userName}
                    placeholder="Enter Username"
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
                    value={formData.confirmPassword}
                    placeholder="Enter Password Again"
                    onChange={updateFormData}
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