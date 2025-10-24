import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

import SettingsComp from "../components/settingsComp";

const url = "http://localhost:4008/users";

async function test_deleteUser(e) {
//async function handleSubmit(e) {
    e.preventDefault();
    try {            
        const serverURLArg = `${serverURL}users`;
        let res = await axios.delete(serverURLArg, {data: formData});
        console.log(res)
    } catch (err) {
        console.error(err);
    }
}

export default function UserProfile() {
    let [showBooks, setShowBooks] = useState(false);
    const displayname = useParams().id;
    //console.log("parms: ", params);

    return (<>
        <h1>{displayname}</h1>

        <div>
            <button onClick={() => setShowBooks(true)}>Books</button>
            <button onClick={() => setShowBooks(false)}>Settings</button>
            <hr className="solid"></hr>
        </div>

        {/*TODO: Fixup this part*/}
        {showBooks ?
            <></>
            :
            <>
                <SettingsComp displayname={displayname} />
                <br />
            </>
        }
    </>);
} 