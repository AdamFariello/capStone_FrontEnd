import { useState } from "react";

//TODO:
// 1. Switch out the anchor tag at the bottom of the page with <Link> 
//    (after react-router-dom is setup of course)
// 2. Create a css file to link to this page, and change the spacing between 
//    email and password

export default function LoginPage() {
    
    return(<>
        <h1>Log in</h1>

        <label>Email: </label> 
        <input type="text" placeholder="Enter email" />
        <br />

        <label>Password: </label> 
        <input type="password" placeholder="Enter password" />
        <br />

        <p>New user? Then click <a href="localhost">here</a></p>
    </>)
}