import { Link, useNavigate } from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();
    return(<>
        <div>
            <button onClick={() => navigate(`/login`)}>Login</button>
            <button onClick={() => navigate(`/signup`)}>Signup</button>
            <hr className="solid" />
        </div>
        
        <h1>Welcome to Telemaco!</h1>
        <br />


    </>)    
}
