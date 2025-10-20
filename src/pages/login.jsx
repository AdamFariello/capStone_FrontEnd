import { useState } from "react";

//TODO:
// 1. Switch out the anchor tag at the bottom of the page with <Link> 
//    (after react-router-dom is setup of course)
// 2. Create a css file to link to this page, and change the spacing between 
//    email and password
// 3. When adding real validation, check to see if this is how it's done 
//    (Probably REALLY not)

function btn(password, email) {
    //Function works as expected
    
    //console.log(password, "--", email)
}

export default function LoginPage() {
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    return(<>
        <h1>Log in</h1>

        <label>Email: </label> 
        <input 
            type="text" placeholder="Enter email" 
            onChange={e => setEmailText(e.target.value)}
        />
        <br />

        <label>Password: </label> 
        <input 
            onChange={e => setPasswordText(e.target.value)}
            type="password" 
            placeholder="Enter password" 
        />
        <br />

        <button onClick={() => btn(emailText, passwordText)}>Login</button>
        <br /> <br />

        <p>New user? Then click <a href="localhost">here</a></p>
    </>);
}