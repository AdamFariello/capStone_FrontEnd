import { useState } from "react";
import { Link } from "react-router-dom";

// TODO:
// 1. Add an email checking pattern
// 2. Make it so text boxes are aligned (will probably need CSS)
// 3. Switch out the anchor tag at the bottom of the page with <Link> 
//    (after react-router-dom is setup of course)

function btn(usernameText, emailText, passwordText) {
    //console.log(usernameText, "-", emailText, "-", passwordText);

    
}

export default function SignupPage() {
    const [usernameText, setUserNameText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    
    return(<>
        <h1>Signup</h1>
        <label htmlFor="Username">Username: </label>  
        <input 
            type="text" placeholder="Enter Username"
            required
            onChange={e => setUserNameText(e.target.value)}
        />
        <br />

        <label htmlFor="email">Email: </label>
        <input 
            type="email" placeholder="Enter Email"
            required
            onChange={e => setEmailText(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password: </label>  
        <input 
            type="password" placeholder="Enter Password"
            required
            onChange={e => setPasswordText(e.target.value)}
        />
        <br /> 
        
        <button onClick={() => btn(usernameText, emailText, passwordText)}>
            Signup!
        </button>
        <br /> <br />

        <div>
            <p>Have an account? Log in</p> 
            <Link to="/Login"><div>here</div></Link>
        </div>
    </>)
}