import {Link } from "react-router-dom";

const Home=()=>{
    return(
        <div>
            <h1>Welcome to Quiz App!</h1>
            <p>Test your Knowledge and Challenge yourself with Our Quiz App.</p> 
            <Link to=".login">Login to get started</Link>
        </div>

    );
    
};
export default Home;