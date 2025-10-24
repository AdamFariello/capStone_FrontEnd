import { useParams } from "react-router-dom";


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

    } catch (err) {
        console.error(err);
    }
}

export default function UserProfile(username) {
    console.log("username: ", username);     

    const params = useParams().id;
    console.log("parms: ", params);

    return (<>
        <h1>test</h1>
    </>);
} 