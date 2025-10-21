import { useState } from "react";
import { Link } from "react-router-dom";

//TODO:
// 1. Switch out the anchor tag at the bottom of the page with <Link> 
//    (after react-router-dom is setup of course)
// 2. Create a css file to link to this page, and change the spacing between 
//    email and password
// 3. When adding real validation, check to see if this is how it's done 
//    (Probably REALLY not)
// 4. Make it so user can choose between inserting email or username

function btn(password, email) {
    //Function works as expected

    //console.log(password, "--", email)
}

export default function LoginPage() {
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    return(<>
        <h1>Log in</h1>

        <label htmlFor="email">Email: </label> 
        <input 
            type="email" 
            placeholder="Enter email"
            required 
            onChange={e => setEmailText(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password: </label> 
        <input 
            onChange={e => setPasswordText(e.target.value)}
            type="password" 
            required
            placeholder="Enter password" 
        />
        <br />

        <button onClick={() => btn(emailText, passwordText)}>Login</button>
        <br /> <br />

        <div>
            New user? Then click
            <Link to="/signup"><div>here</div></Link>
        </div>
    </>);
}