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
async function test_patchUser(e) {
//async function handleSubmit(e) {
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


function SettingsComp() {
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("test");
    }

    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Change username: 
                    <input type="text" />
                </label>
                <input type="submit" value="Change" />
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