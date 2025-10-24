import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

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

//
//let {"confirmPassword":_, ...formDataFiltered} = formData;



function SettingsComp({displayname}) {
    let [formEntries, setFormEntries] = useState({
        username: "",
        email: "",
        password: ""
    });
    function updateFormData(e) {
        setFormEntries({...formEntries, [e.target.name] : e.target.value});
    }
    //console.log(`${formEntries.username} -- ${formEntries.email} -- ${formEntries.password}`);
    
    
    async function handleSubmit(e, type) { //PATCH request
        e.preventDefault();

        try {
            let updateObject = null;
            switch (type) {
                case "username":
                    updateObject = { $set: {username: formEntries.username}};
                    break;
                case "email":
                    updateObject = { $set: {email: formEntries.email}};
                    break;
                case "password":
                    updateObject = { $set: {password: formEntries.password}};
                    break; 
                default:
                    throw Error("Unknown submit reference");
            }

            const formData = {
                username: displayname
            }
            let res = await axios.patch(
                url, 
                {data: {formData, "updateObject":updateObject}}
            );
            console.log(res); 
            
        } catch (err) {
            console.error(err);
        }
    }

    return (<>
        <div>
            <form onSubmit={e => handleSubmit(e, "username")}>
                <label>
                    Change username: 
                    <input 
                        type="text" 
                        name="username"
                        onChange={updateFormData}
                        value={formEntries.username}
                        />
                </label>
                <input name="username" type="submit" value="Update" />
            </form>
        </div>

        <div>
            <form onSubmit={e => handleSubmit(e, "email")}>
                <label>
                    Change email: 
                    <input 
                        type="text" 
                        name="email"
                        onChange={updateFormData}
                        value={formEntries.email}/>
                </label>
                <input name="email" type="submit" value="Update" />
            </form>
        </div>

        <div>
            <form onSubmit={e => handleSubmit(e, "password")}>
                <label>
                    Change password: 
                    <input 
                        type="text"
                        name="password"
                        onChange={updateFormData}
                        value={formEntries.password}/>
                </label>
                <input name="password" type="submit" value="Update" />
            </form>
        </div>
    </>);
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
            <SettingsComp displayname={displayname} />
        }
    </>);
} 