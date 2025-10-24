import { useParams } from "react-router-dom";
import { useState } from "react";


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



function SettingsComp() {
    let [formEntries, setFormEntries] = useState({
        username: "",
        email: "",
        password: ""
    });
    function updateFormData(e) {
        setFormEntries({...formEntries, [e.target.name] : e.target.value});
    }
    
    
    //console.log(`${formEntries.username} -- ${formEntries.email} -- ${formEntries.password}`);
    

    async function handleSubmit(e, type) {
        e.preventDefault();
        console.log(e);
        console.log(type);
    }


    async function patchInfo(e) {
        e.preventDefault();
        try {
            const serverURLArg = `${serverURL}users`

            //TODO: Tie variable declaration to switch statement
            const updateObject = { 
                $set: { 
                    password: "realPassword"
                } 
            }; 

            let res = await axios.patch(
                serverURLArg, 
                {data: {formData, updateObject:updateObject}}
            );
            console.log(res); 

        } catch (err) {/*  */
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
                        value={formEntries.username}/>
                </label>
                <input type="submit" value="Update" />
            </form>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Change email: 
                    <input 
                        type="text" 
                        name="email"
                        onChange={updateFormData}
                        value={formEntries.email}/>
                </label>
                <input type="submit" value="Update" />
            </form>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Change password: 
                    <input 
                        type="text"
                        name="password"
                        onChange={updateFormData}
                        value={formEntries.password}/>
                </label>
                <input type="submit" value="Update" />
            </form>
        </div>
    </>);
}


export default function UserProfile() {
    let [showBooks, setShowBooks] = useState(false);
    const params = useParams().id;
    //console.log("parms: ", params);

    return (<>
        <h1>{params}</h1>

        <div>
            <button onClick={() => setShowBooks(true)}>Books</button>
            <button onClick={() => setShowBooks(false)}>Settings</button>
            <hr className="solid"></hr>
        </div>

        {/*TODO: Fixup this part*/}
        {showBooks ?
            <></>
            :
            <SettingsComp />
        }
    </>);
} 