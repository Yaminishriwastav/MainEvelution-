import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login=()=>{
    const{login}=useContext(AuthContext);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const nevigate =useNavigate();

    const handleLogin =async(e)=>{
        e.preventDefault();
        const user=await login(username,password);
        if (user){
            Navigate("./quiz");
        }else{
            setEerror("Invalid creditials")
        }
    };

    return(
        <div>
            <form onSubmit={handelLogin}>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
               />
               <input
                type="password"
                placeholder="Password"
                value={username}
                onChange={(e)=>setPassword(e.target.value)}
                required
               />
               <button type="submit">Login</button>

               
            </form>
            
        </div>
    );

};
export default Login;