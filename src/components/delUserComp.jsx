import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DelUserComp({displayname}) {
    const navigate = useNavigate();
    const url = "http://localhost:4008/users";

    async function btn(e) {
        e.preventDefault();
        try {            
            const formdata = {username: displayname};
            let res = await axios.delete(url, {data: formdata});
            //console.log(res)

            navigate(`/`, {replace: true});
        } catch (err) {
            console.error(err);
        }   
    }

    return (<>
        <button onClick={btn}>
            Delete account?
        </button>
    </>);
}